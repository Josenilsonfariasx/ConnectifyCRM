import express, { Request, Response, NextFunction } from "express";
import swaggerUIExpress from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes/routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
app.use('/api/docs', swaggerUIExpress.serve, swaggerUIExpress.setup(swaggerDocument))
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
  if (err instanceof Error){
    return res.status(400).json({error: err.message})
  }
  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})
app.listen(3333,()=>{
  console.log('ON!')
})
