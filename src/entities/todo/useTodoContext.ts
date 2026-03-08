import { useStrictContext } from "../../shared/react/useStrictContext";
import { TodoContext } from "./createTodoProvider"; 

export const useTodoContext = () => useStrictContext(TodoContext)