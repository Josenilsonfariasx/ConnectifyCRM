import { Response, Request } from "express";
import { UpdateUserService } from "../../services/UserClient/UpdateUserService";

class UpdateUserController {
  async handle(req: Request, res: Response) {
    try {
      const id = req.query.id as string;
      const { nome, email, telefone } = req.body;

      if(!id){
        return res.status(400).json({message: "You must provide an ID so we can find the user"})
      }

      if (!nome && !email && !telefone) {
        return res.status(400).json({ message: "You must provide at least one field to update" });
      }

      if (nome === "" || email === "" || telefone === "") {
        return res.status(400).json({ message: "Fields cannot be empty" });
      }

      const updateUserService = new UpdateUserService();
      const userUpdated = await updateUserService.execute({
        id: id,
        email: email,
        nome: nome,
        telefone: telefone
      });

      return res.json(userUpdated);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
}

export { UpdateUserController };
