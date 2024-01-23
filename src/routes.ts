import {Request, Response, Router} from "express";
import { CreateUserController } from "./controllers/Userclient/CreateUserController";
import { ListUserController } from "./controllers/Userclient/ListClientController";
import { DeleteUserController } from "./controllers/Userclient/DeleteUserController";
import { UpdateUserController } from "./controllers/Userclient/UpdateUserController";
import { AuthUserController } from "./controllers/Userclient/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/Userclient/DetailUserController";
const router = Router()

router.get('/on', (req:Request, res:Response)=> {
  return res.json({ on : true })
})

// clientRoutes--------------------------------------------------------------------
// routes is not authenticated-----------------------------------------------------
router.post('/client', new CreateUserController().handle)
router.post('/client/login', new AuthUserController().handle)

// routes is authenticated---------------------------------------------------------
router.get('/client', isAuthenticated, new ListUserController().handle)
router.delete('/client/id', isAuthenticated, new DeleteUserController().handle)
router.put('/client/id', isAuthenticated, new UpdateUserController().handle)
router.get('/client/me', isAuthenticated, new DetailUserController().handle)

export {router}