import { ResPostData } from '../interfaces/postData'
import {
    SETALLPOSTS,
    DELETEPOST,
    UPDATEPOSTS,
    CREATE_POST,
    CHANGE_POST,
    CREATE_COMMENT,
} from './types'

export interface PostState {
    posts: ResPostData[]
}

const initialState: PostState = { posts: [] }

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SETALLPOSTS:
            return { ...state, posts: payload }

        case UPDATEPOSTS:
            let updatePosts = [...state.posts]
            let currentPostIndex = updatePosts.findIndex(
                (item) => item.id === payload.id
            )
            updatePosts.splice(currentPostIndex, 1, { ...payload })

            return { ...state, posts: updatePosts }
        case CHANGE_POST:
            updatePosts = [...state.posts]
            currentPostIndex = updatePosts.findIndex(
                (item) => item.id === payload.id
            )
            updatePosts.splice(currentPostIndex, 1, { ...payload })

            return { ...state, posts: updatePosts }
        case DELETEPOST:
            const newArray = state.posts.filter((val) => val.id !== payload)

            return { ...state, posts: [newArray] }
        case CREATE_POST:
            const posts = [...state.posts]
            posts.push(payload)

            return { ...state, posts }
        case CREATE_COMMENT:
            return { ...state, posts: [payload] }
        default:
            return state
    }
}

export default rootReducer
