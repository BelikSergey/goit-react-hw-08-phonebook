import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import registerActions from '../auth/register-actions'

const initialUserState = {name:null, email:null};

const user = createReducer(initialUserState,{
    [registerActions.registrationSuccess]: (_, {payload})=> payload.user,
    [registerActions.loginSuccess]: (_, {payload})=> payload.user
});

const token = createReducer(null, {
    [registerActions.registrationSuccess]: (_, {payload})=> payload.token,
    [registerActions.loginSuccess]: (_, {payload})=> payload.token

});

const error = createReducer(null,{
    [registerActions.registrationError]:(_, {payload})=> payload,
    [registerActions.loginError]:(_, {payload})=> payload
});

export default combineReducers({
    user,
    token,
    error,
}); 