import { useContext } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Cookie from 'js-cookie'
import {DataContext} from '../store/GlobalState'
import {isEmpty, stringToHslColor} from '../utils/func'

const Header = () => {
  // const [tab, setTab] = useState('home')
  const router = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const { auth } = state


    const isActive = r => {
        if(r === router.pathname){
          return "current"
        }
        else if(r.startsWith('/blog') && router.pathname.startsWith('/blog')){
            return "current"
        }
        else if(r.startsWith('/user') && router.pathname.startsWith('/user')){
          return "current"
        }
        else{
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
        <div className="loggedin">
            <div className="loggedin-img">
              {authObj.user.avatar ? 
                  <img src={authObj.user.avatar} alt="" /> : 
                  <div className="placeholder-avatar" style={{ backgroundColor: stringToHslColor(authObj.user.email) }}>
                  {authObj.user.name.charAt(0)}
                  </div> 
              }
            </div>
            <i className="fa fa-angle-down"></i>
            <ul className="nav-sub-menu">
              <li onClick={handleLogout} className="cursor-pt">
                Logout
              </li>
              {authObj.user.isAdmin &&
                <li className="cursor-pt">
                  <Link href="/blgadmin">
                      <a>Admin</a>
                  </Link>
                </li>
              }
            </ul>
        </div>
    )
  }
   

  return (
    
      <nav id="main-nav">
        <Link href="/">
          <a>
            <div className="mylogo"><span className="text-primary">Chris</span>Chijioke</div>
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a className={isActive('/')}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className={isActive('/blog')}>Blog</a>
            </Link>
          </li>
          <li>
          {
            isEmpty(auth) ? 
            <Link href="/user">
              <a className={isActive('/user')}>Sign-in</a>
            </Link> :
            loggedIn(auth) 
          }
          </li>
        </ul>
      </nav>
    
  )
}

export default Header;
