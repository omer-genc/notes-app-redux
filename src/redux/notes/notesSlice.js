import { createSlice } from "@reduxjs/toolkit";


export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: JSON.parse(localStorage.getItem('notes')) || [],
    },
    reducers: {
        addNote: (state, action) => {
            const { id, text, color } = action.payload;
            state.items.push({
                id,
                text,
                color,
            });
            localStorage.setItem('notes', JSON.stringify(state.items));
        },
        removeNote: (state, action) => {
            const { id } = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            localStorage.setItem('notes', JSON.stringify(state.items));
        },
    }
});

export const {
    addNote,
    removeNote
} = notesSlice.actions;
export default notesSlice.reducer;