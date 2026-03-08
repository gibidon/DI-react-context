import { createStrictContext } from "../shared/react/createStrictContext"
import type { Todo } from "../entities/todo/types"
import { useStrictContext } from "../shared/react/useStrictContext"

export type TodoListFeatureDeps = {
    todos: Todo[] | undefined
    addTodo: (todo: Todo) => void
    fetchTodos: () => Promise<Todo[]>
}

export const TodoFeatureInjector = createStrictContext<TodoListFeatureDeps>()
export const useDi = () => useStrictContext(TodoFeatureInjector)