import { Request, Response } from "express";
import { GetPdfService } from "../../services/PDF/GetPdfService";

class GetPdfController {
  async handle(req: Request, res: Response) {
    try {
    const clientId = req.query.id as string;
    const getPdfService = new GetPdfService();
    const pdfBuffer = await getPdfService.execute(clientId);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${clientId}-relatorio.pdf`);

      res.send(pdfBuffer);
    } catch (error) {
      console.error('Erro ao gerar o PDF:', error);
      res.status(500).json({ error: 'Erro ao gerar o PDF.' });
    }
  }
}

export { GetPdfController };