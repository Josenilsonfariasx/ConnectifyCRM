import { Request, Response } from "express";
import { DeleteUserService } from "../../services/UserClient/DeleteUserService";
import { DeleteContactService } from "../../services/UserContact/DeleteContactService";
import { DeleteComunicationService } from "../../services/UserComunication/DeleteComunicationService";

class DeleteComunicationController{
  async handle(req:Request, res:Response){
        const id = req.query.id as string
        const deleteComunicationService = new DeleteComunicationService()
        const deleteUser = await deleteComunicationService.execute({
          id: id
        })
        return(res.json(deleteUser))
    }
}

export { DeleteComunicationController }