import { Request, Response } from "express";
import { CreateComunicationService } from "../../services/UserComunication/CreateComunicationService";

class CreateComunicationController {
  async handle(req: Request, res: Response) {
    const { clientId, contactId, email, telefone } = req.body;

    if (!clientId && !contactId) {
      return res.status(400).json({ message: "Enter at least one of the fields: clientId or contactId" });
    }

    if (clientId === "" || contactId === "") {
      return res.status(400).json({ message: "ID fields cannot be left blank" });
    }

    const createComunicationService = new CreateComunicationService();
    
    try {
      const comunication = await createComunicationService.execute({
        email: email,
        telefone: telefone,
        clientId: clientId,
      });

      // Se chegou aqui, não houve erro, então enviamos a resposta bem-sucedida
      return res.json(comunication);
    } catch (error) {
      // Se houve um erro, retornamos uma resposta de erro
      console.error("Error in CreateComunicationController:", error);

      return res.status(500).json({
        status: "error",
        message: "Failed to create email/telefone for user: " + error.message,
      });
    }
  }
}

export { CreateComunicationController };
