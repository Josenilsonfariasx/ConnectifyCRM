import { Request, Response } from "express";
import prismaClient from "../../prisma";

class CreateComunicationContactController {
  async handle(req:Request, res:Response){
    const {email, telefone, contactId} = req.body
    try {
      if (!email) {
        throw new Error("Email is required");
      }
      if (!telefone) {
        throw new Error("Telefone is required");
      }
      if (!contactId) {
        throw new Error("clientId is required");
      }

      const clientAlreadyExist = await prismaClient.client.findFirst({
        where: {
          email: email,
        },
      });

      if (clientAlreadyExist) {
        throw new Error("Email already exists");
      }

      const comunication = await prismaClient.communication.create({
        data: {
          email: email,
          telefone: telefone,
          contactId: contactId,
        }
      });      

      return comunication;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error("Failed to create email/telefone for user: " + error.message);
      } else {
        throw new Error("Failed to create email/telefone for user: Unknown error");
      }
    }
  }
}

export { CreateComunicationContactController }