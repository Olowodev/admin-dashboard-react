import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailure,
    updateUserStart,
    updateUserFailure,
    updateUserSuccess
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