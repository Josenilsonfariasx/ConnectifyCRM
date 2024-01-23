import prismaClient from "../../prisma";

interface DeleteRequest {
  id: string;
}

class DeleteComunicationService {
  async execute({ id }: DeleteRequest) {
      try {
      const deleteCom = await prismaClient.communication.delete({
          where: {
          id: id
          },
      });
      return deleteCom;
      }catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error("Failed to create user: " + error.message);
        } else {
          throw new Error("Failed to create user: Unknown error");
        }
      }   
  }
}

export { DeleteComunicationService };