import {useState, useContext} from 'react'
import Layout from '../components/layouts/Layout'
import Post from '../components/post/Post'
import FirstPost from '../components/post/FirstPost'
import TopPosts from '../components/post/TopPosts'
import {getData, postData} from '../utils/fetchData'
import Socials from '../components/Socials'
import NewsLetter from '../components/NewsLetter'
import {DataContext} from '../store/GlobalState'

const Blog = ({posts, result}) => {
  const [allPosts, setPost] = useState(posts)
  const {state, dispatch} = useContext(DataContext)
  const { auth } = state

  const likePost = async pid => {
    if(!auth.token) return dispatch({ type: 'NOTIFY', payload: {error: 'Please login or sign up'} })

    const res = await postData(`post/${pid}/likes`, '', auth.token)
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

    setPost(allPosts.map(post => post._id === pid ? { ...post, likes: res.like } : post))
  }

      return (
      <Layout title="Blog">
        <section id="blog-sec" className="py-4">
      <div className="container">
        <div className="blog-sec-view">
          {allPosts.length === 0 ? <h3>No post</h3> : 
          <div className="blog-sec-view-main">
            <FirstPost post={allPosts[0]} like={likePost} auth={auth} />
            <div className="rest-post">
              {allPosts.slice(1).map(post => {
                  return <Post key={post._id} post={post} like={likePost} auth={auth} />
                })
              }
            </div>

            {/* pagination */}
            {/* <ul className="paginate-links-menu my-2">
              <li className="">
                <a className="btn-lighten">
                  <i className="fa fa-angle-left"></i>
                </a>
              </li>

              <li className="">
                <a className="btn-lighten">
                  1
                </a>
              </li>

              <li className="">
                <a className="btn-lighten">
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
            </ul> */}
            {/* end pagination */}
          </div>
          }
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
 
export async function getServerSideProps() {
  const res = await getData('post')
  return {
    props: {
      posts: res.posts,
      result: res.result
    }, // will be passed to the page component as props
  }
} 

export default Blog;
