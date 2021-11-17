import { FETCH_ALL, FETCH_POST, CREATE, UPDATE, DELETE, START_LOADING, END_LOADING, FETCH_BY_SEARCH} from '../constants/actionTypes';
import * as api from '../api'

export const getPost = (id) => async (dispatch) => {

    try{
        dispatch({ type: START_LOADING})
        const { data } = await api.fetchPost(id);

        dispatch({
            type: FETCH_POST,
            paylaod: data
        })
        dispatch({ type: END_LOADING })
    }catch(error){
        console.log(error.message)
    }
}

export const getPosts = (page) => async (dispatch) => {

    try{
        dispatch({ type: START_LOADING})
        const { data } = await api.fetchPosts(page);

        dispatch({
            type: FETCH_ALL,
            paylaod: data
        })
        dispatch({ type: END_LOADING })
    }catch(error){
        console.log(error.message)
    }
}

export const getPostsBySearch = (searchQuery)=> async (dispatch) => {
    try{
        dispatch({ type: START_LOADING})
        const { data: {data} } = await api.fetchPostsBySearch(searchQuery);
        dispatch({
            type: FETCH_BY_SEARCH,
            payload: data
        })
        dispatch({ type: END_LOADING })
    }catch(error){
        console.log(error)
    }
}

export const createPost = (post, history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING})
        const {data} = await api.createPost(post);
        history.push(`/posts/${data._id}`)
        dispatch({ type: CREATE, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try{
      const { data } = await api.updatePost(id, post);

      dispatch({ type: UPDATE, payload: data})
    }catch (error){
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) =>{
    try{
        await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })
    }catch (error){
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try{
        const { data } = await api.likePost(id);
        dispatch({ type: CREATE, payload: data })
    }catch (error) {
        
    }
}

export const commentPost = (value, id) => async (dispatch) => {
    
    try{

        const {data} = await api.commentPost(value, id);

    }catch(err){

    }
}