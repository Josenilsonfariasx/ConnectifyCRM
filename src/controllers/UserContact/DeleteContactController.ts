import { Request, Response } from "express";
import { DeleteContactService } from "../../services/UserContact/DeleteContactService";

class DeleteContactController {
  async handle (req:Request, res:Response){
    const id = req.query.id as string
    const deleteContactService = new DeleteContactService()
    const deleteContact = deleteContactService.execute({
      id:id
    })
    return res.json(deleteContact)
  }
}

export { DeleteContactController }