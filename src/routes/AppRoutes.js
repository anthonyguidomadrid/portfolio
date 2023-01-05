import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from '../components/organisms/Home'
import { ProjectPage } from '../components/organisms/ProjectPage'
import { Navigation } from '../components/molecules/Navigation'
import { Footer } from '../components/molecules/Footer'


export const AppRoutes = ({pageContent}) => {
    const footerItems = pageContent ? pageContent?.menu?.menuItems.concat([pageContent?.menu?.cta]) : []
    
    return (
    <BrowserRouter>
      <Navigation logo={pageContent?.assets?.logo} menuItems={pageContent?.menu?.menuItems} cta={pageContent?.menu?.cta}/>
      <Routes>
        <Route>
          <Route index element={<Home pageContent={pageContent}/>} />
          <Route path="/projects/:id" element={<ProjectPage projectsContent={pageContent?.project?.projects} />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
      <Footer logo={pageContent?.assets?.logo} footerItems={footerItems} socialMedia={pageContent?.assets?.socialMedia}/>
    </BrowserRouter>
    )
}