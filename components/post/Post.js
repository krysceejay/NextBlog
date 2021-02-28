import Link from 'next/link'
import moment from "moment";
import {truncate} from '../../utils/func'
const Post = ({post}) => {
    return (
        <div className="rest-post-single">
            <Link href={`/blog/${post._id}`}>
                <a>
                    <div className="rest-post-single-img">
                    <img src={post.postImg} alt="" />
                    </div>
                </a>
            </Link>
            <h3>{post.title}</h3>
            <div className="post-text my-1">
                <p>
                {truncate(post.body, 150)}
                </p>

                <ul>
                <li><i className="fa fa-calendar"></i> {moment(post.createdAt).format("MMM DD, YYYY")}</li>
                <li><i className="fa fa-thumbs-up"></i> {post.likes.length}</li>
                <li><i className="fa fa-comment"></i> {post.comments.length}</li>
                </ul>
            </div>
        </div>
    )
}

export default Post
