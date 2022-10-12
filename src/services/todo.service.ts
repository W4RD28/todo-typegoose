import { TodoModel, Todo } from "../models/todo.model"

export class TodoService {
    public index = async () => {
        const allTodos: Todo[] = await TodoModel.find()
        return allTodos
    }
    
    public find = async (id: string) => {
        const todo: Todo | null = await TodoModel.findById(id)
        return todo
    }
    
    public create = async (todo: Todo) => {
        const newTodo: Todo = await TodoModel.create(todo)
        return newTodo
    }
    
    public update = async (id: string, todo: Todo) => {
        await TodoModel.findByIdAndUpdate(id, todo)
        const updatedTodo: Todo | null = await TodoModel.findById(id)
        return updatedTodo
    }
    
    public delete = async (id: string) => {
        const deletedTodo: Todo | null = await TodoModel.findByIdAndDelete(id)
        return deletedTodo
    }
}

