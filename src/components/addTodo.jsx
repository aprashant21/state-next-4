"use client";
import { addTodo } from "@/features/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function AddTodo() {
  const [input, setinput] = useState('')
  const dispatch = useDispatch();
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input !== '') {
      dispatch(addTodo(input))
    }
    else {
      alert('input field may be empty')
    }
    setinput('')
  }
  return (
    <div>
      <div className="flex justify-center m-10">
        <form action="">
          <div className="grid">
            <label htmlFor="input" className="text-2xl font-bold">Todos</label>
            <input onChange={(e) => setinput(e.target.value)} value={input} type="text" className="rounded h-10 text-md p-1 mt-1" />
            <button onClick={handleAddTodo} className="w-full bg-green-800 mt-4 text-white h-10 rounded hover:bg-green-900">Add Todo</button>
          </div>
        </form>

      </div>
    </div>
  )
}
