// components/TaskInput.js
import React, {useState} from "react";

const TaskInput = ({onAddTask}) => {
  const [taskContent, setTaskContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskContent.trim()) {
      onAddTask(taskContent);
      setTaskContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        placeholder="Enter new task"
        className="border p-2 rounded-l-lg focus:outline-none"
        required
      />
      <button
        type="submit"
        className="bg-violet-600 text-white p-2 rounded-r-lg hover:bg-violet-500 "
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
