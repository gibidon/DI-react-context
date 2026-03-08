import { CreateTodoProvider } from "../entities/todo/createTodoProvider"
import type { Todo } from "../entities/todo/types"
import type { RouteObject} from 'react-router-dom'
import { Outlet } from "react-router-dom"
import { TodoListPage } from "../pages/TodoListPage/TodoList.page"


const TodoStoreProvider = CreateTodoProvider({
    todoService: {
        async fetchTodos() {
            console.log('fetching todos')
            const response = await fetch("http://localhost:3000/todos")
            const todos = await response.json()
            
            console.log('t',todos)
            return todos
        },

        async addTodo(todo: Todo){
            await fetch(`http://localhost:3000/todos`,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({id: todo.id, title: todo.title})
            })
        }
    }
})

export const todoRoutes: RouteObject = {
    path: '/',
    element: (
        <TodoStoreProvider>
            <Outlet />
        </TodoStoreProvider>
    ),
    children: [
        {index: true, element: <TodoListPage />}
    ]
}