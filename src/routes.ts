import {Request, Response, Router} from "express";
import { CreateUserController } from "./controllers/Userclient/CreateUserController";
import { ListUserController } from "./controllers/Userclient/ListClientController";
import { DeleteUserController } from "./controllers/Userclient/DeleteUserController";
import { UpdateUserController } from "./controllers/Userclient/UpdateUserController";
import { AuthUserController } from "./controllers/Userclient/AuthUserController";
const router = Router()

router.get('/on', (req:Request, res:Response)=> {
  return res.json({ on : true })
})

//clientRoutes
router.post('/client', new CreateUserController().handle)
router.get('/client', new ListUserController().handle)
router.delete('/client/id', new DeleteUserController().handle)
router.put('/client/id', new UpdateUserController().handle)
router.post('/client/login', new AuthUserController().handle)

export {router}