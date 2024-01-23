import { Request, Response } from "express";
import { CreateContactService } from "../../services/UserContact/CreateContactService";

class CreateContactController {
  async handle(req:Request, res:Response){
    const clientId = req.query.id as string
    const {nome, email, telefone} = req.body
    const createContactService = new CreateContactService()
    const contact = await createContactService.execute({
      nome: nome,
      email: email,
      telefone: telefone,
      clientId: clientId
    })
    return res.json(contact)
  }
}

export { CreateContactController }