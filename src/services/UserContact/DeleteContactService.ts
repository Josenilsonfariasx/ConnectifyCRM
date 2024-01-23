import prismaClient from "../../prisma"

interface DeleteRequest {
  id:string
}
class DeleteContactService {
  async execute({id}:DeleteRequest){
    try {
      if(!id){
        throw new Error("Id is required.")
      }
      const deleteContact = await prismaClient.contact.delete({
        where:{
          id:id
        }
      })
      return deleteContact
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Failed to delete user: " + error.message);
      } else {
        throw new Error("Failed to delete user: Unknown error");
      }
    }
  }
}

export { DeleteContactService }