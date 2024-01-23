import prismaClient from '../../prisma';

interface UserRequest {
  id: string;
  nome?: string;
  email?: string;
  telefone?: string;
}

class UpdateUserService {
  async execute({ id, nome, email, telefone }: UserRequest) {
    try {
      const existingUser = await prismaClient.client.findUnique({
        where: { id : id},
      });

      if (!existingUser) {
        throw new Error ("Failed to find user")
      }

      const updatedUser = await prismaClient.client.update({
        where: { id: id },
        data: {
          nomeCompleto: nome !== undefined ? nome : existingUser.nomeCompleto,
          email: email !== undefined ? email : existingUser.email,
          telefone: telefone !== undefined ? telefone : existingUser.telefone,
        },
      });
      return updatedUser
    } catch (error: unknown) {
      if( error instanceof Error){
        throw new Error("Failed to Update user: " + error.message);
      }else{
        console.error('Erro ao atualizar usuário: unknown error',);
      }
    }
  }
}
export { UpdateUserService }