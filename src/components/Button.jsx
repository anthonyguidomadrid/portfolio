const classNames = require('classnames')

export const Button = ({text, link, color, AdditionalClasses}) => {
    const id = text.toLowerCase().replace(/\s/g, '')
    return (
        <a href={link ?? `./#${id}`} className={classNames("inline-block text-sm px-4 py-2 leading-none border text-white border-white hover:border-transparent hover:text-black hover:bg-white", AdditionalClasses)}>{text}</a>
    )
}