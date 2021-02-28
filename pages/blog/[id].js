import moment from "moment";
import Layout from '../../components/layouts/Layout';
import { getData } from '../../utils/fetchData'
import Socials from '../../components/Socials';
import NewsLetter from '../../components/NewsLetter';
import TopPosts from '../../components/post/TopPosts';
import {isEmpty} from '../../utils/func'

const Details = ({post}) => {
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
                  <li><i className="fa fa-comment"></i> {post.comments.length}</li>
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
            <div className="leave-a-comment my-2">
                <form action="">
                  <textarea
                    name=""
                    id=""
                    placeholder="Leave a comment"
                  ></textarea>
                  <button type="submit" className="btn btn-main">Submit</button>
                </form>
              </div>

              <div className="comment-post-heading my-1">
                Comments
              </div>
              <div className="comment-post-single">
                <div className="comment-post-single-img">
                  <img src="/img/b1.jpg" alt="" />
                </div>
                <div className="comment-post-single-text">
                  <div className="user-name">
                    John
                  </div>
                  <div className="user-comment">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque inventore beatae hic nam officia facere ad maxime non
                    ea maiores! Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Itaque inventore beatae hic nam officia
                    facere ad maxime non ea maiores!
                  </div>
                  <div className="user-post-info">
                    <span className="date">2 weeks</span>
                    <span className="likes">2 likes</span>
                    <span className="reply">Reply</span>
                  </div>
                </div>
              </div>
              <div className="comment-post-single">
                <div className="comment-post-single-img">
                  <img src="/img/b1.jpg" alt="" />
                </div>
                <div className="comment-post-single-text">
                  <div className="user-name">
                    John
                  </div>
                  <div className="user-comment">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque inventore beatae hic nam officia facere ad maxime non
                    ea maiores! Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Itaque inventore beatae hic nam officia
                    facere ad maxime non ea maiores!
                  </div>
                  <div className="user-post-info">
                    <span className="date">2 weeks</span>
                    <span className="likes">2 likes</span>
                    <span className="reply">Reply</span>
                  </div>
                </div>
              </div>
              <div className="comment-post-single">
                <div className="comment-post-single-img">
                  <img src="/img/b1.jpg" alt="" />
                </div>
                <div className="comment-post-single-text">
                  <div className="user-name">
                    John
                  </div>
                  <div className="user-comment">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque inventore beatae hic nam officia facere ad maxime non
                    ea maiores! Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Itaque inventore beatae hic nam officia
                    facere ad maxime non ea maiores!
                  </div>
                  <div className="user-post-info">
                    <span className="date">2 weeks</span>
                    <span className="likes">2 likes</span>
                    <span className="reply">Reply</span>
                  </div>
                </div>
              </div>
              <button className="btn btn-main">See more</button>
              
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