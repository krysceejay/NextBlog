import {useState, useContext} from 'react'
import {postData} from '../utils/fetchData'
import {DataContext} from '../store/GlobalState'
import Loading from './Loading'

const NewsLetter = () => {
    const [formData, setFormData] = useState({
        email: '',
        isLoading: false,
      })
    const { email, isLoading } = formData;  

    const {dispatch} = useContext(DataContext)

    const handleOnchange = e => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
        dispatch({ type: 'NOTIFY', payload: {} })
      }

    const handleSubmit = async e => {
      e.preventDefault()

      setFormData({...formData, isLoading: true})
      const res = await postData(`newsletter`, {email})
        if(res.err) {
          setFormData({...formData, isLoading: false})
          return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
        }
        dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
        setFormData({...formData, email: '', isLoading: false})
    }

    return (
        <div className="newsletter-sub">
            <h2>Sign up for newsletter</h2>
            {isLoading ? <Loading /> :
            <form onSubmit={handleSubmit}>
                <div className="newsletter-sub-form my-1">
                    <input type="email" placeholder="your email" name="email" onChange={handleOnchange} value={email} />
                    <button type="submit" className="btn btn-main py-07">Submit</button>
                    <p>YOUR EMAIL ADDRESS WILL NEVER BE SHARED</p>
                </div>
            </form> 
            }
        </div>
    )
}

export default NewsLetter
