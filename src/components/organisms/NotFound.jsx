import { useParams } from 'react-router-dom'
import { Header } from '../molecules/Header'
import { useEffect } from 'react'

export const NotFound = ({headerContent, setLocale}) => {
    const { locale } = useParams()
    useEffect(() => {
        setLocale(locale)
    }, [locale, setLocale])

    return (
        <Header headerContent={headerContent.find(header => header.type === 'notFound')}/>
    )
}