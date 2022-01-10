import {useContext} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {DataContext} from '../store/GlobalState'
import {stringToHslColor, isEmpty} from '../utils/func'

const AuthSidebar = () => {
    const {state} = useContext(DataContext)
    const { auth } = state
    const router = useRouter()

    console.log(auth);

    const isActive = r => {
        if(r === router.pathname){
          return "active-nav"
        }
        else if(r.startsWith('/blog') && router.pathname.startsWith('/blog')){
            return "active-nav"
        }
        else if(r.startsWith('/admin') && router.pathname.startsWith('/admin')){
          return "active-nav"
        }
        else if(r.startsWith('/company') && router.pathname.startsWith('/company')){
          return "active-nav"
        }
        else{
            return ""
        }
    }

    return (
        <aside className="filter-block transform -translate-x-full w-64 md:translate-x-0 md:block md:w-18 lg:w-64 fixed h-full border-r pt-8 pb-0 bg-white">
            <div className="flex md:hidden lg:flex items-center space-x-2 my-2 px-8 pb-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white uppercase" style={{ backgroundColor: isEmpty(auth) ? 'transparent' : stringToHslColor(auth?.user?.email) }}>
                    {auth?.user?.name.charAt(0)}
                    {/* <img src="/img/propix.jpeg" alt="Logo" className="w-full h-full object-cover rounded-full"  /> */}
                </div>
                <div>
                    <h3 className="text-lg font-semibold">{`${auth?.user?.name}`}</h3>
                    <p className="text-tiny font-bold tracking-wide uppercase">ROLE: Admin</p>
                </div>
            </div>
            <div className="pb-8 overflow-y-scroll h-5/6">
                <ul>
                    <li className="block md:hidden lg:block px-8 py-3 text-xs uppercase">NAVIGATION</li>
                    <li className={`hover:text-hov-t-color hover:bg-hov-b-color cursor-pointer ${isActive('/dashboard')}`}>
                        <Link href="/dashboard" className="font-normal text-sml">
                            <div className="flex items-center space-x-2.5 px-8 md:px-0 lg:px-8 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-0 md:m-auto lg:m-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="block md:hidden lg:block">Home</span>
                            </div>
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </aside>
    )
}

export default AuthSidebar
