import FormAddTodo from "@/components/FormAddTodo";
export default function Home() {

  return (
    <main>
      {/* <ul>
          {
            todos.map(todo => (
              <li key={todo.id}>{todo.title}</li>
            ))
          }
        </ul> */}
      <FormAddTodo />
    </main>
  );
}
