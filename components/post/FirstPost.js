import Link from 'next/link'
import moment from 'moment'
import {truncate} from '../../utils/func'
const FirstPost = ({post}) => {
    return (
        <>
            <Link href={`/blog/${post._id}`}>
            <a>
              <div className="latest-post-img">
              <img src={post.postImg} alt="blog post image" />
                <div className="latest-post-img-info">
                  <ul>
                    <li><i className="fa fa-calendar"></i> {moment(post.createdAt).format("MMM DD, YYYY")}</li>
                    <li><i className="fa fa-thumbs-up"></i> {post.likes.length}</li>
                    <li><i className="fa fa-comment"></i> {post.comments.length}</li>
                  </ul>
                </div>
              </div>
            </a>
            </Link>
            <h1>{post.title}</h1>
            <div className="post-text my-1">
              {truncate(post.body, 400)}
              <p>
                <Link href={`/blog/${post._id}`}>
                <a className="btn btn-main my-1">Read More</a>
                </Link>
              </p>
            </div>
        </>
    )
}

export default FirstPost
