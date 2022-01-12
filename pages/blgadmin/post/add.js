import {useState, useContext} from 'react'
import {useRouter} from 'next/router'
import Layout from '../../../components/layouts/AdminLayout'
import {DataContext} from '../../../store/GlobalState'
import {imageUpload} from '../../../utils/imageUpload'
import {postData, getData, putData} from '../../../utils/fetchData'

const AddPost = ({categories}) => {

    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        body: '',
        category: [],
        postImg: ''
      });
    
    const { title, excerpt, body, category, postImg } = formData;   

    const {state, dispatch} = useContext(DataContext)  
    const { auth } = state
    const router = useRouter()

    const handleOnchange = e => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
        dispatch({ type: 'NOTIFY', payload: {} })
      }
    
    const handleSelectChange = e => {
        let options = e.target.options;
        let value = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
            value.push(options[i].value);
            }
        }
        setFormData({...formData, category: value})
    }  
    
    const handleUploadInput = e => {
    dispatch({type: 'NOTIFY', payload: {}})

    const file = e.target.files[0]

    if(!file) return dispatch({type: 'NOTIFY', payload: {error: 'File does not exist.'}})

    if(file.size > 1024 * 1024 * 2) return dispatch({type: 'NOTIFY', payload: {error: 'The largest image size is 2mb'}})

    if(file.type !== 'image/jpeg' && file.type !== 'image/png') return dispatch({type: 'NOTIFY', payload: {error: 'Image format is incorrect.'}})
    
    setFormData({...formData, postImg: file})
  }

    const handleSubmit = async e => {
        e.preventDefault()
        let media;

        if(!auth.token) return dispatch({ type: 'NOTIFY', payload: {error: 'Please login or sign up'} })
        if(!auth.user.isAdmin) return dispatch({type: 'NOTIFY', payload: {error: 'Authentication is not valid.'}})

        if(!title || !body || !postImg || category.length === 0)
        return dispatch({type: 'NOTIFY', payload: {error: 'Please add all the fields.'}})

        dispatch({ type: 'NOTIFY', payload: {loading: true} })

        if(postImg) media = await imageUpload([postImg])

        const res = await postData('post', { 
            title, 
            body, 
            category,
            excerpt,
            postImg: media[0].url
            }, auth.token)

        if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

        dispatch({type: 'NOTIFY', payload: {success: res.msg}})
        router.push('/blgadmin/post')
    }

    const removeCat = ind => {
        setFormData({...formData, category: category.filter(it => it._id !== ind)})
    }

    const addCat = e => {
        if(e.target.value == "") return
        const findCat = categories.find(ct => ct._id === e.target.value)
        if(category.some(it => it._id === findCat._id)) return
        setFormData({...formData, category: [...category, findCat]})
    }

    return (
        <Layout title='Add Post'>
            <h3>Add Post</h3>
            <div className="mt-3 max-w-lg">
            <form onSubmit={handleSubmit} className="px-6 pt-6 pb-8 mb-4 text-sm font-semibold">
                {/* <label>Title:</label><br />
                <input type="text" name="title" value={title} onChange={handleOnchange} /><br />
                <label>Body:</label><br />
                <textarea name="body" cols="30" rows="4" onChange={handleOnchange} /><br />
                <label>Cat:</label><br />
                <select name="category" onChange={handleSelectChange} multiple>
                    <option value="programming">Programming</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="Nextjs">Nextjs</option>
                   {
                        categories.map(cat => {
                            <option key={cat._id} value={cat.name}>{cat.name}</option>
                        })
                    }
                </select><br />
                <label>Post Image</label><br />
                <input type="file" onChange={handleUploadInput} accept="image/*" /><br /><br />

                <input type="submit" value="Submit" /> */}
                <div className="mb-4">
                    <label className="block mb-2">
                        Title
                    </label>
                    <input 
                    name="title"
                    value={title}
                    onChange={handleOnchange}
                    className="appearance-none border rounded w-full p-3 leading-tight focus:outline-none" 
                    type="text" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">
                        Excerpt
                    </label>
                    <input 
                    name="excerpt"
                    value={excerpt}
                    onChange={handleOnchange}
                    className="appearance-none border rounded w-full p-3 leading-tight focus:outline-none" 
                    type="text" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">
                        Category
                    </label>
                    <div className="">
                        <ul className="flex flex-wrap items-center space-x-2 text-white text-xs p-2">
                            {
                                category.map(it => (
                                    <li key={it._id} className="bg-blue-500 flex items-center space-x-2 mb-2 p-1 rounded-md">
                                        <span>{it.name}</span>
                                        <svg onClick={()  => removeCat(it._id)} xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="relative">
                            <select
                            onChange={addCat}
                            className="block text-sm appearance-none w-full bg-white border border-gray-200 p-3 rounded leading-tight focus:outline-none">
                                <option value="">Select Category</option>
                                {categories?.map(ct => (
                                    <option value={ct._id} key={ct._id}>{ct.name}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    {/* <div className="h-20 w-40">
                        <img src={featureImage} className="w-full h-full object-cover" />
                    </div> */}
                    <label className="block mb-2">
                    Feature Image
                    </label>
                    <input 
                    accept="image/*"
                    //className="appearance-none border rounded w-full p-3 leading-tight focus:outline-none" 
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-violet-100 appearance-none border-0 focus:outline-none focus:border-0"
                    onChange={handleUploadInput}
                    type="file" />
                </div>
                <textarea name="body" cols="30" rows="4" onChange={handleOnchange} /><br />
                <div>
                    <button className="bg-hov-t-color text-white py-2 px-8 rounded focus:outline-none" type="submit">
                        Save
                    </button>
                </div>
            </form>
            </div>
       </Layout>
    )
}

export async function getServerSideProps() {
    const res = await getData('category')
    return {
      props: {
        categories: res.categories,
      }, // will be passed to the page component as props
    }
}

export default AddPost