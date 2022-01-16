import {useState, useContext, useEffect, createRef} from 'react'
import Link from 'next/link'
import moment from 'moment'
import Layout from '../../../components/layouts/AdminLayout'
import {getData, putData} from '../../../utils/fetchData'
import {DataContext} from '../../../store/GlobalState'

const PostManager = ({posts}) => {
    const [allPosts, setPost] = useState(posts)

    const {state, dispatch} = useContext(DataContext)
    const {auth} = state

    const showPost = async pid => {
        if(!auth.token) return dispatch({ type: 'NOTIFY', payload: {error: 'Please login or sign up'} })
        const res = await putData(`post/admin/${pid}/show`, '', auth.token)
        if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    
        setPost(allPosts.map(post => post._id === pid ? { ...post, show: res.show } : post))
    }
    return (
        <Layout title="Post">
            <h2>Post Manager</h2>
            <div className="mt-16">
                    <div className="bg-white border rounded-md px-4 pb-6 pt-2">
                        {allPosts?.length === 0 ? <h5 className="text-xs font-normal capitalize mt-8">No post</h5> :
                        <table className="border-collapse w-full text-xs font-normal table-fixed my-8">
                            <thead>
                                <tr>
                                    
                                    <th className="border-0 border-gray-300 text-left p-4 font-medium text-sm">Image</th>
                                    <th className="border-0 border-gray-300 text-left p-4 font-medium text-sm">Title</th>
                                    <th className="border-0 border-gray-300 text-left p-4 font-medium text-sm">Author</th>
                                    <th className="border-0 border-gray-300 text-left p-4 font-medium text-sm">Category</th>
                                    <th className="border-0 border-gray-300 text-left p-4 font-medium text-sm">Likes</th>
                                    <th className="border-0 border-gray-300 text-left p-4 font-medium text-sm">Comments</th>
                                    <th className="border-0 border-gray-300 text-left p-4 font-medium text-sm">Published</th>
                                    <th className="border-0 border-gray-300 text-left p-4 font-medium text-sm">Created At</th>
                                    <th className="border-0 border-gray-300 text-left p-4 font-medium text-sm">Updated At</th>
                                    <th className="border-0 border-gray-300 text-left p-4 font-medium text-sm">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allPosts?.map(post => (
                                    <tr key={post._id}>
                                        
                                        <td data-heading="Image" className="border border-gray-300 text-left p-4 break-words border-r-0 border-l-0">
                                            <img src={post.postImg} alt="" className="h-10 w-10 object-cover" />
                                        </td>
                                        <td data-heading="Title" className="border border-gray-300 text-left p-4 break-words border-r-0 border-l-0">{post.title}</td>
                                        <td data-heading="Author" className="border border-gray-300 text-left p-4 break-words border-r-0 border-l-0">{post.user.fullName}</td>
                                        <td data-heading="Category" className="border border-gray-300 text-left p-4 break-words border-r-0 border-l-0">
                                            {post.category.join(", ")}
                                        </td>
                                        <td data-heading="Likes" className="border border-gray-300 text-left p-4 break-words border-r-0 border-l-0">{post.likes?.length}</td>
                                        <td data-heading="Comments" className="border border-gray-300 text-left p-4 break-words border-r-0 border-l-0">{post.comments?.length}</td>
                                        <td data-heading="Published" className="border border-gray-300 text-left p-4 break-words border-r-0 border-l-0">
                                            {post.show ? 
                                                <span onClick={() => showPost(post._id)} className="bg-green-500 rounded-md py-1 px-2 text-white text-tiny cursor-pointer">Published</span> : 
                                                <span onClick={() => showPost(post._id)} className="bg-red-400 rounded-md py-1 px-2 text-white text-tiny cursor-pointer">Draft</span>
                                            }
                                        </td>
                                        <td data-heading="Created At" className="border border-gray-300 text-left p-4 break-words border-r-0 border-l-0">{moment(post.createdAt).format("LLLL")}</td>
                                        <td data-heading="Updated At" className="border border-gray-300 text-left p-4 break-words border-r-0 border-l-0">{moment(post.updatedAt).format("LLLL")}</td>
                                        <td data-heading="Actions" className="border border-gray-300 text-left p-4 break-words border-r-0 border-l-0">
                                            <div className="flex gap-1 text-tiny flex-wrap">
                                                <Link href={`/blog/${post._id}`}>
                                                    <a target="_blank">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </a>
                                                </Link>
                                                <Link href={`/blgadmin/post/${post._id}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </Link>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </table>
}
                    </div>
                </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await getData('post/admin')
    return {
      props: {
        posts: res.posts,
        result: res.result
      }, // will be passed to the page component as props
    }
}

export default PostManager
