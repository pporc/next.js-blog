import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainLayout } from '../components/MainLayout'
import { blogAPI } from '../services/api'
import { setPostsData } from '../store/actions'
import type { ResPostData } from '../interfaces/postData'
import { PostCard } from '../components/PostCard'
import styled from 'styled-components'

interface HomePageProps {
    posts: ResPostData[]
}

const Home = (postsValue: HomePageProps) => {
    const { posts } = postsValue
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPostsData(posts))
    }, [dispatch])
    const postsData = useSelector((state: HomePageProps) => state.posts)

    return (
        <MainLayout>
            <List>
                {postsData
                    .filter((value) => value.body || value.title)
                    .sort((a, b) => b.id - a.id)
                    .map((item) => {
                        return <PostCard props={item} key={item.id} />
                    })}
            </List>
        </MainLayout>
    )
}

Home.getInitialProps = async () => {
    const posts = await blogAPI.getAllPosts()
    return { posts }
}

export default Home

const List = styled.ul`
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -moz-align-items: -moz-stretch;
    -webkit-align-items: -webkit-stretch;
    -ms-align-items: -ms-stretch;
    align-items: stretch;
    text-align: center;
    width: 100%;
    padding: 0;
    margin: 0;
`
