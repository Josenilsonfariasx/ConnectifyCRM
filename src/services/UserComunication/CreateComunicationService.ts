import prismaClient from "../../prisma";

interface ComunicationRequest {
  email: string;
  telefone: string;
  clientId: string;
}


class CreateComunicationService {
  async execute({ email, telefone, clientId }: ComunicationRequest) {
    try {
      if (!email) {
        throw new Error("Email is required");
      }
      if (!telefone) {
        throw new Error("Telefone is required");
      }
      if (!clientId) {
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
          clientId: clientId,
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

export { CreateComunicationService };
