import { removeEmptySpaceAndHighCase } from '../../helpers/tranformString'
import { HashLink as Link } from 'react-router-hash-link'

export const Footer = ({logo, footerItems, socialMedia, locale}) => {
    return (
        <div className="bg-slate-900 text-white px-10 md:px-24">
            <div className="py-10">
                <Link smooth to={locale ? `${locale}/#top` : "/#top"}><img src={logo?.url} alt={logo?.description} className="mx-auto h-12 w-12"></img></Link>
            </div>
            <div className="border-y border-slate-600 p-10 flex justify-center max-w-screen-lg mx-auto">
            {footerItems?.length && footerItems.map((item, idx) => {
                const id = removeEmptySpaceAndHighCase(item)
                return <Link key={idx} smooth to={locale ? `${locale}/#${id}` : `/#${id}`} className="uppercase px-5 text-xs sm:text-sm md:text-base">{item}</Link>
            })}
            </div>
            {socialMedia?.length && <div className="flex justify-center py-5">{socialMedia.map((elm, idx) => {
                    return <a key={idx} href={elm.link} target="_blank" rel="noreferrer"><img src={elm.url} alt={elm.name} className="h-7 w-7 mx-2" /></a>
                })}</div>}
            <div className="flex items-center justify-between py-5">
                <p className="text-xs">Copyright © 2023 Anthony Guido</p>
                <a href="https://github.com/anthonyguidomadrid/portfolio" target="_blank" rel="noreferrer"  className="text-xs uppercase">Source code</a>
            </div>
        </div>
    )
}