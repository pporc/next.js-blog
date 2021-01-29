import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/router'
import { ChangeEvent, useEffect, useState } from 'react'
import { MainLayout } from '../../../../components/MainLayout'
import { Input, TextArea, Button } from '../../../../styles/styled'
import { changePost, getPost } from '../../../../store/actions'

const Edit = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const post = useSelector((state: any) => {
        if (!state.posts) {
            return null
        } else {
            return state.posts.find((val) => val.id == router.query.id)
        }
    })

    useEffect(() => {
        if (post === undefined) {
            dispatch(getPost(Number(router.query.id)))
        } else {
            setTitle(post.title)
            setBody(post.body)
        }
    }, [dispatch])

    const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value)
    }

    const areaHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setBody(e.target.value)
    }

    const saveHandler = (): void => {
        const data = { title, body }
        dispatch(changePost(data, Number(router.query.id)))
        router.push(`/posts/${Number(router.query.id)}`)
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
