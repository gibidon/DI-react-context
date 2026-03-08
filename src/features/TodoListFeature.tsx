import { useEffect } from "react"
import { useDi } from './di'

export const TodoListFeature = () => {
    const { todos, fetchTodos } = useDi()

    useEffect(() => {
        fetchTodos()
    }, [])

    return <ul>{todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>
}