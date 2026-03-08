import { useState, type ReactNode } from "react"
import type { Todo } from "./types"
import { createStrictContext } from "../../shared/react/createStrictContext"

interface Props {
    todoService: {
        addTodo: (todo: Todo) => void
        fetchTodos: () => Promise<Todo[]>
    }
}

interface TodoContextValue {
    todos: Todo[]
    addTodo: (todo: Todo) => void
    fetchTodos: () => Promise<Todo[]>
}

export const TodoContext = createStrictContext<TodoContextValue>()

export const CreateTodoProvider = ({ todoService }: Props) => {

    const TodosProvider = ({children}: {children: ReactNode}) => {
        const [todos, setTodos] = useState<Todo[]>([])

        const addTodo = (todo: Todo) => todoService.addTodo(todo)
        const fetchTodos = async () => {
            const todos = await todoService.fetchTodos()
            
            setTodos(todos)
            return todos
        }
        const todoCtxValue = { todos, addTodo, fetchTodos } 

        return (
            <TodoContext value={todoCtxValue}>
                {children}
            </TodoContext>)
    }

    return TodosProvider
    
}