import React, { useState } from "react";
import AddTaskBar from "./components/AddTaskBar";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="bg-slate-400 min-h-screen w-full px-2 flex flex-col items-center gap-4">
      <h1 className="text-center text-4xl md:text-7xl py-4 font-semibold text-white select-none cursor-pointer">
        To Do App
      </h1>
      <AddTaskBar task={tasks} setTask={setTasks} />
      <TaskList array={tasks} setTask={setTasks}/>
    </div>
  );
}

export default App;
