import React, {useEffect, useRef} from "react";
import {Droppable, Draggable} from "react-beautiful-dnd";
import '../css/Global.css'

const TaskColumn = ({
  columnId,
  tasks,
  handleEditTask,
  handleDeleteTask,
  handleFavoriteTask,
}) => {
  const textareasRef = useRef({});

  useEffect(() => {
    Object.values(textareasRef.current).forEach((textarea) => {
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
      }
    });
  }, [tasks]);

  const handleTextareaChange = (taskId, columnId, value) => {
    handleEditTask(taskId, columnId, value);
    const textarea = textareasRef.current[taskId];
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="w-1/3 bg-gray-800 p-4 rounded-lg shadow-lg h-80 overflow-y-auto custom-scrollbar"
        >
          <div className="shadow-md pb-2 mb-4">
            <h2 className="text-xl font-semibold mb-2 text-violet-600 text-center">
              {columnId.replace(/([A-Z])/g, " $1")}
            </h2>
          </div>

          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="p-2 mb-2 rounded-lg shadow-md flex bg-customDark"
                >
                  <textarea
                    value={task.content}
                    onChange={(e) =>
                      handleTextareaChange(task.id, columnId, e.target.value)
                    }
                    ref={(el) => (textareasRef.current[task.id] = el)}
                    className="w-full p-1 border-b border-gray-300 focus:outline-none rounded-md text-gray-500 border-b-gray-700"
                    rows={1}
                    style={{
                      resize: "none",
                      overflow: "hidden",
                      height: "auto",
                      backgroundColor: "#212121",
                    }}
                  />

                  <i
                    className="text-red-500 hover:text-red-700 fa-solid fa-trash mt-2 ml-3 my-auto cursor-pointer"
                    onClick={() => handleDeleteTask(task.id, columnId)}
                  ></i>
                  <i
                    className={`fa-star ${
                      task.favorite
                        ? "fas text-purple-500"
                        : "far text-purple-500"
                    } mt-2 ml-2 cursor-pointer`}
                    onClick={() => handleFavoriteTask(task.id, columnId)}
                  ></i>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskColumn;
