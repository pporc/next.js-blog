import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { AddCommentForm } from '../../../components/AddCommentForm'
import { Comments } from '../../../components/Comments'
import { MainLayout } from '../../../components/MainLayout'
import { SinglePost } from '../../../components/SinglePost'
import { blogAPI } from '../../../services/api'
import { updatePosts } from '../../../store/actions'
import { ResPostData } from '../../../interfaces/postData'
import { PostState } from '../../../store/reducers'

interface Props {
    post: ResPostData
}

const Post: NextPage<Props> = (props) => {
    const router = useRouter()
    const { post } = props

    const [postData, setPostData] = useState(post)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(updatePosts(post))
    }, [dispatch])

    const storeData = useSelector((state: PostState) =>
        state.posts.find((val) => val.id === Number(router.query.id))
    )

    useEffect(() => {
        storeData ? setPostData(storeData) : setPostData(post)
    }, [storeData])

    return (
        <MainLayout>
            <SinglePost dataPost={postData} />
            <Hr />
            {post.comments.length ? (
                <Comments message={postData.comments} />
            ) : null}
            <Hr />
            <AddCommentForm dataPost={post} />
        </MainLayout>
    )
}

Post.getInitialProps = async (ctx: any) => {
    const post = await blogAPI.getPost(ctx.query.id)

    return { post }
}

export default Post

const Hr = styled.hr`
    border: 1px solid #eee;
`
