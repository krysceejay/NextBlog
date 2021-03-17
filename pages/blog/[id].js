import {useState, useContext, useEffect, createRef} from 'react'
import moment from 'moment'
import Layout from '../../components/layouts/Layout'
import { getData, postData } from '../../utils/fetchData'
import Socials from '../../components/Socials'
import NewsLetter from '../../components/NewsLetter'
import TopPosts from '../../components/post/TopPosts'
import {isEmpty} from '../../utils/func'
import AddComment from '../../components/comment/AddComment'
import Comments from '../../components/comment/Comments'
import Loading from '../../components/Loading'
import {DataContext} from '../../store/GlobalState'

const Details = ({post}) => {
const [replyObj, setReplyObj] = useState({
  user: '',
  cid: '',
  rid: ''
})
const [isLoading, setIsLoading] = useState(false)
  const formRef = createRef()
  const {state, dispatch} = useContext(DataContext)
  const { comments, postlikes, auth } = state

//   //TODO: ADD LOADER
  useEffect(() => {
    setIsLoading(true)
    setReplyObj({user: '', cid: '', rid: ''})
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
    if(!res.err){
      setIsLoading(false)
    }
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
        return postlikes.some(like => like.user.toString() === auth.user.id.toString())
    }
 }

//  const showReply = () => {
//   formRef.current.classList.toggle("hide")
//  }

const gotoComment = ({user, cid, rid}) => {
  window.scrollTo({ 
    top: formRef.current.offsetTop - 80,
    behavior: 'smooth'
  })
  setReplyObj({...replyObj, user, cid, rid})
}

const clearObj = () => {
  setReplyObj({user: '', cid: '', rid: ''})
}

const createMarkup = () => {
  return {__html: post.body}
}

  return (
      <Layout title="Blog Details">
        <section id="blog-sec" className="py-4">
      <div className="container">
        <div className="blog-sec-view">
          <div className="blog-sec-view-main">
          
            { isLoading || post === null || isEmpty(post) ? 
            <Loading />: 
            <>
            <div className="latest-post-img">
              <img src={post.postImg} alt="" />
              <div className="latest-post-img-info">
                <ul>
                  <li><i className="fa fa-calendar"></i> {moment(post.createdAt).format("MMM DD, YYYY")}</li>
                  <li onClick={() => likePost(post._id)} className="cursor-pt">
                    <i className={userLiked() ? "fa fa-thumbs-up" : "fa fa-thumbs-o-up"}>
                      </i> {postlikes.length}</li>
                  <li><i className="fa fa-comment-o"></i> {comments.length}</li>
                </ul>
              </div>
            </div>
            <h1>{post.title}</h1>
            <div className="post-text my-1">
              <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
            <br />
            <hr />
            <div className="comment-post my-2">
              <AddComment 
                pid={post._id} 
                ref={formRef}
                replyObj={replyObj}
                clearObj={clearObj}
                
              />
              <Comments comments={comments} goto={gotoComment} />
            </div>
            {/* <button onClick={showReply}>Hide form</button>
              <form className="reply-form" ref={formRef}>
                  <textarea
                  name="comment"
                  id=""
                  placeholder="your reply..."
                  rows="1" cols="50"
                  ></textarea>
                  <button type="submit" className="btn btn-reply">Reply</button>
              </form> */}
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