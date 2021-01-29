import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { deletePost } from '../store/actions'
import { ResPostData } from '../interfaces/postData'

interface Props {
    dataPost: ResPostData
}

export const SinglePost: React.FC<Props> = (props) => {
    const { dataPost } = props
    const dispatch = useDispatch()
    const router = useRouter()

    const deleteHandler = (): void => {
        dispatch(deletePost(dataPost.id))
        router.push('/')
    }

    return (
        <>
            <Title>{dataPost.title}</Title>
            <Body>{dataPost.body}</Body>
            <Options>
                <OptionsItem
                    onClick={() => router.push(`/posts/${dataPost.id}/edit`)}
                >
                    Edit
                </OptionsItem>
                <OptionsItem onClick={deleteHandler}>Delete</OptionsItem>
            </Options>
        </>
    )
}

const Title = styled.h2`
    color: #212931;
    font-size: 1.75rem;
    line-height: 1.3;
    margin: 0 0 1.5rem 0;
    padding: 1rem;
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
    font-weight: 900;
    letter-spacing: 0.075em;
    text-transform: uppercase;
    text-align: center;
`

const Body = styled.p`
    padding: 2rem 4rem;
    line-height: 2.375;
    letter-spacing: 1px;
`
const Options = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end; ;
`

const OptionsItem = styled.span`
    margin: 0 1rem;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        transition: all 0.2s;
        opacity: 0.8;
    }
`
