import {useState} from 'react'
import Layout from '../components/layouts/Layout'
import Post from '../components/post/Post'
import FirstPost from '../components/post/FirstPost'
import TopPosts from '../components/post/TopPosts'
import {getData} from '../utils/fetchData'
import Socials from '../components/Socials'
import NewsLetter from '../components/NewsLetter'

const Blog = ({posts, result}) => {
  const [allPosts, setPost] = useState(posts);
      return (
      <Layout title="Blog">
        <section id="blog-sec" className="py-4">
      <div className="container">
        <div className="blog-sec-view">
          {allPosts.length === 0 ? <h3>No post</h3> : 
          <div className="blog-sec-view-main">
            <FirstPost post={allPosts[0]} />
            <div className="rest-post">
              {allPosts.slice(1).map(post => {
                  return <Post key={post._id} post={post} />
                })
              }
            </div>

            {/* pagination */}
            <ul className="paginate-links-menu my-2">
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
            </ul>
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
