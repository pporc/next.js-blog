import axios from 'axios'
import type { ReqPostData } from '../interfaces/postData'

const publicAdapter = axios.create({
    baseURL: 'https://simple-blog-api.crew.red/',
})

interface SendCommentsData {
    body: string
    postId: number
}

export const blogAPI = {
    async getAllPosts() {
        try {
            let response = await publicAdapter.get('posts/')
            return response.data
        } catch (error) {
            console.log(error)
            if (axios.isCancel(error)) {
                return Promise.reject()
            } else {
                console.log('Error', error)
            }
        }
    },

    async getPost(id: number) {
        try {
            let response = await publicAdapter.get(`posts/${id}`, {
                params: { _embed: 'comments' },
            })
            return response.data
        } catch (error) {
            console.log(error)
            if (axios.isCancel(error)) {
                return Promise.reject()
            } else {
                console.log('Error', error)
            }
        }
    },

    async createPost(data: ReqPostData) {
        try {
            let response = await publicAdapter.post(
                'posts/',
                { ...data },
                { headers: { 'Content-Type': 'application/json' } }
            )
            return response.data
        } catch (error) {
            console.log(error)
            if (axios.isCancel(error)) {
                return Promise.reject()
            } else {
                console.log('Error', error)
            }
        }
    },

    async changePost(data: ReqPostData, id: number) {
        try {
            let response = await publicAdapter.put(
                `posts/${id}`,
                { ...data },
                { headers: { 'Content-Type': 'application/json' } }
            )
            return response.data
        } catch (error) {
            console.log(error)
            if (axios.isCancel(error)) {
                return Promise.reject()
            } else {
                console.log('Error', error)
            }
        }
    },

    async deletePost(id: number) {
        try {
            let response = await publicAdapter.delete(`posts/${id}`)
            return response.data
        } catch (error) {
            console.log(error)
            if (axios.isCancel(error)) {
                return Promise.reject()
            } else {
                console.log('Error', error)
            }
        }
    },

    async createComment(data: SendCommentsData) {
        try {
            let response = await publicAdapter.post(
                'comments/',
                { ...data },
                { headers: { 'Content-Type': 'application/json' } }
            )
            return response.data
        } catch (error) {
            console.log(error)
            if (axios.isCancel(error)) {
                return Promise.reject()
            } else {
                console.log('Error', error)
            }
        }
    },
}
