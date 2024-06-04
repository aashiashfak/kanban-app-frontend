// components/KanbanBoard.js
// import React, {useState} from "react";
import {DragDropContext} from "react-beautiful-dnd";
import {useDispatch, useSelector} from "react-redux";
import {
  addTask,
  deleteTask,
  editTask,
  favoriteTask,
  selectTasks,
  moveTask,
} from "../redux/taskSlice";
import TaskInput from "./TaskInput";
import TaskColumn from "./TaskColumn";

const KanbanBoard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const onDragEnd = (result) => {
    const {source, destination} = result;
    if (!destination) return;

    if (
      source.droppableId === "Completed" &&
      (destination.droppableId === "Todo" ||
        destination.droppableId === "In Progress")
    ) {
      return;
    }

    dispatch(moveTask({source, destination}));
  };

  const handleAddTask = (content) => {
    dispatch(addTask(content));
  };

  const handleDeleteTask = (taskId, column) => {
    dispatch(deleteTask({taskId, column}));
  };

  const handleFavoriteTask = (taskId, column) => {
    dispatch(favoriteTask({taskId, column}));
  };

  const handleEditTask = (taskId, column, newContent) => {
    dispatch(editTask({taskId, column, newContent}));
  };

  return (
    <div>
      <div className="container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-violet-600 text-center">
          Enter task
        </h1>
        <TaskInput onAddTask={handleAddTask} />
      </div>
      <div className="container mx-auto p-4">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex justify-between space-x-4">
            {["Todo", "InProgress", "Completed"].map((columnId) => (
              <TaskColumn
                key={columnId}
                columnId={columnId}
                tasks={tasks[columnId] || []}
                handleEditTask={handleEditTask}
                handleDeleteTask={handleDeleteTask}
                handleFavoriteTask={handleFavoriteTask}
              />
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default KanbanBoard;
