import {useContext, forwardRef} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import DropDownMenu from './DropDownMenu'
import {DataContext} from '../store/GlobalState'
import {stringToHslColor, isEmpty} from '../utils/func'

const AuthSidebar = forwardRef((_, ref) => {
    const {state} = useContext(DataContext)
    const { auth } = state
    const router = useRouter()

    const isActive = r => {
        if(r === router.pathname){
          return "active-nav"
        }
        else if(r.startsWith('/blgadmin/post') && router.pathname.startsWith('/blgadmin/post')){
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

    const blogIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-0 md:m-auto lg:m-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>

    return (
        <aside className="filter-block transform -translate-x-full w-64 md:translate-x-0 md:block md:w-18 lg:w-64 fixed h-full border-r pt-8 pb-0 bg-sidebar text-white" ref={ref}>
            <div className="flex md:hidden lg:flex items-center space-x-2 my-2 px-6 pb-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white uppercase" style={{ backgroundColor: isEmpty(auth) ? 'transparent' : stringToHslColor(auth?.user?.email) }}>
                    {auth?.user?.name.charAt(0)}
                    {/* <img src="/img/propix.jpeg" alt="Logo" className="w-full h-full object-cover rounded-full"  /> */}
                </div>
                <div>
                    <h3 className="text-base font-semibold">{`${auth?.user?.name}`}</h3>
                    <p className="text-tiny font-bold tracking-wide uppercase">ROLE: Admin</p>
                </div>
            </div>
            <div className="pb-8 overflow-y-scroll h-5/6">
                <ul>
                    <li className="block md:hidden lg:block px-6 py-3 text-xs uppercase">NAVIGATION</li>
                    <li className={`hover:text-hov-t-color hover:bg-hov-b-color cursor-pointer ${isActive('/blgadmin')}`}>
                        <Link href="/blgadmin" className="font-normal text-sml">
                            <div className="flex items-center space-x-2.5 px-6 md:px-0 lg:px-6 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-0 md:m-auto lg:m-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="block md:hidden lg:block">Dashboard</span>
                            </div>
                        </Link>
                    </li>
                    <DropDownMenu isActive={isActive} title="Post" route="/blgadmin/post" icon={blogIcon}>
                        <ul className="ml-5">
                            <li className="py-2 hover:text-hov-t-color">
                                <Link href="/blgadmin/post/add" className="font-normal text-sml">
                                    Add Post
                                </Link>
                            </li>
                            <li className="py-2 hover:text-hov-t-color">
                                <Link href="/blgadmin/post" className="font-normal text-sml">
                                    Manage Post
                                </Link>
                            </li>
                        </ul>
                    </DropDownMenu>
                </ul>
            </div>
        </aside>
    )
})

export default AuthSidebar
