import {Request, Response, Router} from "express";
import { ClientRoutes } from "./client.route";
import { ContactRoutes } from "./contact.route";
import { ComunicationRoutes } from "./comunication";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { GetPdfController } from "../controllers/PDF/GetPdfController";
const routes: Router = Router();

routes.get('/on', (req:Request, res:Response)=> {
  return res.json({ on : true })
})


routes.use('/client', ClientRoutes)
routes.use('/contact', ContactRoutes)
routes.use('/com', ComunicationRoutes)
routes.get('/pdf', isAuthenticated, new GetPdfController().handle)

export {routes}