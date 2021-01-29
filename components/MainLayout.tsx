import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

export const MainLayout = ({ children, title = 'Sample blog' }) => {
    return (
        <AppWrapper>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header>
                <h1>SIMPLE BLOG</h1>
            </Header>
            <Navigation>
                <Link href={'/'}>
                    <A>Home</A>
                </Link>
                <Link href={'/posts/new'}>
                    <A>Create new post</A>
                </Link>
            </Navigation>
            <Main>{children}</Main>
            <Background />
        </AppWrapper>
    )
}

const AppWrapper = styled.div`
    transition: opacity 0.5s ease;
    position: relative;
    z-index: 1;
    overflow: hidden;
`

const Main = styled.main`
    background-color: #fff;
    position: relative;
    margin: 0 auto;
    width: calc(100% - 4rem);
    max-width: 72rem;
    z-index: 2;
`

const Navigation = styled.nav`
    color: #fff;
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-transition: -moz-transform 1s ease, opacity 1s ease;
    -webkit-transition: -webkit-transform 1s ease, opacity 1s ease;
    -ms-transition: -ms-transform 1s ease, opacity 1s ease;
    transition: transform 1s ease, opacity 1s ease;
    background: rgba(255, 255, 255, 0.175);
    height: 4rem;
    line-height: 4rem;
    margin: -4rem auto 0 auto;
    overflow: hidden;
    padding: 0 2rem 0 0;
    position: relative;
    width: calc(100% - 4rem);
    max-width: 72rem;
    z-index: 2;
`
const Header = styled.header`
    margin-top: 0.5rem;
    color: #fff;
    -moz-align-items: center;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -moz-justify-content: -moz-flex-end;
    -webkit-justify-content: -webkit-flex-end;
    -ms-justify-content: -ms-flex-end;
    justify-content: flex-end;
    pointer-events: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 20rem;
    padding-bottom: 8rem;
    position: relative;
    text-align: center;
    z-index: 2;
`
const A = styled.a`
    display: block;
    padding: 0 2rem;
    letter-spacing: 0.075em;
    list-style: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
        color: inherit !important;
        background-color: rgba(255, 255, 255, 0.1);
    }
`
const Background = styled.div`
    background-image: url(/overlay.png?v=0dc9876737),
        linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
        url(/bg.jpg);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #212931;
    background-size: auto, auto, 100% auto;
    background-position: center, center, top center;
    background-repeat: repeat, no-repeat, no-repeat;
    background-attachment: scroll, scroll, scroll;
    z-index: -1;
    backface-visibility: hidden;
    perspective: 1000;
    transform-style: preserve-3d;
    will-change: transform;
`
