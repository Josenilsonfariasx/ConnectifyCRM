import { Request, Response, response } from "express";
import { CreateUserService } from "../../services/UserClient/CreateUserService";

class CreateUserController {
  async handle(req: Request, res:Response){
    const { nome, email, senha, telefone} = req.body
    const createUserService = new CreateUserService()
    const user = await createUserService.execute({
      nome, 
      email, 
      senha, 
      telefone
  })
  return res.json(user)
  }
}
export { CreateUserController }