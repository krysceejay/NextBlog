import Link from 'next/link'
import moment from 'moment'
import {truncate, isEmpty} from '../../utils/func'
const FirstPost = ({post, like, auth}) => {

  const likeAPost = () => {
    like(post._id)
  }

  const userLiked = () => {
    if(isEmpty(auth)){
        return false
    }else {
        return post.likes.some(like => like.user.toString() === auth.user.id.toString())
    }
 }

    const createMarkup = () => {
      return {__html: truncate(post.excerpt, 400)}
    }
    
    return (
        <>
          <a>
            <div className="latest-post-img">
            <img src={post.postImg} alt="blog post image" />
              <div className="latest-post-img-info">
                <ul>
                  <li><i className="fa fa-user"></i> {post.user.fullName}</li>
                  <li><i className="fa fa-calendar"></i> {moment(post.createdAt).format("MMM DD, YYYY")}</li>
                  <li onClick={likeAPost} className="cursor-pt">
                    <i className={userLiked() ? "fa fa-thumbs-up" : "fa fa-thumbs-o-up"}>
                      </i> {post.likes.length}</li>
                  <li><i className="fa fa-comment-o"></i> {post.comments.length}</li>
                </ul>
              </div>
            </div>
          </a>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-text may-1">
            <div dangerouslySetInnerHTML={createMarkup()} />
            <p>
              <Link href={`/blog/${post._id}`}>
              <a className="btn btn-main may-1">Read More</a>
              </Link>
            </p>
          </div>
        </>
    )
}

export default FirstPost
