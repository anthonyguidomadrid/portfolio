import { useState } from 'react'
import { Button } from './Button'
const classNames = require('classnames')

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
        <nav className={classNames("flex items-center justify-between flex-wrap p-6 fixed top-0 transition ease-in-out delay-150 w-full", {'bg-slate-900 bg-opacity-80': ispageScrolled || isMenuOpen})}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a href="/"><img src={logo?.url} alt={logo?.description} className="h-7 w-7"></img></a>
            </div>
            <div className="block md:hidden">
                <button className="flex items-center px-3 py-2 border text-white border-white-400 hover:text-white hover:border-white" onClick={() => setMenuOpen(!isMenuOpen)}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={classNames("w-full block flex-grow md:flex md:items-center md:w-auto ", {hidden: !isMenuOpen})}>
                <div className="text-sm md:flex-grow">
                {menuItems.map((item, idx) => {
                    const id = item.toLowerCase().replace(/\s/g, '')
                    return <a key={idx} href={`./#${id}`} className="block mt-4 md:inline-block md:mt-0 text-slate-200 hover:text-white mr-4">{item}</a>
                })}
                </div>
                <div>
                {cta && <Button text={cta} AdditionalClasses='mt-4 md:mt-0'/>}
                </div>
            </div>
        </nav>
    )
}