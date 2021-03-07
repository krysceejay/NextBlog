import React from 'react'
import Reply from './Reply'

const Replies = ({comment}) => {
    return (
        <div className="comment-reply">
            <div className="comment-reply-toggle">
                View 4 replies
            </div>
            {
                comment.replies.map(reply => {
                    return <Reply key={reply._id} reply={reply} />
                })
            }
            
        </div>
    )
}

export default Replies
