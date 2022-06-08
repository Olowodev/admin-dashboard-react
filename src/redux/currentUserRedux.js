import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice ({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: null,
        googleTokens: null
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
            state.googleTokens=null;
        },
        logoutFailure: (state, action) => {
            state.isFetching=false;
            state.error= action.payload;
        },
        updateUserStart: (state)=>{
            state.isFetching=true
        },
        updateUserSuccess: (state, action)=>{
            state.isFetching=false;
            state.error= null;
            state.currentUser=action.payload;
        },
        updateUserFailure: (state, action) => {
            state.isFetching=false;
            state.error= action.payload;
        },
        googleStart: (state)=>{
            state.isFetching=true
        },
        googleSuccess: (state, action)=>{
            state.isFetching=false;
            state.error= null;
            state.googleTokens=action.payload;
        },
        googleFailure: (state, action) => {
            state.isFetching=false;
            state.error= action.payload;
            state.googleTokens= null;
        },
        refreshStart: (state)=>{
            state.isFetching=true
        },
        refreshSuccess: (state, action)=>{
            state.isFetching=false;
            state.error= null;
            state.googleTokens=action.payload;
        },
        refreshFailure: (state, action) => {
            state.isFetching=false;
            state.error= action.payload;
        },
        

    }
});

export const { loginStart,loginSuccess,loginFailure, logoutStart, logoutSuccess, logoutFailure, 
    updateUserStart,
    updateUserFailure,
    updateUserSuccess,
    googleFailure,
    googleStart,
    googleSuccess,
    refreshFailure,
    refreshStart,
    refreshSuccess
} = currentUserSlice.actions;
export default currentUserSlice.reducer;