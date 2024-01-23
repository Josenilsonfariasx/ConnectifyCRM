import { Router } from "express";

import { CreateUserController } from "../controllers/Userclient/CreateUserController";
import { ListUserController } from "../controllers/Userclient/ListClientController";
import { DeleteUserController } from "../controllers/Userclient/DeleteUserController";
import { UpdateUserController } from "../controllers/Userclient/UpdateUserController";
import { AuthUserController } from "../controllers/Userclient/AuthUserController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { DetailUserController } from "../controllers/Userclient/DetailUserController";


export const ClientRoutes: Router = Router();

ClientRoutes.post('/', new CreateUserController().handle)
ClientRoutes.post('/login', new AuthUserController().handle)

// routes is authenticated---------------------------------------------------------
ClientRoutes.get('/', isAuthenticated, new ListUserController().handle)
ClientRoutes.delete('/id', isAuthenticated, new DeleteUserController().handle)
ClientRoutes.put('/id', isAuthenticated, new UpdateUserController().handle)
ClientRoutes.get('/me', isAuthenticated, new DetailUserController().handle)