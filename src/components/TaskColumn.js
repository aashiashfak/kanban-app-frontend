// components/TaskColumn.js
import React from "react";
import {Droppable, Draggable} from "react-beautiful-dnd";

const TaskColumn = ({
  columnId,
  tasks,
  handleEditTask,
  handleDeleteTask,
  handleFavoriteTask,
}) => {
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="w-1/3 bg-violet-light p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-2 text-violet-600 text-center">
            {columnId.replace(/([A-Z])/g, " $1")}
          </h2>
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <div 
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="bg-white p-2 mb-2 rounded-lg shadow-sm flex hover:bg-slate-200"
                >
                  <textarea
                    value={task.content}
                    onChange={(e) => {
                      handleEditTask(task.id, columnId, e.target.value);
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                    className="w-full p-1 border-b border-gray-300 focus:outline-none"
                    rows={1}
                    style={{
                      resize: "none",
                      overflow: "hidden",
                      height: "auto",
                    }}
                  />

                  <i
                    className="text-red-500 hover:text-red-700 fa-solid fa-trash mt-2 ml-1 my-auto"
                    onClick={() => handleDeleteTask(task.id, columnId)}
                  ></i>
                  <i
                    className={`fa-star ${
                      task.favorite
                        ? "fas text-yellow-500"
                        : "far text-purple-500"
                    } mt-2 mx-1`}
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
