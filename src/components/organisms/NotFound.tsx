import { useParams } from 'react-router-dom'
import { Header } from '../molecules/Header'
import { Dispatch, FunctionComponent, SetStateAction, useEffect } from 'react'
import { NormalizedHeader } from '~types/normalizedContentTypes'

export type NotFoundProps = {
  headerContent: NormalizedHeader[] | undefined
  setLocale: Dispatch<SetStateAction<string | undefined>>
}

export const NotFound: FunctionComponent<NotFoundProps> = ({
  headerContent,
  setLocale
}) => {
  const { locale } = useParams()
  useEffect(() => {
    setLocale(locale)
  }, [locale, setLocale])

  return (
    <Header
      headerContent={
        headerContent &&
        headerContent.find(header => header.type === 'notFound')
      }
      locale={locale}
    />
  )
}
