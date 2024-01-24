import prismaClient from "../../prisma";
import PDFDocument from 'pdfkit';

class GetPdfService {
  async execute(clientId: string): Promise<Buffer> {
    const list = await prismaClient.contact.findMany({
      where: {
        clientId: clientId
      },
      select: {
        id: true,
        email: true,
        nomeCompleto: true,
        telefone: true,
        clientId: true,
        communications: true,
        dataRegistro: true,
        _count: true
      }
    });

    if (list.length === 0) {
      throw new Error('Nenhum dado encontrado para o clientId fornecido.');
    }

    const doc = new PDFDocument();

    doc.font('Helvetica-Bold').fontSize(20).text('Connectfy-CRM', { align: 'center' });
    doc.moveDown(0.5);
    
    doc.moveDown(1);
    doc.font('Helvetica').fontSize(16).text('Relatório de Contatos do Cliente', { align: 'center' });
    doc.moveDown(1.5);

    list.forEach(dado => {
      doc.moveDown(1.5);

      doc.font('Helvetica-Bold').fontSize(14).text(`ID: ${dado.id}`, { color: 'navy' });
      doc.font('Helvetica').fontSize(12).text(`Nome: ${dado.nomeCompleto}`, { color: 'darkgreen' });
      doc.font('Helvetica').fontSize(12).text(`Email: ${dado.email}`, { color: 'darkgreen' });
      doc.font('Helvetica').fontSize(12).text(`Telefone: ${dado.telefone}`, { color: 'darkgreen' });
      doc.font('Helvetica').fontSize(12).text(`Data de Registro: ${dado.dataRegistro}`, { color: 'darkgreen' });
      doc.font('Helvetica').fontSize(12).text(`ID do Cliente: ${dado.clientId}`, { color: 'darkgreen' });

      if (dado.communications.length !== 0) {
        doc.moveDown(0.5);
        doc.font('Helvetica').fontSize(12).text(`Outras opções de contato: ${dado.communications}`, { color: 'darkblue' });
      }

      doc.moveDown();
      doc.lineCap('butt').moveTo(50, doc.y).lineTo(550, doc.y).stroke();
      doc.moveDown(1.5);
    });

    doc.moveDown(2);
    doc.font('Helvetica').fontSize(12).text('Obrigado por escolher a nossa empresa para seus serviços.', { align: 'center' });

    doc.end();

    return new Promise((resolve, reject) => {
      const chunks: any[] = [];
      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', reject);
    });
  }
}

export { GetPdfService };
