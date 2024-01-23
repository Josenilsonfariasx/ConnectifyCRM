import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
}

class CreateUserService {
  async execute({nome, email, senha, telefone}:UserRequest){
    try{
      if (!email) {
        throw new Error("Email is required");
      }
      if (!senha) {
        throw new Error("Senha is required");
      }
      if (!nome) {
        throw new Error("Nome is required");
      }
      const ClientAlreadyExist = await prismaClient.client.findFirst({
        where: {
          email: email,
          },
        });
        if (ClientAlreadyExist) {
          throw new Error("Email already exists");
        }
        const passwordHash = await hash(senha, 8);
        const client = await prismaClient.client.create({
          data: {
              nomeCompleto: nome,
              email: email,
              senha: passwordHash,
              telefone: telefone
          },
          select: {
              id: true,
              nomeCompleto: true,
              email: true,
              telefone: true,
          },
      });
      return client
    }catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error("Failed to create user: " + error.message);
      } else {
        throw new Error("Failed to create user: Unknown error");
      }
    }    
  }
} 

export { CreateUserService };