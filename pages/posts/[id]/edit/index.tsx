import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/router'
import { ChangeEvent, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { MainLayout } from '../../../../components/MainLayout'
import { Input, TextArea, Button } from '../../../../styles/styled'
import { changePost, getPost } from '../../../../store/actions'
import { PostState } from '../../../../store/reducers'

const Edit: NextPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const [id, setId] = useState(null)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        setId(Number(router.query.id))
    }, [router])

    const post = useSelector((state: PostState) => {
        if (!state.posts || !id) {
            return null
        } else {
            return state.posts.find((val) => val.id === id)
        }
    })

    useEffect(() => {
        if (!post && id) {
            dispatch(getPost(id))
        } else if (post) {
            setTitle(post.title)
            setBody(post.body)
        }
    }, [post, id])

    const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value)
    }

    const areaHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setBody(e.target.value)
    }

    const saveHandler = (): void => {
        const data = { title, body }
        dispatch(changePost(data, id, post))
        router.push(`/posts/${id}`)
    }

    return (
        <MainLayout>
            <FormWrapper>
                <Label>Edit title</Label>
                <Input type="text" value={title} onChange={inputHandler} />
                <Label>Edit text</Label>
                <TextArea
                    name="body"
                    cols={30}
                    rows={10}
                    value={body}
                    onChange={areaHandler}
                ></TextArea>
                <Button onClick={saveHandler}>Save</Button>
            </FormWrapper>
        </MainLayout>
    )
}

export default Edit

const FormWrapper = styled.div`
    padding: 4rem;
`
const Label = styled.label`
    color: #333;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 2px;
    letter-spacing: 0.35px;
`
