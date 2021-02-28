import { useEffect, useContext } from 'react'
import { getData } from '../../utils/fetchData'
import { DataContext } from '../../store/GlobalState'
import TopPost from './TopPost'

const TopPosts = () => {
    const {state, dispatch} = useContext(DataContext)
    const { topPosts } = state

    useEffect(() => {
        getTopPosts()
    }, [])

    const getTopPosts = async () => {
        const res = await getData(`post/top`)
        dispatch({ type: 'GET_TOP_POSTS', payload: res.posts })
    }

    return (
        <>
        <h2>Top Post</h2>
        <div className="topost-content">
            {topPosts.length === 0 ? <h3>No post</h3> : 
            topPosts.map(post => {
                  return <TopPost key={post._id} post={post}/>
                })
            }
        </div>
        </>
    )
}

export default TopPosts
