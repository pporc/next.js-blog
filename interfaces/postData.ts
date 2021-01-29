export interface ReqPostData {
    title: string
    body: string
}

export interface ResPostData extends ReqPostData {
    id: number
    comments?: CommentsData[]
}

export interface CommentsData {
    postId: number
    id: number
    body: string
}
