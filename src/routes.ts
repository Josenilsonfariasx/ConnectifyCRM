import {Request, Response, Router} from "express";
import { CreateUserController } from "./controllers/Userclient/CreateUserController";
import { ListUserController } from "./controllers/Userclient/ListClientController";
import { DeleteUserController } from "./controllers/Userclient/DeleteUserController";
const router = Router()

router.get('/on', (req:Request, res:Response)=> {
  return res.json({ on : true })
})

//clientRoutes
router.post('/client', new CreateUserController().handle)
router.get('/client', new ListUserController().handle)
router.delete('/client/id', new DeleteUserController().handle)

export {router}