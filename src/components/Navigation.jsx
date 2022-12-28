import { useState } from 'react'
const classNames = require('classnames')

export const Navigation = ({logo, menuItems}) => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [ispageScrolled, setIsPageScrolled] = useState(false)

    const scrollFunction = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            setIsPageScrolled(true)
        } else {
            setIsPageScrolled(false)
        }
    }

    window.onscroll = () => scrollFunction()

    return (
        <nav className={classNames("flex items-center justify-between flex-wrap p-6 sticky top-0 transition ease-in-out delay-150", {'bg-black bg-opacity-80': ispageScrolled})}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a href="/"><img src={logo?.url} alt={logo?.description} className="h-7 w-7"></img></a>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border text-white border-white-400 hover:text-white hover:border-white" onClick={() => setMenuOpen(!isMenuOpen)}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={classNames("w-full block flex-grow lg:flex lg:items-center lg:w-auto ", {hidden: !isMenuOpen})}>
                <div className="text-sm lg:flex-grow">
                {menuItems.includes('about') && <a href="/#about" className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
                    About
                </a>}
                {menuItems.includes('projects') && <a href="/#projects" className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
                    Projects
                </a>}
                {menuItems.includes('stack') && <a href="/#stack" className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
                    Stack
                </a>}
                </div>
                <div>
                {menuItems.includes('contact') && <a href="/#contact" className="inline-block text-sm px-4 py-2 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0">Contact</a>}
                </div>
            </div>
        </nav>
    )
}