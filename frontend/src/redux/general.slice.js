import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSnellensTestActive: true,
    isAstigmatismTestActive: false,
    isBlurTestActive: false,
    isFormActive: false,
    snellScore: 0,
    astigmatismScore: 0,
    blurScore: 0,
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
        },
        setSnellScore: (state, action) => {
            state.snellScore = action.payload;
        },
        setAstigmatismScore: (state, action) => {
            state.astigmatismScore = action.payload;
        },
        setBlurScore: (state, action) => {
            state.blurScore = action.payload;
        },
    }
})

export const { setSnellensTestActive,resetAll,setFormActive, setAstigmatismTestActive, setBlurTestActive,setSnellScore,setAstigmatismScore,setBlurScore } = generalSlice.actions;
export default generalSlice.reducer;