import Link from 'next/link'
import moment from "moment";
import {truncate} from '../../utils/func'
const TopPost = ({post}) => {

    const createMarkup = () => {
        return {__html: truncate(post.body, 52)}
      }

    return (
        <div className="topost-content-single">
            <Link href={`/blog/${post._id}`} shallow={false}>
                <a className="topost-content-single-img">
                    <img src={post.postImg} alt="" />
                </a>
            </Link>
            <div className="topost-content-single-text">
                <div dangerouslySetInnerHTML={createMarkup()} />
                <ul>
                <li><i className="fa fa-calendar"></i> {moment(post.createdAt).format("MMM DD, YYYY")}</li>
                </ul>
            </div>
        </div>
    )
}

export default TopPost
