import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: null,
    },
    reducers: {
        loginStart: (state)=>{
            state.isFetching=true
        },
        loginSuccess: (state, action)=>{
            state.isFetching=false;
            state.error= null;
            state.currentUser=action.payload;
        },
        loginFailure: (state, action) => {
            state.isFetching=false;
            state.error= action.payload;
            state.currentUser= null;
        },
        logoutStart: (state)=>{
            state.isFetching=true
        },
        logoutSuccess: (state)=>{
            state.isFetching=false;
            state.error= null;
            state.currentUser=null;
        },
        logoutFailure: (state, action) => {
            state.isFetching=false;
            state.error= action.payload;
        },

    }
});

export const { loginStart,loginSuccess,loginFailure, logoutStart, logoutSuccess, logoutFailure} = userSlice.actions;
export default userSlice.reducer;