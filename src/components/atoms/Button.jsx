import { removeEmptySpaceAndHighCase } from '../../helpers/tranformString'
const classNames = require('classnames')

export const Button = ({text, link, additionalClasses, newTab, variant = 'white'}) => {
    const id = removeEmptySpaceAndHighCase(text)
    return (
        <a href={link ?? `./#${id}`} target={ newTab ? "_blank" : "_self"} className={classNames("inline-block text-sm px-4 py-2 leading-none border", {'text-white border-white hover:border-transparent hover:text-black hover:bg-white' : variant === 'white'}, {'border-black hover:bg-black hover:text-white' : variant === 'black'}, additionalClasses)} rel="noreferrer">{text}</a>
    )
}