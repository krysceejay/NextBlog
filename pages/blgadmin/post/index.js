import Link from 'next/link'
import Layout from '../../../components/layouts/AdminLayout'
import {getData} from '../../../utils/fetchData'

const PostManager = ({posts}) => {
    return (
        <Layout title="Post">
            <h2>Post Manager</h2>
            {posts.map(post => (
                <Link href={`/blgadmin/post/${post._id}`} key={post._id}>
                    <a>{post._id}</a>
                </Link>
            ))
            }
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

export default PostManager
