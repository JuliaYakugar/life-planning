import { createSlice } from "@reduxjs/toolkit";
 
export const tasksSlice = createSlice({
    name: "tasks",
    initialState: [
        {
            "id": 1,
            "status": false,
            "task": "Помыть полы",
            "date": "30.03.2024",
            "area": "Быт"
        },
        {
            "id": 2,
            "status": false,
            "task": "Написать отчет",
            "date": "30.03.2024",
            "area": "Работа"
        },
        {
            "id": 3,
            "status": true,
            "task": "Пофиксить баг",
            "date": "15.03.2024",
            "area": "Работа"
        }
    ],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        toggleTaskStatus: (state, action) => {
            const { taskId } = action.payload;
            const task = state.find(task => task.id === taskId);
            if (task) {
                task.status = !task.status;
            }
        },
        deleteTask: (state, action) => {
            const indexToDelete = state.findIndex(task => task.id === action.payload);
            if (indexToDelete !== -1) {
                state.splice(indexToDelete, 1);
            }
        },
    },
});
 
export const { addTask, toggleTaskStatus, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
