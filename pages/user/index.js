import {useEffect , useContext} from 'react'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import GoogleLogin from 'react-google-login'
import Layout from '../../components/layouts/Layout'
import {isEmpty} from '../../utils/func'
import {DataContext} from '../../store/GlobalState'
import {postData} from '../../utils/fetchData'

const login = () => {

    const router = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const { auth } = state

    // const responseGoogle = (response) => {
    //     console.log('response',response)
    //   }

    const responseGoogle = async response => {
        if(!response.error){
            const res = await postData('auth/userauth', {
                email: response.profileObj.email,
                name: response.profileObj.name,
                imageUrl: response.profileObj.imageUrl,
                accountId: response.profileObj.googleId,
                platform: 'google'
            })

            if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
            dispatch({ type: 'NOTIFY', payload: {success: res.msg} })

            dispatch({ type: 'AUTH', payload: {
            token: res.access_token,
            user: res.user
            }})

            Cookie.set('refreshtoken', res.refresh_token, {
            path: 'api/auth/accessToken',
            expires: 365
            })

            localStorage.setItem('firstLogin', true)
        }else{
            return dispatch({ type: 'NOTIFY', payload: {error: 'An error occurred. Please try again'} })
        }

      }

      useEffect(() => {
        if(isEmpty(auth) === false) router.push('/')
      }, [auth])

    return (
        <Layout title="User Login">
            <section className="py-5">
                <div className="container">
                    <div className="user-auth">
                        <GoogleLogin
                            clientId={process.env.GOOGLE_CLIENT_ID}
                            render={renderProps => (
                                    <button onClick={renderProps.onClick} className="auth-btn">
                                    <img src="/img/google.png" alt="" /><span>Sign in with Google</span>
                                </button>
                            )}
                            buttonText="Sign in with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        <button className="auth-btn">
                            <img src="/img/facebook.png" alt="" /><span>Sign in with Facebook</span>
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default login
