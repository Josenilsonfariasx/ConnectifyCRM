import prismaClient from "../../prisma";

interface ContactRequest {
  contactId: string;
  name: string;
  email: string;
  telephone: string;
}

class EditContactService {
  async execute({contactId, name, email, telephone}: ContactRequest) {
    try {
      if(!name && !email && !telephone) throw new Error('All fields are required') 

      const contactExist = await prismaClient.contact.findFirst({
        where:{
          id: contactId
        }
      })
      if(!contactExist) throw new Error('Contact Not Found')
      
      const contactUpdate = await prismaClient.contact.update({
        where:{
          id: contactId
        }, data:{
          nomeCompleto: name !== '' || name !== null ? name : contactExist.nomeCompleto,
          email: email !== '' || email !== null ? email : contactExist.email,
          telefone: telephone !== '' || telephone !== null ? telephone : contactExist.telefone
        }
      })
      return contactUpdate
    } catch (error) {
      throw new Error('Failed to Update Contact:' +error.message)
    }
  }
}
export { EditContactService };