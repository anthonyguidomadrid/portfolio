import { useState } from 'react'
import { Button } from '../atoms/Button'
import { removeEmptySpaceAndHighCase } from '../../helpers/tranformString'
import classNames from 'classnames'
import { ReactComponent as HamburgerMenu } from '../../assets/HamburgerMenu.svg'
import { HashLink as Link } from 'react-router-hash-link'


export const Navigation = ({logo, menuItems, cta}) => {
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
        <nav className={classNames("flex items-center justify-between flex-wrap p-6 fixed top-0 w-full z-50", {'bg-slate-900 bg-opacity-80': ispageScrolled || isMenuOpen})}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to="/"><img src={logo?.url} alt={logo?.description} className="h-7 w-7"></img></Link>
            </div>
            <div className="block md:hidden">
                <button className="flex items-center px-3 py-2 border text-white border-white-400 hover:text-white hover:border-white" onClick={() => setMenuOpen(!isMenuOpen)}>
                    <HamburgerMenu className='h-4 w-4' />
                </button>
            </div>
            <div className={classNames("w-full block flex-grow md:flex md:items-center md:w-auto transition-all duration-500", {'opacity-0 overflow-hidden md:h-fit h-0 md:opacity-100': !isMenuOpen})}>
                <div className="text-sm md:flex-grow">
                {menuItems.map((item, idx) => {
                    const id = removeEmptySpaceAndHighCase(item)
                    return <Link key={idx} to={`/#${id}`} className="block mt-4 md:inline-block md:mt-0 text-slate-200 hover:text-white mr-4" onClick={() => setMenuOpen(false)}>{item}</Link>
                })}
                </div>
                <div>
                {cta && <Button text={cta} additionalClasses='mt-4 md:mt-0'/>}
                </div>
            </div>
        </nav>
    )
}