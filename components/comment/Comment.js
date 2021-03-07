import {useContext} from 'react'
import moment from 'moment'
import {DataContext} from '../../store/GlobalState'
import { postData } from '../../utils/fetchData'
import {stringToHslColor} from '../../utils/func'
import Replies from '../reply/Replies'
const Comment = ({comment, goto}) => {
    const {state, dispatch} = useContext(DataContext)
    const { auth } = state

    const likeComment = async () => {
        if(!auth.token) return dispatch({ type: 'NOTIFY', payload: {error: 'Please login or sign up'} })
        const res = await postData(`comment/${comment._id}/likes`, '', auth.token)
        if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

        dispatch({ type: 'COMMENT_LIKES', payload: res.comment })
    }

    const showReply = (user, cid, rid) => {
        goto({user, cid, rid})
    }

    return (
        <div className="comment-post-single">
            <div className="comment-post-single-img">
                {comment.user.avatar ? 
                    <img src={comment.user.avatar} alt="" /> : 
                    <div className="placeholder-avatar" style={{ backgroundColor: stringToHslColor(comment.user.email) }}>
                    {comment.user.fullName.charAt(0)}
                    </div> 
                }
            </div>
            <div className="comment-post-single-text">
                <div className="user-name">
                    {comment.user.fullName}
                </div>
                <div className="user-comment">
                 {comment.body}
                </div>
                <div className="user-post-info">
                    <span className="date">{moment(comment.createdAt).startOf('second').fromNow(true)}</span>
                    <span onClick={likeComment} className="likes cursor-pt">
                    {comment.likes.length > 0 && comment.likes.length} {comment.likes.length > 1 ? 'likes' : 'like'}
                    </span>
                    <span 
                    onClick={() => showReply(comment.user.fullName, comment._id, '')} 
                    className="reply cursor-pt">Reply</span>
                </div>
                {comment.replies.length !== 0 &&
                  <Replies comment={comment} />
                }
                

            </div>
            
        </div>
    )
}

export default Comment;