import { removeEmptySpaceAndHighCase } from '../../helpers/tranformString'
import { ReactComponent as Phone } from '../../assets/Phone.svg'
import { ReactComponent as Email } from '../../assets/Email.svg'

export const Contact = ({contactContent}) => {
    const { title, subtitle, description, email, phone } = contactContent
    const id = removeEmptySpaceAndHighCase(title)

    return (
        <section className="md:flex" id={id}>
            <div className="md:w-1/2 p-10 flex justify-center flex-col order-2">
                <h2 className="uppercase font-bold text-xl">{title}</h2>
                <p className='font-mono text-4xl text-gray-500 my-5 lg:pb-5'>{subtitle}</p>
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
            <form>
                <label>Name
                    <input
                    type="text" 
                    onChange={(e) => console.log(e)}
                    />
                </label>
                <label>Email
                    <input
                    type="email" 
                    onChange={(e) => console.log(e)}
                    />
                </label>
                <label>Subject
                    <input
                    type="text" 
                    onChange={(e) => console.log(e)}
                    />
                </label>
                <label>Message
                    <input
                    type="text" 
                    onChange={(e) => console.log(e)}
                    />
                </label>
                <input type="submit" />
            </form>
            </div>
        </section>
    )
}