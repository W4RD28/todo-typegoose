import { TodoService } from "../services/todo.service";
import { Response, Request } from "express"
import { Todo } from "../models/todo.model";

export class TodoController {
    private todoService = new TodoService()

    public index = async (req: Request, res: Response): Promise<Response> => {
        const allTodos: Todo[] = await this.todoService.index()
        return res.status(200).json(allTodos)
    }

    public find = async (req: Request, res: Response): Promise<Response> => {
        const id = req['params']['id']
        const todo: Todo | null = await this.todoService.find(id)
        return res.status(200).json(todo)
    }
    
    public create = async (req: Request, res: Response): Promise<Response> => {
        const todo: Todo = await this.todoService.create({ ...req.body })
        return res.status(201).json(todo)
    }
    
    public update = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params
        //const todo = req.body
        const updatedTodo: Todo | null = await this.todoService.update(id, req.body)
        return res.status(200).json(updatedTodo)
    }
    
    public delete = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params
        const deletedTodo: Todo | null = await this.todoService.delete(id)
        return res.status(200).json(deletedTodo)
    }
}