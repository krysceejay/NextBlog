import {useState, useEffect , useContext, useRef} from 'react'
import Head from "next/head"
import { useRouter } from 'next/router'
import Navbar from '../Navbar'
import AuthSidebar from '../AuthSidebar'
import Notify from "../Notify"
import {DataContext} from '../../store/GlobalState'
import {isEmpty} from '../../utils/func'

const AdminLayout = ({ children, title }) => {

  const sideBarRef = useRef(null)
  const barRef = useRef(null)
  const router = useRouter()
  const {state} = useContext(DataContext)
  const { auth } = state

  

  const handleShow = () => {
      sideBarRef.current?.classList.toggle("show")
      barRef.current?.classList.toggle("toggle")   
  }


  useEffect(() => {
    //if(isEmpty(auth)) return router.push('/blgadmin/auth')
    if(auth?.user?.isAdmin === false || auth?.user?.isAdmin === undefined) router.push('/blgadmin/auth')
  }, [auth])

  return  (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar ref={barRef} handleShow={handleShow} />
      <Notify />
      <div className="relative min-h-screen flex w-screen">
          <AuthSidebar ref={sideBarRef} />
          <main className="py-8 px-4 md:p-8 text-2xl font-bold flex-1 ml-0 md:ml-18 lg:ml-64">
              {children}
          </main>
      </div>
    </div>
  )
}

export default AdminLayout
