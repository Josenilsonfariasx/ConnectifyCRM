import { Request, Response } from "express";
import { DeleteUserService } from "../../services/UserClient/DeleteUserService";

class DeleteUserController{
  async handle(req:Request, res:Response){
    console.log('oi')
        const id = req.query.id as string
        const deleteUserService = new DeleteUserService()
        const deleteUser = await deleteUserService.execute({
          id: id
        })
        return(res.json(deleteUser))
    }
}

export {DeleteUserController }