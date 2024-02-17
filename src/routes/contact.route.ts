import { Router } from "express";
import { CreateContactController } from "../controllers/UserContact/CreateContactController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { DeleteContactController } from "../controllers/UserContact/DeleteContactController";
import { ListContactController } from "../controllers/UserContact/ListContactController";
import { UpdateContactController } from "../controllers/UserContact/UpdateContactController";

export const ContactRoutes: Router = Router();

ContactRoutes.post('/id', isAuthenticated, new CreateContactController().handle)
ContactRoutes.delete('/id', isAuthenticated, new DeleteContactController().handle)
ContactRoutes.get('/id', isAuthenticated, new ListContactController().handle)
ContactRoutes.put('/update', isAuthenticated, new UpdateContactController().handle)