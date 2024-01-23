import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateComunicationController } from "../controllers/UserComunication/CreateComunicationController";
import { CreateComunicationContactController } from "../controllers/UserComunication/CreateComunicationContactController";
import { DeleteComunicationController } from "../controllers/UserComunication/DeleteComunicationController";

export const ComunicationRoutes:Router = Router()

ComunicationRoutes.post("/client", isAuthenticated, new CreateComunicationController().handle)
ComunicationRoutes.post("/contact", isAuthenticated, new CreateComunicationContactController().handle)
ComunicationRoutes.delete("/id", isAuthenticated, new DeleteComunicationController().handle)