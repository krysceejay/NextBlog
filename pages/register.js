import {useState, useContext, useEffect} from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/layouts/Layout'
import valid from '../utils/valid'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import {isEmpty} from '../utils/func'

const Register = () => {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
    const router = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const { auth } = state

    const { name, email, password } = formData;

    //const onChange = name => text => setFormData({...formData, [name]: text});

    const handleOnchange = e => {
      const {name, value} = e.target
      setFormData({...formData, [name]: value})
      dispatch({ type: 'NOTIFY', payload: {} })
    }

    const handleSubmit = async e => {
      e.preventDefault()
      const errMsg = valid(name, email, password)
      if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })

      dispatch({ type: 'NOTIFY', payload: {loading: true} })

      const res = await postData('auth/register', formData)
    
      if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

      return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
    }

    useEffect(() => {
      if(isEmpty(auth) === false) router.back()
    }, [auth])

      return (
        <Layout title="Register">
          <form onSubmit={handleSubmit}>
              <label>Full Name:</label><br />
              <input type="text" id="fname" name="name" value={name} onChange={handleOnchange} /><br />
              <label>Email:</label><br />
              <input type="email" id="email" name="email" value={email} onChange={handleOnchange} /><br />
              <label>Password:</label><br />
              <input type="password" id="password" name="password" value={password} onChange={handleOnchange} /><br /><br />
              <input type="submit" value="Submit" />
          </form> 
        </Layout>
      )
  }

export default Register;
