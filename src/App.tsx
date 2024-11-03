import { useEffect, useState } from "react";

import { supabase } from "./utils";

function Page() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from("todos").select();

      if (todos?.length ?? 0 > 1) {
        setTodos(todos as never);
      }
    }

    getTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  );
}
export default Page;
