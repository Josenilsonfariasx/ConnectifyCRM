import prismaClient from "../../prisma";

interface ContactRequest {
  nome: string;
  email: string;
  clientId: string;
  telefone: string;
}
class CreateContactService {
  async execute({nome, email, telefone,  clientId}:ContactRequest){
    try {
      if (!email) {
        throw new Error("Email is required");
      }
      if (!clientId) {
        throw new Error("clientId is required");
      }
      if (!nome) {
        throw new Error("Nome is required");
      }

      const ContactAlreadyExist = await prismaClient.contact.findFirst({
        where:{
          email:email
        }
      })
      if(ContactAlreadyExist){
        throw new Error("Email already exist")
      }
      
      const contact = await prismaClient.contact.create({
        data:{
          email:email,
          nomeCompleto:nome,
          telefone:telefone,
          clientId:clientId
        },
        select: {
          id:true,
          nomeCompleto:true,
          email:true,
          telefone:true,
          clientId:true,
          communications:true,
          dataRegistro:true,
          _count:true
        }
      })
      return contact
    } catch (error:unknown) {
      if(error instanceof Error) {
        throw new Error ("Failed to create Contact: " + error.message) 
      }else {
        throw new Error ("Failed to create Contact: Unknown error")
      }
    }
  }
}

export { CreateContactService }