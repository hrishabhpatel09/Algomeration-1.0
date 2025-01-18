import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSnellensTestActive: true,
    isAstigmatismTestActive: false,
    isBlurTestActive: false,
    isFormActive: false
}
const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setSnellensTestActive: (state, action) => {
            state.isSnellensTestActive = action.payload;
        },
        setAstigmatismTestActive: (state, action) => {
            state.isAstigmatismTestActive = action.payload;
        },
        setBlurTestActive: (state, action) => {
            state.isBlurTestActive = action.payload;
        },
        setFormActive: (state, action) => {
            state.isFormActive = action.payload;
        },
        resetAll: (state) => {
            state.isSnellensTestActive = true;
            state.isAstigmatismTestActive = false;
            state.isBlurTestActive = false;
        }
    }
})

export const { setSnellensTestActive,resetAll,setFormActive, setAstigmatismTestActive, setBlurTestActive } = generalSlice.actions;
export default generalSlice.reducer;