import prismaClient from "../../prisma";

class ListContactService{
    async execute(id:string){
        const users = await prismaClient.contact.findMany({
          where: {
            clientId:id
          },
            select:{
                id:true,
                nomeCompleto:true,
                email:true,
                telefone:true,
                dataRegistro:true,
                clientId:true,
                communications:true,
                _count:true,
            }
        })
        return users
    }
}

export {ListContactService}