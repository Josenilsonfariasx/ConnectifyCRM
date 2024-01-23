import {Request, Response, Router} from "express";
import { ClientRoutes } from "./client.route";
import { ContactRoutes } from "./contact.route";
import { ComunicationRoutes } from "./comunication";
const routes: Router = Router();

routes.get('/on', (req:Request, res:Response)=> {
  return res.json({ on : true })
})


routes.use('/client', ClientRoutes)
routes.use('/contact', ContactRoutes)
routes.use('/com', ComunicationRoutes)

export {routes}