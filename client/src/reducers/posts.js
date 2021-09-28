import Posts from "../components/Posts/Posts";
import { DELETE, FETCH_ALL, CREATE, UPDATE} from '../constants/actionTypes';
//state in this case will be the posts 
export default (posts = [], action) => {
    switch(action.type){
        case DELETE:
            return posts.filter(post=> post._id!== action.payload)
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post)
        default:
            return posts
    }
}