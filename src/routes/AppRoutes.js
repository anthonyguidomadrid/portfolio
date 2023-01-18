import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from '../components/organisms/Home'
import { ProjectPage } from '../components/organisms/ProjectPage'
import { NotFound } from '../components/organisms/NotFound'
import { Navigation } from '../components/molecules/Navigation'
import { Footer } from '../components/molecules/Footer'


export const AppRoutes = ({pageContent, setLocale, locale}) => {
    const footerItems = pageContent ? pageContent?.menu?.menuItems.concat([pageContent?.menu?.cta]) : []    
    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation logo={pageContent?.assets?.logo} menuItems={pageContent?.menu?.menuItems} cta={pageContent?.menu?.cta} locale={locale}/>
      <Routes>
          <Route exact path="/" element=<Home pageContent={pageContent} setLocale={setLocale} locale={locale}/>/>
          <Route exact path="/:locale" element=<Home pageContent={pageContent} setLocale={setLocale} locale={locale}/>/>
          <Route exact path="/projects/:id" element=<ProjectPage projectsContent={pageContent?.project?.projects} setLocale={setLocale} translations={pageContent?.translations}/> />
          <Route exact path="/:locale/projects/:id" element=<ProjectPage projectsContent={pageContent?.project?.projects} setLocale={setLocale} translations={pageContent?.translations}/> />
          <Route path='/404' element={<NotFound headerContent={pageContent?.headers} setLocale={setLocale}/>} />
          <Route path='*' element={<Navigate replace to='/404'/>} />
      </Routes>
      <Footer logo={pageContent?.assets?.logo} footerItems={footerItems} socialMedia={pageContent?.assets?.socialMedia} locale={locale}/>
    </BrowserRouter>
    )
}