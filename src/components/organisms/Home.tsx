import { useParams } from 'react-router-dom'
import { Dispatch, FunctionComponent, SetStateAction, useEffect } from 'react'
import { Header } from '../molecules/Header'
import { About } from '../molecules/About'
import { ProjectSlider } from '../molecules/ProjectSlider'
import { Stack } from '../molecules/Stack'
import { Contact } from '../molecules/Contact'
import { PageContent } from '~types/normalizedContentTypes'
import ReactGA from 'react-ga4'

export type HomeProps = {
  pageContent: PageContent
  setLocale: Dispatch<SetStateAction<string | undefined>>
}

export const Home: FunctionComponent<HomeProps> = ({
  pageContent,
  setLocale
}) => {
  const { locale } = useParams()
  useEffect(() => {
    setLocale(locale)
  }, [locale, setLocale])

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/' })
  }, [])

  return (
    <>
      <Header
        headerContent={
          pageContent?.headers &&
          pageContent?.headers.find(header => header.type === 'home')
        }
        locale={locale}
      />
      {pageContent?.about && (
        <About aboutContent={pageContent?.about} locale={locale} />
      )}
      {pageContent?.project && (
        <ProjectSlider projectContent={pageContent?.project} />
      )}
      {pageContent?.stack && <Stack stackContent={pageContent?.stack} />}
      {pageContent?.contact && (
        <Contact
          contactContent={pageContent?.contact}
          translations={pageContent?.translations}
        />
      )}
    </>
  )
}
