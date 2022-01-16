import {useRef, forwardRef} from 'react'
import Link from 'next/link'

const Navbar = forwardRef(({handleShow}, ref) => {
    return (
        <nav className="flex items-center justify-between sticky top-0 z-40 p-4 md:px-10 shadow-sm bg-hov-b-color w-full">
            {/* <div className="h-full w-20">
                <img src="/img/logo.png" alt="Logo" className="w-full h-full object-cover"  />
            </div> */}
            <Link href="/" className="h-full w-20">
                <a>
                    <div className="font-arizonia text-2xl font-bold tracking-wider text-white"><span className="text-primary">Chris</span>Chijioke</div>
                </a>
            </Link>
            <div id="dash-bar" className="menu-icon md:hidden" ref={ref} onClick={() => handleShow()}>
                <span></span>
            </div>
        </nav>
    )
})

export default Navbar
