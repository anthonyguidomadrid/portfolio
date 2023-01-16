import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from '../components/organisms/Home'
import { ProjectPage } from '../components/organisms/ProjectPage'
import { NotFound } from '../components/organisms/NotFound'
import { Navigation } from '../components/molecules/Navigation'
import { Footer } from '../components/molecules/Footer'


export const AppRoutes = ({pageContent}) => {
    const footerItems = pageContent ? pageContent?.menu?.menuItems.concat([pageContent?.menu?.cta]) : []    
    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation logo={pageContent?.assets?.logo} menuItems={pageContent?.menu?.menuItems} cta={pageContent?.menu?.cta}/>
      <Routes>
          <Route exact path="/" element=<Home pageContent={pageContent}/>/>
          <Route exact path="/projects/:id" element=<ProjectPage projectsContent={pageContent?.project?.projects} /> />
          <Route path="*" element={<NotFound headerContent={pageContent?.headers}/>} />
      </Routes>
      <Footer logo={pageContent?.assets?.logo} footerItems={footerItems} socialMedia={pageContent?.assets?.socialMedia}/>
    </BrowserRouter>
    )
}