import {useContext} from 'react'
import moment from "moment";
import Layout from '../../components/layouts/Layout';
import { getData } from '../../utils/fetchData'
import Socials from '../../components/Socials';
import NewsLetter from '../../components/NewsLetter';
import TopPosts from '../../components/post/TopPosts';
import {isEmpty} from '../../utils/func'
import AddComment from "../../components/comment/AddComment";
import Comments from "../../components/comment/Comments";
import {DataContext} from '../../store/GlobalState'

const Details = ({post}) => {

  const {state} = useContext(DataContext)
  const { comments } = state

  return (
      <Layout title="Blog Details">
        <section id="blog-sec" className="py-4">
      <div className="container">
        <div className="blog-sec-view">
          <div className="blog-sec-view-main">
            { post === null || isEmpty(post) ? 
            <h3>Loading...</h3> : 
            <>
            <div className="latest-post-img">
              <img src={post.postImg} alt="" />
              <div className="latest-post-img-info">
                <ul>
                  <li><i className="fa fa-calendar"></i> {moment(post.createdAt).format("MMM DD, YYYY")}</li>
                  <li><i className="fa fa-thumbs-up"></i> {post.likes.length}</li>
                  <li><i className="fa fa-comment"></i> {comments.length}</li>
                </ul>
              </div>
            </div>
            <h1>{post.title}</h1>
            <div className="post-text my-1">
              {post.body}
            </div>
            <br />
            <hr />
            <div className="comment-post my-2">
              <AddComment pid={post._id} />
              <Comments pid={post._id}/>
            </div>
            </>
            }
          </div>
          <aside className="blog-sec-view-aside">
            <TopPosts />
            <NewsLetter />
            <Socials />
          </aside>
        </div>
      </div>
    </section>
      </Layout>
    )
  }

  export async function getServerSideProps({params: {id}}) {
    const res = await getData(`post/${id}`)
    if (res.err) {
      return {
        notFound: true,
      }
    }
    return {
      props: { 
        post: res.post
      }
    }
 }

export default Details;