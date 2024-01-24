import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes/routes'
import path from "path";

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

const staticPath = path.join(__dirname, '../docs');

// Servindo os arquivos estáticos da pasta 'docs'
app.use('/api-docs', express.static(staticPath));

// Rota para renderizar o arquivo HTML
app.get('/api-docs', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

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
