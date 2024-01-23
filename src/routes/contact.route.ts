import { Router } from "express";
import { CreateContactController } from "../controllers/UserContact/CreateContactController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { DeleteContactController } from "../controllers/UserContact/DeleteContactController";
import { ListContactController } from "../controllers/UserContact/ListContactController";

export const ContactRoutes: Router = Router();

ContactRoutes.post('/id', isAuthenticated, new CreateContactController().handle)
ContactRoutes.delete('/id', isAuthenticated, new DeleteContactController().handle)
ContactRoutes.get('/id', isAuthenticated, new ListContactController().handle)