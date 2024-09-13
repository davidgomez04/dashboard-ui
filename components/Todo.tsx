import { getAllTodos } from "../app/api/todo/route";
import AddTask from "./AddTask";
import TodoList from "./TodoList";

export default async function Todo() {
  const tasks = await getAllTodos();

  return (
    <main className='max-w-3xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}