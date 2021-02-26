import React, { useContext } from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router'
import Cookie from 'js-cookie'
import {DataContext} from '../store/GlobalState'
import {isEmpty} from '../utils/func'

const Header = () => {

  const router = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const { auth, cart } = state


    const isActive = (r) => {
        if(r === router.pathname){
            return " active"
        }else{
            return ""
        }
    }

    const handleLogout = () => {
        Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
        localStorage.removeItem('firstLogin')
        dispatch({ type: 'AUTH', payload: {} })
        dispatch({ type: 'NOTIFY', payload: {success: 'Logged out!'} })
        return router.push('/')
    }

  const adminRouter = () => {
    return(
        <>
          <li>
            <Link href="/blgadmin">
                <a>Admin</a>
            </Link>
         </li>
         
        </>
    )
  }
  const loggedIn = authObj => {
    return(
        <>
           { authObj.user.isAdmin && adminRouter()}
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
          <li>
            {authObj.user.name}
          </li>
        </>
    )
  }
   

  return (
      <nav id="main-nav">
        <Link href="/">
          <a>
            <h1><span className="text-primary">MY</span>LOGO</h1>
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="current">Blog</a>
            </Link>
          </li>
          {
            isEmpty(auth) === false && loggedIn(auth)
            
          }
        </ul>
      </nav>
  )
}

export default Header;
