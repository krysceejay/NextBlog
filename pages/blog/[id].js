import {useState, useContext, useEffect} from 'react'
import moment from "moment";
import Layout from '../../components/layouts/Layout';
import { getData, postData } from '../../utils/fetchData'
import Socials from '../../components/Socials';
import NewsLetter from '../../components/NewsLetter';
import TopPosts from '../../components/post/TopPosts';
import {isEmpty} from '../../utils/func'
import AddComment from "../../components/comment/AddComment";
import Comments from "../../components/comment/Comments";
import {DataContext} from '../../store/GlobalState'

const Details = ({post}) => {
  const {state, dispatch} = useContext(DataContext)
  const { comments, likes, auth } = state

//   //TODO: ADD LOADER
//   useEffect(() => {
//     getPostLikes(post._id)
//   }, [post._id])

//  const getPostLikes = async id => {
//      const res = await getData(`post/${id}/likes`)
//      dispatch({ type: 'GET_LIKES', payload: res.likes })
//    }

  useEffect(() => {
    getPostLikes(post._id)
    getPostComments(post._id)
  }, [post._id])

   const getPostLikes = async id => {
     const res = await getData(`post/${id}/likes`)
     dispatch({ type: 'GET_LIKES', payload: res.likes })
   }

  const getPostComments = async id => {
    const res = await getData(`post/${id}/comments`)
    dispatch({ type: 'GET_COMMENTS', payload: res.comments })
  }

  const likePost = async pid => {
    if(!auth.token) return dispatch({ type: 'NOTIFY', payload: {error: 'Please login or sign up'} })
    const res = await postData(`post/${pid}/likes`, '', auth.token)
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

    dispatch({ type: 'UPDATE_LIKES', payload: res.like })
  }

  const userLiked = () => {
    if(isEmpty(auth)){
        return false
    }else {
        return likes.some(like => like.user.toString() === auth.user.id.toString())
    }
 }

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
                  <li onClick={() => likePost(post._id)} className="cursor-pt">
                    <i className={userLiked() ? "fa fa-thumbs-up" : "fa fa-thumbs-o-up"}>
                      </i> {likes.length}</li>
                  <li><i className="fa fa-comment-o"></i> {comments.length}</li>
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
              <Comments comments={comments} />
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