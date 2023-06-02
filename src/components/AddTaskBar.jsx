import React, { useState } from "react";

function AddTaskBar({ task, setTask }) {
  const [inputValue, setInputValue] = useState("");
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTask([
        ...task,
        {
          id: Date.now(),
          name: inputValue,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };
  return (
    <div className="pt-5">
      <input
        className="w-full md:w-[600px] p-2 outline-none text-2xl rounded"
        placeholder="Add a task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        maxLength={40}
        required
      />
    </div>
  );
}

export default AddTaskBar;
