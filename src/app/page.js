import AddTodo from "@/components/addTodo";
import Todos from "@/components/todos";

export default function Home() {
  return (
    <main className="">
      <AddTodo />
      <Todos />
    </main>
  )
}
