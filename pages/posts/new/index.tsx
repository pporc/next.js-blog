import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { MainLayout } from '../../../components/MainLayout'
import { createPost } from '../../../store/actions'
import { TextArea, Input, Button } from '../../../styles/styled'

const NewPost: NextPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value)
    }

    const areaHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setBody(e.target.value)
    }

    const sendData = (): void => {
        dispatch(createPost({ title, body }))
        router.push('/')
    }

    return (
        <MainLayout>
            <FormWrapper>
                <Label>Post title</Label>
                <Input
                    type="text"
                    placeholder="Title"
                    onChange={inputHandler}
                />
                <Label>Post text</Label>
                <TextArea
                    name="body"
                    cols={30}
                    rows={10}
                    placeholder="Some text"
                    onChange={areaHandler}
                ></TextArea>
                <Button onClick={sendData}>Create</Button>
            </FormWrapper>
        </MainLayout>
    )
}

export default NewPost

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
