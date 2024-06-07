import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  Todo: [],
  InProgress: [],
  Completed: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: JSON.parse(localStorage.getItem("tasks")) || initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: `${Date.now()}`,
        content: action.payload,
        favorite: false,
      };
      state.Todo.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      console.log(JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const {taskId, column} = action.payload;
      state[column] = state[column].filter((task) => task.id !== taskId);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    editTask: (state, action) => {
      const {taskId, column, newContent} = action.payload;
      const task = state[column].find((task) => task.id === taskId);
      if (task) task.content = newContent;
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    favoriteTask: (state, action) => {
      const {taskId, column} = action.payload;
      console.log(taskId,column)
      const task = state[column].find((task) => task.id === taskId);
      if (task) task.favorite = !task.favorite;
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    moveTask: (state, action) => {
      const {source, destination} = action.payload;
      const sourceList = state[source.droppableId];
      const destinationList = state[destination.droppableId];
      const [movedTask] = sourceList.splice(source.index, 1);
      destinationList.splice(destination.index, 0, movedTask);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
  },
});

export const {addTask, deleteTask, editTask, favoriteTask, moveTask} =
  taskSlice.actions;

export const selectTasks = (state) => state.tasks;

export default taskSlice.reducer;
