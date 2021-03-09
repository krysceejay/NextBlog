import {useState, useContext} from 'react'
import {useRouter} from 'next/router'
import Layout from '../../../components/layouts/Layout'
import {DataContext} from '../../../store/GlobalState'
import {imageUpload} from '../../../utils/imageUpload'
import {postData, getData, putData} from '../../../utils/fetchData'

const AddPost = () => {

    const [formData, setFormData] = useState({
        title: '',
        body: '',
        category: [],
        postImg: ''
      });
    
    const { title, body, category, postImg } = formData;   

    const {state, dispatch} = useContext(DataContext)  
    const { categories, auth } = state
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

    if(!file) return dispatch({type: 'NOTIFY', payload: {error: 'Files does not exist.'}})

    if(file.size > 1024 * 1024 * 2) return dispatch({type: 'NOTIFY', payload: {error: 'The largest image size is 2mb'}})

    if(file.type !== 'image/jpeg' && file.type !== 'image/png') return dispatch({type: 'NOTIFY', payload: {error: 'Image format is incorrect.'}})
    
    setFormData({...formData, postImg: file})
  }

    const handleSubmit = async e => {
        e.preventDefault()
        let media;
        if(!auth.user.isAdmin) return dispatch({type: 'NOTIFY', payload: {error: 'Authentication is not valid.'}})

        if(!title || !body || !postImg || category.length === 0)
        return dispatch({type: 'NOTIFY', payload: {error: 'Please add all the fields.'}})

        dispatch({ type: 'NOTIFY', payload: {loading: true} })

        if(postImg) media = await imageUpload([postImg])

        const res = await postData('post', { 
            title, 
            body, 
            category,
            postImg: media[0].url
            }, auth.token)

        if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

        dispatch({type: 'NOTIFY', payload: {success: res.msg}})
        router.push('/blgadmin/post')
    }

    return (
        <Layout title='Add Post'>
            <h3>Add Post</h3>
            <form onSubmit={handleSubmit}>
                <label>Title:</label><br />
                <input type="text" name="title" value={title} onChange={handleOnchange} /><br />
                <label>Body:</label><br />
                <textarea name="body" cols="30" rows="4" onChange={handleOnchange} /><br />
                <label>Cat:</label><br />
                <select name="category" onChange={handleSelectChange} multiple>
                    <option value="programming">Programming</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="Nextjs">Nextjs</option>
                    {/* {
                        categories.map(cat => {
                            <option key={cat._id} value={cat.name}>{cat.name}</option>
                        })
                    } */}
                </select><br />
                <label>Post Image</label><br />
                <input type="file" onChange={handleUploadInput} accept="image/*" /><br /><br />

                <input type="submit" value="Submit" />
            </form>
       </Layout>
    )
}
export default AddPost