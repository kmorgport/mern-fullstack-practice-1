import Posts from "../components/Posts/Posts";

//state in this case will be the posts 
export default (posts = [], action) => {
    switch(action.type){
        case 'DELETE':
            return posts.filter(post=> post._id!== action.payload)
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
        case 'LIKE':
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post)
        default:
            return posts
    }
}