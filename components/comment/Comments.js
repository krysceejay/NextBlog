import { useEffect, useContext } from 'react'
import { getData } from '../../utils/fetchData'
import { DataContext } from '../../store/GlobalState'
import Comment from './Comment'

const Comments = ({pid}) => {
     //TODO: SET LOADING STATE
     const {state, dispatch} = useContext(DataContext)
     const { comments } = state
 
     useEffect(() => {
        getPostComments(pid)
     }, [pid])
 
     const getPostComments = async id => {
         const res = await getData(`post/${id}/comments`)
         dispatch({ type: 'GET_COMMENTS', payload: res.comments })
     }
    return (
        <>
            <div className="comment-post-heading my-1">
            Comments
            </div>
                {comments.length === 0 ? <h3>No comment</h3> : 
                comments.map(comment => {
                    return <Comment key={comment._id} comment={comment} />
                  })
                }
            <button className="btn btn-main">See more</button>
        </>
    )
}

export default Comments
