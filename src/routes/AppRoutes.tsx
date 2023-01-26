import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../components/organisms/Home'
import { ProjectPage } from '../components/organisms/ProjectPage'
import { NotFound } from '../components/organisms/NotFound'
import { Navigation } from '../components/molecules/Navigation'
import { Footer } from '../components/molecules/Footer'
import { Seo } from '../components/atoms/Seo'
import { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { PageContent } from '~types/normalizedContentTypes'

export type AppRoutesProps = {
  pageContent: PageContent
  setLocale: Dispatch<SetStateAction<string | undefined>>
  locale: string | undefined
}

export const AppRoutes: FunctionComponent<AppRoutesProps> = ({
  pageContent,
  setLocale,
  locale
}) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {pageContent?.seo && <Seo seoPageContent={pageContent?.seo} />}
      <Navigation
        logo={pageContent?.assets?.logo}
        menuItems={pageContent?.menuItems}
        locale={locale}
        projectsContent={pageContent?.project?.projects}
      />
      <Routes>
        <Route
          path="/"
          element={<Home pageContent={pageContent} setLocale={setLocale} />}
        />
        <Route
          path="/:locale"
          element={<Home pageContent={pageContent} setLocale={setLocale} />}
        />
        <Route
          path="/projects/:id"
          element={
            <ProjectPage
              projectsContent={pageContent?.project?.projects}
              setLocale={setLocale}
              translations={pageContent?.translations}
              menuItems={pageContent?.menuItems}
            />
          }
        />
        <Route
          path="/:locale/projects/:id"
          element={
            <ProjectPage
              projectsContent={pageContent?.project?.projects}
              setLocale={setLocale}
              translations={pageContent?.translations}
              menuItems={pageContent?.menuItems}
            />
          }
        />
        <Route
          path="/404"
          element={
            <NotFound
              headerContent={pageContent?.headers}
              setLocale={setLocale}
            />
          }
        />
        <Route
          path=":locale/404"
          element={
            <NotFound
              headerContent={pageContent?.headers}
              setLocale={setLocale}
            />
          }
        />
        <Route
          path="*"
          element={<Navigate replace to={locale ? `/${locale}/404` : '/404'} />}
        />
      </Routes>
      <Footer
        logo={pageContent?.assets?.logo}
        footerItems={pageContent?.menuItems}
        socialMedia={pageContent?.assets?.socialMedia}
        locale={locale}
      />
    </BrowserRouter>
  )
}
