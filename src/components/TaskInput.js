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
    <form onSubmit={handleSubmit} className="mb-4 flex ">
      <textarea
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        placeholder="Enter new task"
        className="p-2 rounded-l-lg focus:outline-none resize-none overflow-hidden text-gray-500 border-b border-b-gray-500"
        style={{
            height:'46px',
            backgroundColor:'#212121'
        }}
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
