import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from '../components/organisms/Home'
import { ProjectPage } from '../components/organisms/ProjectPage'
import { NotFound } from '../components/organisms/NotFound'
import { Navigation } from '../components/molecules/Navigation'
import { Footer } from '../components/molecules/Footer'
import { Seo } from '../components/atoms/Seo'


export const AppRoutes = ({pageContent, setLocale, locale}) => {
    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Seo seoPageContent={pageContent?.seo}/>
      <Navigation logo={pageContent?.assets?.logo} menuItems={pageContent?.menuItems} locale={locale} projectsContent={pageContent?.project?.projects}/>
      <Routes>
          <Route exact path="/" element=<Home pageContent={pageContent} setLocale={setLocale} locale={locale}/>/>
          <Route exact path="/:locale" element=<Home pageContent={pageContent} setLocale={setLocale} locale={locale}/>/>
          <Route exact path="/projects/:id" element=<ProjectPage projectsContent={pageContent?.project?.projects} setLocale={setLocale} translations={pageContent?.translations} menuItems={pageContent?.menuItems}/> />
          <Route exact path="/:locale/projects/:id" element=<ProjectPage projectsContent={pageContent?.project?.projects} setLocale={setLocale} translations={pageContent?.translations} menuItems={pageContent?.menuItems}/> />
          <Route path='/404' element={<NotFound headerContent={pageContent?.headers} setLocale={setLocale}/>} />
          <Route path='*' element={<Navigate replace to='/404'/>} />
      </Routes>
      <Footer logo={pageContent?.assets?.logo} footerItems={pageContent?.menuItems} socialMedia={pageContent?.assets?.socialMedia} locale={locale}/>
    </BrowserRouter>
    )
}