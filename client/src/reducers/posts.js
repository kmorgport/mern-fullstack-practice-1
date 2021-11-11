import Posts from "../components/Posts/Posts";
import { DELETE, FETCH_ALL, CREATE, UPDATE, FETCH_BY_SEARCH, START_LOADING, END_LOADING} from '../constants/actionTypes';
//state in this case will be the posts 
export default (state = {isLoading: true, posts: []}, action) => {
    switch(action.type){
        case START_LOADING:
            return {...state, isLoading: true}
        case END_LOADING:
            return { ...state, isLoading: false}
        case DELETE:
            return {...state, posts: state.posts.filter(post=> post._id!== action.payload)}
        case FETCH_BY_SEARCH:
            return {
                ...state,
                posts: action.payload.data
            }
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages
            }
        case LIKE:
            return {...state, posts: state.posts.map((post)=>(post._id === action.payload._id ? action.payload : post)) };
        case CREATE:
            return {...state, posts: [...state.posts, action.payload]};
        case UPDATE:
            return {...state, posts: state.posts.map((post)=> post._id === action.payload._id ? action.payload : post)}
        default:
            return state
    }
}