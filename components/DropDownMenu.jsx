import {useState} from 'react'

const DropDownMenu = ({children, isActive, title, route, icon }) => {
    const [showSub, setShowSub] = useState(false)
    return (
        <li className="cursor-pointer">
            <div 
            onClick={() => setShowSub(!showSub)}
            className={`flex items-center justify-between parent-has-sub py-4 ${isActive(route)}`}>
                <div className="flex items-center space-x-2.5 px-6 md:px-0 lg:px-6 w-full">
                    {icon}
                    <span className="block md:hidden lg:block font-normal text-sml">{title}</span>
                </div>
                <div className="block md:hidden pr-4 lg:block">
                    {showSub ? 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    }
                </div>
            </div>
            <div className={`${showSub ? 'block lg:block' : 'hidden lg:hidden'} md:hidden w-full px-6 pb-2`}>
                {children}
            </div>
        </li>
    )
}

export default DropDownMenu
