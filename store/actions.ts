import {
    SETALLPOSTS,
    DELETEPOST,
    UPDATEPOSTS,
    CREATE_POST,
    CHANGE_POST,
    CREATE_COMMENT,
} from './types'
import { blogAPI } from '../services/api'
import { ReqPostData, ResPostData } from '../interfaces/postData'

export const setPostsData = (postsData: ReqPostData[]) => ({
    type: SETALLPOSTS,
    payload: postsData,
})

export const getPost = (id: number) => async (dispatch) => {
    const data = await blogAPI.getPost(id)

    dispatch(setPostsData([data]))
}

export const updatePosts = (newData: ResPostData) => ({
    type: UPDATEPOSTS,
    payload: newData,
})

export const deletePost = (id: number) => async (dispatch) => {
    await blogAPI.deletePost(id)
    dispatch({
        type: DELETEPOST,
        payload: id,
    })
}

export const createPost = (data: ReqPostData) => async (dispatch) => {
    await blogAPI.createPost(data).then((val) => {
        dispatch({
            type: CREATE_POST,
            payload: val,
        })
    })
}

export const changePost = (
    data: ReqPostData,
    id: number,
    post: ResPostData
) => async (dispatch) => {
    await blogAPI.changePost(data, id).then((val) => {
        const newData = { ...val, comments: post.comments }
        dispatch({
            type: CHANGE_POST,
            payload: newData,
        })
    })
}

export const createComment = (messageData, userData) => async (dispatch) => {
    await blogAPI.createComment(messageData).then((val) => {
        let newData = {
            ...userData,
            comments: [...(userData.comments || []), val],
        }

        dispatch({
            type: CREATE_COMMENT,
            payload: newData,
        })
    })
}
