import Posts from "../components/Posts/Posts";
import { DELETE, FETCH_ALL, CREATE, UPDATE, FETCH_BY_SEARCH} from '../constants/actionTypes';
//state in this case will be the posts 
export default (state = [], action) => {
    switch(action.type){
        case DELETE:
            return state.filter(post=> post._id!== action.payload)
        case FETCH_BY_SEARCH:
            return {
                ...state,
                posts: action.payload
            }
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages
            }
        case CREATE:
            return [...state, action.payload];
        case UPDATE:
            return state.map((post)=> post._id === action.payload._id ? action.payload : post)
        default:
            return state
    }
}