import Posts from "../components/Posts/Posts";

//state in this case will be the posts 
export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...state, action.payload];
        case 'UPDATE':
            return state.map((post)=> post._id === action.payload._id ? action.payload : post)
        default:
            return state
    }
}