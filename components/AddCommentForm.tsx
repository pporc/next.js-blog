import { NextPage } from 'next'
import {
    ChangeEvent,
    ChangeEventHandler,
    FormEvent,
    useEffect,
    useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { ResPostData } from '../interfaces/postData'
import { createComment } from '../store/actions'
import { PostState } from '../store/reducers'
import { Button, TextArea } from '../styles/styled'

interface Props {
    dataPost: ResPostData
}

export const AddCommentForm: NextPage<Props> = (props) => {
    const { dataPost } = props

    const dispatch = useDispatch()

    const [data, setData] = useState({})
    const [commentValue, setCommentValue] = useState('')

    const storeData = useSelector((state: PostState) => state.posts[0])

    useEffect(() => {
        storeData ? setData(storeData) : setData(dataPost)
    }, [storeData])

    const textAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setCommentValue(e.target.value)
    }

    const buttonHandler = (): void => {
        const messageData = { postId: dataPost.id, body: commentValue }
        dispatch(createComment(messageData, data))
        setCommentValue('')
    }

    return (
        <AddCommentWrapper>
            <H3>Add comment</H3>
            <TextArea
                name="comment"
                cols={30}
                rows={10}
                placeholder="You comment"
                value={commentValue}
                onChange={textAreaHandler}
            />
            <Button onClick={buttonHandler}>Send</Button>
        </AddCommentWrapper>
    )
}

const AddCommentWrapper = styled.div`
    padding: 2rem 4rem;
`
const H3 = styled.h3`
    margin: 0 0 1rem;
`
