import { useTodoContext } from "../../entities/todo/useTodoContext";
import { TodoFeatureInjector, type TodoListFeatureDeps } from "../../features/di";
import { TodoListFeature } from "../../features/TodoListFeature";

export function TodoListPage(){
    const { todos, addTodo, fetchTodos } = useTodoContext()

    const deps: TodoListFeatureDeps = {
        todos,
        addTodo,
        fetchTodos
    }

    return (
        <TodoFeatureInjector value={deps}>
            <TodoListFeature />
        </TodoFeatureInjector>
    )
}