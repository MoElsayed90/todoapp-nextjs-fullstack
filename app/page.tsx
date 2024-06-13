import { getTodoListAction } from "@/actions/todo.actions";
import FormAddTodo from "@/components/FormAddTodo";
import { TodoTable } from "@/components/TodoTable";
export default async function Home() {
  const todos = await getTodoListAction();
  return (
    <main className="container">
      <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4 mt-10">
      <FormAddTodo />
      <TodoTable todos={todos} />
      </div>
    </main>
  );
}
