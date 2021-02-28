import moment from 'moment'
import {stringToHslColor} from '../../utils/func'
const Comment = ({comment}) => {
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
                    <span className="likes">2 likes</span>
                    <span className="reply">Reply</span>
                </div>
                <div className="comment-reply">
                    <div className="comment-reply-toggle">
                        View 4 replies
                    </div>
                    <div className="comment-reply-single">
                        <div className="comment-reply-single-img">
                            <img src="/img/b1.jpg" alt="avatar" />
                        </div>
                        <div className="comment-reply-single-text">
                            <div className="user-name">
                                John
                            </div>
                            <div className="user-comment">
                                My reply is very good
                            </div>
                            <div className="user-post-info">
                                <span className="date">2 weeks</span>
                                <span className="likes">2 likes</span>
                                <span className="reply">Reply</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Comment;