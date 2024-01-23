import prismaClient from "../../prisma";

interface UserRequest {
  id: string;
}

class DeleteUserService {
    async execute({ id }: UserRequest) {
        try {
        const deleteUser = await prismaClient.client.delete({
            where: {
            id: id
            },
        });
        return deleteUser;
        }catch (error: unknown) {
          if (error instanceof Error) {
            throw new Error("Failed to create user: " + error.message);
          } else {
            throw new Error("Failed to create user: Unknown error");
          }
        }   
    }
}

export { DeleteUserService };