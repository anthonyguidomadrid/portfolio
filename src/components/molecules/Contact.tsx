import {
  useState,
  useMemo,
  useCallback,
  FunctionComponent,
  FormEvent
} from 'react'
import { ReactComponent as Phone } from '../../assets/Phone.svg'
import { ReactComponent as Email } from '../../assets/Email.svg'
import classNames from 'classnames'
import { send } from 'emailjs-com'
import { getTranslationFromString } from '../../helpers/getTranslationFromString'
import { NormalizedContact, Translation } from '~types/normalizedContentTypes'

export type ContactProps = {
  contactContent: NormalizedContact
  translations: Translation[]
}

export const Contact: FunctionComponent<ContactProps> = ({
  contactContent,
  translations
}) => {
  const { id, title, subtitle, description, email, phone } = contactContent
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isFormSuccessfullySubmitted, setFormSuccessfullySubmitted] =
    useState('')
  const [isFormLoading, setIsFormLoading] = useState(false)
  const isFormFullyFilled = useMemo(() => {
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      return true
    } else {
      return false
    }
  }, [formData])

  const handleFormSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsFormLoading(true)
      await send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID ?? '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? '',
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      ).then(
        () => {
          setFormSuccessfullySubmitted('success')
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          })
          setIsFormLoading(false)
        },
        () => {
          setFormSuccessfullySubmitted('failure')
          setIsFormLoading(false)
        }
      )
    },
    [formData]
  )

  return (
    <section className="md:flex" id={id}>
      <div className="md:w-1/2 pt-10 px-10 md:pb-10 flex justify-center flex-col order-2 lg:mx-24">
        <h2 className="uppercase font-bold text-xl">{title}</h2>
        <p className="font-mono text-3xl text-gray-500 my-5 lg:pb-5">
          {subtitle}
        </p>
        <div
          className="pb-10"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {email && (
          <div className="flex font-medium pb-4 text-gray-800">
            <Email className="w-6 h-6 mr-3" />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        )}
        {phone && (
          <div className="flex font-medium text-gray-800">
            <Phone className="w-6 h-6 mr-3" />
            <a href={`tel:${phone.replace('+', '00').replace(/ /g, '')}`}>
              {phone}
            </a>
          </div>
        )}
      </div>
      <div className="md:w-1/2 order-1">
        <p
          className={classNames(
            'mx-10 p-5 md:my-5 font-bold text-sm text-center transition-all duration-500',
            { 'h-0 opacity-0': isFormSuccessfullySubmitted === '' },
            {
              'bg-emerald-100 mb-5 mt-10':
                isFormSuccessfullySubmitted === 'success'
            },
            {
              'bg-rose-100 mb-5 mt-10':
                isFormSuccessfullySubmitted === 'failure'
            }
          )}
        >
          {isFormSuccessfullySubmitted === 'success'
            ? getTranslationFromString(
                'home.contact.form-success',
                translations
              )
            : getTranslationFromString('home.contact.form-error', translations)}
        </p>
        <form
          className="flex flex-col px-10 pb-10 xl:mx-20 text-sm"
          onSubmit={e => handleFormSubmit(e)}
        >
          <label>
            <input
              type="text"
              placeholder={getTranslationFromString(
                'home.contact.form.name',
                translations
              )}
              className="w-full border-b border-gray-500 h-10"
              value={formData.name}
              onChange={e =>
                setFormData({ ...formData, name: e?.target?.value })
              }
            />
          </label>
          <label>
            <input
              type="email"
              placeholder={getTranslationFromString(
                'home.contact.form.email',
                translations
              )}
              className="w-full border-b border-gray-500 h-10"
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e?.target?.value })
              }
              disabled={isFormLoading}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder={getTranslationFromString(
                'home.contact.form.subject',
                translations
              )}
              className="w-full border-b border-gray-500 h-10"
              value={formData.subject}
              onChange={e =>
                setFormData({ ...formData, subject: e?.target?.value })
              }
              disabled={isFormLoading}
            />
          </label>
          <label>
            <textarea
              placeholder={getTranslationFromString(
                'home.contact.form.message',
                translations
              )}
              className="w-full border-b border-gray-500 align-top h-36 pt-2"
              value={formData.message}
              onChange={e =>
                setFormData({ ...formData, message: e?.target?.value })
              }
              disabled={isFormLoading}
            />
          </label>
          <input
            type="submit"
            value={getTranslationFromString(
              'home.contact.form.submit',
              translations
            )}
            className={classNames(
              'px-4 py-2 leading-none uppercase my-5 border',
              {
                'text-gray-700 border-gray-700 hover:bg-gray-800 hover:text-white':
                  isFormFullyFilled
              },
              {
                'text-gray-400 border-gray-400':
                  !isFormFullyFilled || isFormLoading
              }
            )}
            disabled={!isFormFullyFilled || isFormLoading}
          />
        </form>
      </div>
    </section>
  )
}
