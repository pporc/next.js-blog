import styled from 'styled-components'
import { Button } from '../styles/styled'
import Link from 'next/link'

export const PostCard = ({ props }) => {
    const prevBody: string = props.body.substr(0, 100) + '...'

    return (
        <ListItem>
            <Title>
                <Link href={`/posts/${props.id}`}>
                    <a>{props.title}</a>
                </Link>
            </Title>
            <Body>{prevBody}</Body>
            <Link href={`/posts/${props.id}`}>
                <Button>Reed full post</Button>
            </Link>
        </ListItem>
    )
}

const ListItem = styled.li`
    padding: 4rem;
    width: 50%;
    list-style: none;

    border-bottom: 2px solid #eee;

    &:nth-child(odd) {
        border-right: 2px solid #eee;
        text-align: center;
    }
`

const Title = styled.h2`
    color: #212931;
    font-size: 1.75rem;
    line-height: 1.3;
    margin: 0 0 1.5rem 0;
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
    font-weight: 900;
    letter-spacing: 0.075em;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        border-bottom-color: transparent;
        color: #18bfef !important;
        moz-transition: color 0.2s ease-in-out,
            background-color 0.2s ease-in-out, border-color 0.2s ease-in-out,
            box-shadow 0.2s ease-in-out;
        -webkit-transition: color 0.2s ease-in-out,
            background-color 0.2s ease-in-out, border-color 0.2s ease-in-out,
            box-shadow 0.2s ease-in-out;
        -ms-transition: color 0.2s ease-in-out,
            background-color 0.2s ease-in-out, border-color 0.2s ease-in-out,
            box-shadow 0.2s ease-in-out;
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
            border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }
`

const Body = styled.p`
    text-align: justify;
    margin: 0 0 2rem 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;

    line-height: 2.375;
    letter-spacing: 1px;
`
