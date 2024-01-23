import { Request, Response } from "express";
import { ListContactService } from "../../services/UserContact/ListContactService";

class ListContactController{
    async handle(req: Request, res:Response){
        const id = req.query.id as string 
        const listContactService = new ListContactService()

        const list = await listContactService.execute(id)

        return res.json(list)
    }
}

export { ListContactController }