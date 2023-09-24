"use client";
import { removeTodo } from "@/features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(store => store.todos.todos);

  return (
    <div>
      {
        todos.map((todo) => {
          return <>
            <div className="bg-black text-white flex justify-around p-2 m-2 rounded-md">
              <p>{todo.text}</p>
              <p className="cursor-pointer" onClick={()=>dispatch(removeTodo(todo.id))}>X</p>
            </div>
          </>
        })
      }
    </div>
  )
}
