import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailure } from "./userRedux"
import { publicRequest } from "../requestMethods";

export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/adminlogin', user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}

export const logout = async (dispatch) => {
    dispatch(logoutStart());
    try {
        dispatch(logoutSuccess())
    }catch(err){
        dispatch(logoutFailure())
    }
}
