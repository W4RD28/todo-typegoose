import { Router } from "express"
import { TodoController } from "../controllers/todo.controller"

const router = Router()
const todoController = new TodoController()

router.get("/todos", todoController.index)

router.get("/todos/:id", todoController.find)

router.post("/todos", todoController.create)

router.put("/todos/:id", todoController.update)

router.delete("/todos/:id", todoController.delete)

export default router