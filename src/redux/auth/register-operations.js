import axios from "axios";
import { BASE_URL } from "./BASE__URL";
import authAction from './register-actions'

axios.defaults.baseURL = BASE_URL;

// const token = {

// };

const register = credentials =>async  dispatch => {
    dispatch(authAction.registrationRequest());

    try {
       const response = await axios.post('/users/signup', credentials );
       dispatch(authAction.registrationSuccess(response.data));
    } catch (error) {
        dispatch(authAction.registrationError(error.message))
    }
};

const login = credentials =>async dispatch => {
    dispatch(authAction.loginRequest());

    try {
       const response = await axios.post('/users/login', credentials );
       dispatch(authAction.loginSuccess(response.data));
    } catch (error) {
        dispatch(authAction.loginError(error.message))
    }

};

const logout = credentials => dispatch => {

};

const getCurrentUser = credentials => dispatch => {

};

// eslint-disable-next-line import/no-anonymous-default-export
export default {register, login, logout, getCurrentUser }