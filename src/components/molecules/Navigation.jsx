import { useState } from 'react'
import { removeEmptySpaceAndHighCase } from '../../helpers/tranformString'
import classNames from 'classnames'
import { ReactComponent as HamburgerMenu } from '../../assets/HamburgerMenu.svg'
import { HashLink } from 'react-router-hash-link'
import { Link } from "react-scroll"
import { useLocation } from 'react-router-dom'



export const Navigation = ({logo, menuItems, cta}) => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [ispageScrolled, setIsPageScrolled] = useState(false)
    const location = useLocation()
    const isHomePage = location.pathname === '/'
    const ctaHash = removeEmptySpaceAndHighCase(cta)

    const scrollFunction = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            setIsPageScrolled(true)
        } else {
            setIsPageScrolled(false)
        }
    }

    window.onscroll = () => scrollFunction()

    return (
        <nav className={classNames("flex items-center justify-between flex-wrap p-6 fixed top-0 w-full z-50", {'bg-slate-900 bg-opacity-80': ispageScrolled || isMenuOpen})}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <HashLink smooth to="/#top"><img src={logo?.url} alt={logo?.description} className="h-7 w-7"></img></HashLink>
            </div>
            <div className="block md:hidden">
                <button className="flex items-center px-3 py-2 border text-white border-white-400 hover:text-white hover:border-white" onClick={() => setMenuOpen(!isMenuOpen)}>
                    <HamburgerMenu className='h-4 w-4' />
                </button>
            </div>
            <div className={classNames("w-full block flex-grow md:flex md:items-center md:w-auto transition-all duration-500", {'opacity-0 overflow-hidden md:h-fit h-0 md:opacity-100': !isMenuOpen})}>
                <div className="text-sm md:flex-grow">
                {menuItems.map((item, idx) => {
                    console.log('isHomePage', isHomePage)
                    const id = removeEmptySpaceAndHighCase(item)
                    return isHomePage ? <Link 
                        activeStyle={{color: '#ffffff'}} 
                        className="block mt-4 md:inline-block md:mt-0 text-slate-200/75 hover:text-white mr-4" 
                        to={id} 
                        spy={true} 
                        smooth={true}
                        hashSpy={true}
                        duration={500}
                        onClick={() => setMenuOpen(false)}
                        >
                        {item}
                    </Link> 
                    : <HashLink
                    className="block mt-4 md:inline-block md:mt-0 text-slate-200/75 hover:text-white mr-4" 
                    smooth to={`/#${id}`} 
                    onClick={() => setMenuOpen(false)}
                    >
                    {item}
                    </HashLink>
                })}
                </div>
                <div>
                {cta ? isHomePage ?
                <Link 
                    activeStyle={{borderColor: '#ffffff'}}
                    to={`${ctaHash}`} 
                    className="inline-block text-sm px-4 py-2 leading-none border text-slate-200 border-slate-500 hover:border-transparent hover:text-black hover:bg-white" 
                    spy={true} 
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                >
                    {cta}
                </Link> 
                : <HashLink
                    className="inline-block text-sm px-4 py-2 leading-none border text-slate-200 border-slate-500 hover:border-transparent hover:text-black hover:bg-white" 
                    smooth to={`/#${ctaHash}`} 
                    onClick={() => setMenuOpen(false)}
                    >
                    {cta}
                    </HashLink> : null}
                </div>
            </div>
        </nav>
    )
}