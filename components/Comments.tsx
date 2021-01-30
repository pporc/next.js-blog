import { useRouter } from 'next/dist/client/router'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { CommentsData } from '../interfaces/postData'
import { PostState } from '../store/reducers'

interface Props {
    message: CommentsData[]
}

export const Comments: React.FC<Props> = (props) => {
    const router = useRouter()
    const { message } = props

    const [comment, setComment] = useState<CommentsData[]>([])

    const storeData = useSelector((state: PostState) => {
        const postData = state.posts.find(
            (val) => val.id === Number(router.query.id)
        )

        if (postData && postData.comments) return postData.comments
        return []
    })

    useEffect(() => {
        storeData.length ? setComment(storeData) : setComment(message)
    }, [storeData])

    return (
        <CommentWrapper>
            <Ul>
                <h3>Comments</h3>
                {comment.map((item) => (
                    <li key={item.id}>
                        <BlockQuote>{item.body}</BlockQuote>
                    </li>
                ))}
            </Ul>
        </CommentWrapper>
    )
}

const CommentWrapper = styled.div`
    padding: 0 4rem;
`

const Ul = styled.ul`
    list-style: none;
    padding: 0;
`
const BlockQuote = styled.blockquote`
    border-left: 4px solid #eee;
    font-style: italic;
    margin: 0 0 2rem 0;
    padding: 0.5rem 0 0.5rem 2rem;
`
