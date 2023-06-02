import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
function Task({ day, month, taskName, task, setTask, todos }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isCompleted, setIsCompleted] = useState(false)
  const handleCompleted = ()=> {
    setTask(todos.map((item) => {
      if (item.id === task.id) {
        setIsCompleted(!isCompleted)
        return{
            ...item,
            completed: !item.completed
          }
      }
      return item
    }));

  }

  const handleDeleteTask = () => {
    setTask(todos.filter((item) => item.id !== task.id));
  }

  return (
    <div
      className={`w-full md:w-[600px] bg-white rounded px-2 my-5 ${isCompleted === true ? "!bg-green-200" : ""}`}
    >
      <div className="flex justify-between items-center flex-wrap py-6">
        <div className="font-semibold flex flex-col">
          <span className="text-2xl text-center">{day}</span>
          <span className="text-xl text-center">{month}</span>
        </div>
        <div className="overflow-hidden mx-1 text-xl capitalize">{taskName}</div>
        <div className="flex flex-row gap-2">
          <div className="relative inline-block">
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-black font-bold rounded-lg px-4 items-center text-xl"
            >
              ...
            </button>
            {isOpen && (
              <div
                id="dropdown"
                className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-auto "
              >
                <ul aria-labelledby="dropdownDefaultButton">
                  <li>
                    <button
                      className="block px-4 py-2 bg-green-200 text-green-800 hover:bg-green-300 hover:text-green-900"
                      onClick={handleCompleted}
                    >
                      <FontAwesomeIcon
                        className="pointer-events-none"
                        icon={faCheck}
                      />
                    </button>
                  </li>
                  <li>
                    <button
                      className="block px-4 py-2 bg-red-200 text-red-800 hover:bg-red-300 hover:text-red-900"
                      onClick={handleDeleteTask}
                    >
                      <FontAwesomeIcon
                        className="pointer-events-none"
                        icon={faTrash}
                      />
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
