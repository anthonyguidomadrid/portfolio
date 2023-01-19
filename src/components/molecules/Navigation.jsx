import { useState } from 'react'
import classNames from 'classnames'
import { ReactComponent as HamburgerMenu } from '../../assets/HamburgerMenu.svg'
import { ReactComponent as EnglishFlag } from '../../assets/EnFlag.svg'
import { ReactComponent as SpanishFlag } from '../../assets/EsFlag.svg'
import { HashLink } from 'react-router-hash-link'
import { Link } from "react-scroll"
import { useLocation } from 'react-router-dom'
import { locales } from '../../config/locales'
import { ReactComponent as Chevron } from '../../assets/Chevron.svg'

export const Navigation = ({logo, menuItems,locale, projectsContent}) => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [ispageScrolled, setIsPageScrolled] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const location = useLocation()
    const isHomePage = location.pathname === '/' || location.pathname === `/${locales.spain}/`
    const currentPath = locale ? location.pathname.slice(7) : location.pathname
    const ctaMenuItem = menuItems?.find(item => item.isCta)

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
                <HashLink smooth to={locale ? `${locale}/#top` : "/#top"}><img src={logo?.url} alt={logo?.description} className="h-7 w-7"></img></HashLink>
            </div>
            <div className="block md:hidden">
                <button className="flex items-center px-3 py-2 border text-white border-white-400 hover:text-white hover:border-white" onClick={() => setMenuOpen(!isMenuOpen)}>
                    <HamburgerMenu className='h-4 w-4' />
                </button>
            </div>
            <div className={classNames("w-full block flex-grow md:flex md:items-center md:w-auto transition-all duration-500", {'opacity-0 overflow-hidden md:h-fit h-0 md:opacity-100': !isMenuOpen})}>
                <div className="text-sm md:flex-grow">
                {menuItems?.filter(item => !item.isCta).map((item, idx) => {
                    const {name, link, isProject} = item
                    return (isHomePage ? 
                    isProject ?
                    <>
                        <Link 
                            key={idx}
                            activeStyle={{color: '#ffffff'}} 
                            className="block mt-4 md:inline-block md:mt-0 text-slate-200/75 hover:text-white" 
                            to={link} 
                            spy={true} 
                            smooth={true}
                            hashSpy={true}
                            duration={500}
                            onClick={() => setMenuOpen(false)}
                            >
                            {name}
                        </Link>
                        <button onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}><Chevron className={classNames('mr-4 ml-2 h-2 w-2 text-slate-200/75', {'rotate-270' : !isSubMenuOpen})}/></button>
                    </>
                    :
                    <Link 
                        key={idx}
                        activeStyle={{color: '#ffffff'}} 
                        className="block mt-4 md:inline-block md:mt-0 text-slate-200/75 hover:text-white mr-4" 
                        to={link} 
                        spy={true} 
                        smooth={true}
                        hashSpy={true}
                        duration={500}
                        onClick={() => setMenuOpen(false)}
                        >
                        {name}
                    </Link>
                    : isProject ?
                    <>
                    <HashLink
                        key={idx}
                        className="block mt-4 md:inline-block md:mt-0 text-slate-200/75 hover:text-white" 
                        smooth to={locale ? `${locale}/#${link}` : `/#${link}`} 
                        onClick={() => setMenuOpen(false)}
                        >
                        {name}
                    </HashLink>
                    <button onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}><Chevron className={classNames('mr-4 ml-2 h-2 w-2 text-slate-200/75', {'rotate-270' : !isSubMenuOpen})}/></button>
                    </>
                    :
                    <HashLink
                    key={idx}
                    className="block mt-4 md:inline-block md:mt-0 text-slate-200/75 hover:text-white mr-4" 
                    smooth to={locale ? `${locale}/#${link}` : `/#${link}`} 
                    onClick={() => setMenuOpen(false)}
                    >
                    {name}
                    </HashLink>)
                })}
                </div>
                <div>
                {ctaMenuItem ? isHomePage ?
                <Link 
                    activeStyle={{borderColor: '#ffffff'}}
                    to={`${ctaMenuItem.link}`} 
                    className="inline-block text-sm px-4 py-2 leading-none border text-slate-200 border-slate-500 hover:border-transparent hover:text-black hover:bg-white my-4 md:my-0" 
                    spy={true} 
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                >
                    {ctaMenuItem.name}
                </Link> 
                : <HashLink
                    className="inline-block text-sm px-4 py-2 leading-none border text-slate-200 border-slate-500 hover:border-transparent hover:text-black hover:bg-white my-4 md:my-0" 
                    smooth to={locale ? `${locale}/#${ctaMenuItem.link}` : `/#${ctaMenuItem.link}`} 
                    onClick={() => setMenuOpen(false)}
                    >
                    {ctaMenuItem.name}
                    </HashLink> : null}
                </div>
                <div className='md:ml-4'>
                    <HashLink smooth to={locale ? currentPath : `/${locales.spain}${currentPath}`} onClick={() => setMenuOpen(false)}>{locale ? <EnglishFlag/> : <SpanishFlag/>}</HashLink>
                </div>
            </div>
            {isSubMenuOpen && 
            <div className='absolute top-20 left-28 text-sm text-slate-200/75 bg-slate-900 bg-opacity-80 p-5 flex flex-col'>
                {projectsContent.length > 0 && projectsContent.map((project, idx) => {
                    const {title, slug} = project
                    const isCurrent = location.pathname?.includes(slug)

                    return (
                        <HashLink
                            key={idx}
                            smooth to={locale ? `/${locale}/projects/${slug}#top` : `/projects/${slug}#top`}
                            className={isCurrent ? 'text-white mb-2' : 'hover:text-white mb-2'}
                            onClick={() => {
                                setMenuOpen(false)
                                setIsSubMenuOpen(false)
                                }}
                        >
                        {title}
                        </HashLink>
                    )
                })}
            </div>}
        </nav>
    )
}