import {useState, useEffect , useContext} from 'react'
import Head from "next/head"
import { useRouter } from 'next/router'
import AuthSidebar from "../AuthSidebar"
import Footer from "../Footer"
import Notify from "../Notify"
import {DataContext} from '../../store/GlobalState'
import {isEmpty} from '../../utils/func'

const AdminLayout = ({ children, title }) => {

  const router = useRouter()
  const {state} = useContext(DataContext)
  const { auth } = state


  useEffect(() => {
    //if(isEmpty(auth)) return router.push('/blgadmin/auth')
    if(auth?.user?.isAdmin === false || auth?.user?.isAdmin === undefined) router.push('/blgadmin/auth')
  }, [auth])

  return  (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Notify />
      <div className="relative min-h-screen flex w-screen overflow-hidden">
          <AuthSidebar />
          <main className="py-8 px-4 md:p-8 text-2xl font-bold flex-1 ml-0 md:ml-18 lg:ml-64">
              {children}
          </main>
      </div>
    </div>
  )
}

export default AdminLayout
