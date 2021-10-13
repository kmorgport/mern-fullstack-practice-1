import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { AUTH, LOGOUT} from '../constants/actionTypes';

const authReducer = (state, action) =>{
    switch (action.type){
        case AUTH: 
            console.log(action?.data);
        default:
            createBreakpoints
    }
}

export default authReducer;