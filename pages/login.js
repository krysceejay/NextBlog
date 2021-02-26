import {useState, useEffect , useContext} from 'react'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import Layout from '../components/layouts/Layout'
import {isEmpty} from '../utils/func'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter()

  const {state, dispatch} = useContext(DataContext)
  const { auth } = state

  const { email, password } = formData;

  const handleOnchange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    dispatch({ type: 'NOTIFY', payload: {loading: true} })

    const res = await postData('auth/login', formData)
  
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    dispatch({ type: 'NOTIFY', payload: {success: res.msg} })

    dispatch({ type: 'AUTH', payload: {
      token: res.access_token,
      user: res.user
    }})

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    })

    localStorage.setItem('firstLogin', true)
  }

  useEffect(() => {
    if(isEmpty(auth) === false) router.push('/')
  }, [auth])

  return (
    <Layout title="Login">
        <form onSubmit={handleSubmit}>
            <label>Email:</label><br />
            <input type="email" id="email" name="email" value={email} onChange={handleOnchange} /><br />
            <label>Password:</label><br />
            <input type="password" id="password" name="password" value={password} onChange={handleOnchange} /><br /><br />
            <input type="submit" value="Submit" />
        </form> 
      </Layout>
    )
  }

export default Login;
