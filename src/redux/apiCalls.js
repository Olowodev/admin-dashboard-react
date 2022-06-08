import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailure,
    updateUserStart,
    updateUserFailure,
    updateUserSuccess,
    googleStart,
    googleSuccess,
    googleFailure,
    refreshStart,
    refreshSuccess,
    refreshFailure
} from "./currentUserRedux"
import { publicRequest, userRequest } from "../requestMethods";


export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/adminlogin', user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure(err.response.data))
        console.log(err.response.data)
    }
}

export const logout = async (dispatch) => {
    dispatch(logoutStart());
    try {
        dispatch(logoutSuccess())
    }catch(err){
        dispatch(logoutFailure(err))
    }
}

export const gLogin = async (dispatch, code) => {
    dispatch(googleStart());
    try {
        const res = await publicRequest.post('/auth/google', code);
        const {expiry_date, scope, token_type, ...others} = res.data;
        console.log({...others})
        dispatch(googleSuccess({...others}))
    } catch (err) {
        console.log(err)
        dispatch(googleFailure(err.response.data))
    }
}

export const refreshTokenFunc = async (dispatch, refreshToken) => {
    dispatch(refreshStart());
    try {
        const res = await publicRequest.post('/auth/google/refresh-token', refreshToken);
        const {expiry_date, scope, token_type, ...others} = res.data;
        dispatch(refreshSuccess({...others}))
    } catch (err) {
        dispatch(refreshFailure(err.response.data))
    }
}


export const updateUser = async (id, dispatch,user) => {
    dispatch(updateUserStart());
    try{
        const res = await userRequest.put(`/user/${id}`, user)
        dispatch(updateUserSuccess(res.data))
        console.log(res)
    }catch(err){
        dispatch(updateUserFailure(err.response.data))
        console.log(err.response.data)
    }
}