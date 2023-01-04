import { useState, useMemo, useCallback } from 'react'
import { removeEmptySpaceAndHighCase } from '../../helpers/tranformString'
import { ReactComponent as Phone } from '../../assets/Phone.svg'
import { ReactComponent as Email } from '../../assets/Email.svg'
import classNames from 'classnames'
import emailjs from 'emailjs-com'

export const Contact = ({contactContent}) => {
    const { title, subtitle, description, email, phone } = contactContent
    const id = removeEmptySpaceAndHighCase(title)
    const [ formData, setFormData ] = useState({
            name: '',
            email: '',
            subject: '',
            message: ''
    })
    const [isFormSuccessfullySubmitted, setFormSuccessfullySubmitted] = useState(undefined)
    const isFormFullyFilled = useMemo(() => {
        if (formData.name && formData.email && formData.subject && formData.message) {
            return true
        } else {
            return false
        }
    }, [formData])

    const handleFormSubmit = useCallback(async (e) => {
        e.preventDefault()
        await emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formData, process.env.REACT_APP_EMAILJS_USER_ID)
        .then(() => {
            setFormSuccessfullySubmitted(true)
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }, () => {
            setFormSuccessfullySubmitted(false)
        })
    }, [formData])

    return (
        <section className="md:flex" id={id}>
            <div className="md:w-1/2 p-10 flex justify-center flex-col order-2 lg:mx-24">
                <h2 className="uppercase font-bold text-xl">{title}</h2>
                <p className='font-mono text-3xl text-gray-500 my-5 lg:pb-5'>{subtitle}</p>
                <div className='pb-10' dangerouslySetInnerHTML={{ __html: description }} />
                {email && <div className='flex font-medium pb-4 text-gray-800'>
                    <Email className="w-6 h-6 mr-3"/>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>}
                {phone && <div className='flex font-medium text-gray-800'>
                    <Phone className="w-6 h-6 mr-3"/>
                    <a href={`tel:${phone.replace('+', '00').replace(/ /g,'')}`}>{phone}</a>
                </div>}
            </div>
            <div className="md:w-1/2 order-1">
            <p className={classNames('mx-10 p-5 md:my-5 font-bold text-sm text-center transition-all duration-500', {'h-0 opacity-0' : isFormSuccessfullySubmitted === undefined}, {'bg-emerald-100' : isFormSuccessfullySubmitted}, {'bg-rose-100' : isFormSuccessfullySubmitted === false})}>
                {isFormSuccessfullySubmitted ? 'Your message has been successfully sent! We will reply you as soon as possible. Thank you for your enquiry!' : 'There was an error sending your message, please try again.'}
            </p>
            <form className="flex flex-col p-10 xl:mx-20 text-sm" onSubmit={(e) => handleFormSubmit(e)}>
                <label>
                    <input
                    type="text" 
                    placeholder='Name'
                    className='w-full border-b border-gray-500 h-10'
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e?.target?.value})}
                    />
                </label>
                <label>
                    <input
                    type="email" 
                    placeholder='Email'
                    className='w-full border-b border-gray-500 h-10'
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e?.target?.value})}
                    />
                </label>
                <label>
                    <input
                    type="text" 
                    placeholder='Subject'
                    className='w-full border-b border-gray-500 h-10'
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e?.target?.value})}
                    />
                </label>
                <label>
                    <textarea
                    type="text" 
                    placeholder='Message'
                    className='w-full border-b border-gray-500 align-top h-36 pt-2'
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e?.target?.value})} 
                    />
                </label>
                <input 
                    type="submit" 
                    className={classNames('px-4 py-2 leading-none uppercase my-5 border', {'text-gray-700 border-gray-700 hover:bg-gray-800 hover:text-white' : isFormFullyFilled}, {'text-gray-400 border-gray-400' : !isFormFullyFilled})}
                    disabled={!isFormFullyFilled}
                />
            </form>
            </div>
        </section>
    )
}