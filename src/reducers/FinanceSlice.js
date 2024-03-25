import { createSlice } from "@reduxjs/toolkit";
 
export const financeSlice = createSlice({
    name: "finance",
    initialState: [
        {
            "id": 1,
            'name': 'Кофеварка',
            "status": 'false',
            "money": 16399,
            "date": "15.03.2024"
        },
        {
            "id": 2,
            'name': 'Аванс',
            "status": 'true',
            "money": 34560,
            "date": "30.03.2024"
        },
        {
            "id": 3,
            'name': 'Продукты',
            "status": 'false',
            "money": 2675,
            "date": "01.03.2024"
        }
    ],
    reducers: {
        addFin: (state, action) => {
            state.push(action.payload);
        },
        deleteFin: (state, action) => {
            const indexToDelete = state.findIndex(fin => fin.id === action.payload);
            if (indexToDelete !== -1) {
                state.splice(indexToDelete, 1);
            }
        },
    },
});
 
export const { addFin, deleteFin } = financeSlice.actions;

export default financeSlice.reducer;