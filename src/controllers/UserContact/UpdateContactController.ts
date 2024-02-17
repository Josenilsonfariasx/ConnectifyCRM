import { Request, Response } from "express";
import { EditContactService } from "../../services/UserContact/EditContactService";

class UpdateContactController {
  async handle(req: Request, res: Response) {
    const {name, email, telephone, contactId} = req.body
    console.log(name, email, telephone, contactId)
    const editContactService = new EditContactService()
    const contactUpdated = await editContactService.execute({
      contactId,
      email,
      name,
      telephone
    })


    return res.json(contactUpdated)
  }
}

export { UpdateContactController };