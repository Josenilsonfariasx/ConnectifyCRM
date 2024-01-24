import prismaClient from "../../prisma";
import PDFDocument from 'pdfkit';
import { Request, Response } from "express";

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

    doc.fontSize(16).text('Relatório de Contatos do Cliente', { align: 'center' });
    doc.moveDown();
    list.forEach(dado => {
      doc.moveDown(1.5);
      doc.font('Helvetica-Bold').fontSize(14).text(`ID: ${dado.id}`);
      doc.font('Helvetica').fontSize(12).text(`Nome: ${dado.nomeCompleto}`);
      doc.font('Helvetica').fontSize(12).text(`Email: ${dado.email}`);
      doc.font('Helvetica').fontSize(12).text(`Telefone: ${dado.telefone}`);
      doc.font('Helvetica').fontSize(12).text(`Data de Registro: ${dado.dataRegistro}`);
      doc.font('Helvetica').fontSize(12).text(`ID do Cliente: ${dado.clientId}`);
      if(dado.communications.length !== 0){
        doc.font('Helvetica').fontSize(12).text(`Outras opções de contato: ${dado.communications}`);
      }
    doc.moveDown();
      doc.font('Helvetica').fontSize(12).text('-'.repeat(117));
    });


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