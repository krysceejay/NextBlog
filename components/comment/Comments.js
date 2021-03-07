import Comment from './Comment'

const Comments = ({comments, goto}) => {
 
    return (
        <>
            <div className="comment-post-heading my-1">
            Comments
            </div>
                {comments.length === 0 ? <h3>No comment</h3> : 
                comments.map(comment => {
                    return <Comment key={comment._id} comment={comment} goto={goto} />
                  })
                }
            {/* <button className="btn btn-main">See more</button> */}
        </>
    )
}

export default Comments
