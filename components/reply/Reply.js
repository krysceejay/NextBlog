import {useContext} from 'react'
import moment from 'moment'
import {DataContext} from '../../store/GlobalState'
import { postData } from '../../utils/fetchData'
import {stringToHslColor} from '../../utils/func'
const Reply = ({reply}) => {
    const {state, dispatch} = useContext(DataContext)
    const { auth } = state

    const likeReply = async () => {
        if(!auth.token) return dispatch({ type: 'NOTIFY', payload: {error: 'Please login or sign up'} })
        const res = await postData(`reply/${reply._id}/likes`, '', auth.token)
        if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

        dispatch({ type: 'REPLY_LIKES', payload: {_id: reply.comment, replies: res.reply} })
    }

    return (
        <div className="comment-reply-single">
            <div className="comment-reply-single-img">
                {reply.user.avatar ? 
                    <img src={reply.user.avatar} alt="user image" /> : 
                    <div className="placeholder-avatar" style={{ backgroundColor: stringToHslColor(reply.user.email), fontSize: 0.7+'rem' }}>
                    {reply.user.fullName.charAt(0)}
                    </div> 
                }
            </div>
            <div className="comment-reply-single-text">
                <div className="user-name">
                    {reply.user.fullName}
                </div>
                <div className="user-comment">
                    {reply.body}
                </div>
                <div className="user-post-info">
                    <span className="date">{moment(reply.createdAt).startOf('second').fromNow(true)}</span>
                    <span onClick={likeReply} className="likes cursor-pt">
                      {reply.likes.length > 0 && reply.likes.length} {reply.likes.length > 1 ? 'likes' : 'like'}
                    </span>
                    {/* <span className="reply">Reply</span> */}
                </div>
            </div>
        </div>
    )
}

export default Reply
