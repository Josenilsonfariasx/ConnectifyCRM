import prismaClient from "../../prisma";

class ListUserService{
    async execute(){
        const users = await prismaClient.client.findMany({
            select:{
                id:true,
                nomeCompleto:true,
                email:true,
                telefone:true,
                dataRegistro:true,
                _count:true,
                communications:true,
                contacts:true,
            }
        })
        return users
    }
}

export {ListUserService}