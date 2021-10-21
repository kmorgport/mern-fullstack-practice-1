import { AUTH } from '../constants/actionTypes';
import * as api from '../api'

export const signIn = (formData, history) => async (dispatch)=> {
    try{
        //login the user
        //use history to navigate to the home page
    }catch (error){
        console.log(error)
    }  
}

export const signUp = () => async (dispatch) => {
    try{
        //sign up the user
    }catch(error){
        console.log(error)
    }
};