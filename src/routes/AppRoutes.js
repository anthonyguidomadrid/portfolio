import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from '../components/Home'

export const AppRoutes = ({pageContent}) => {
    return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home pageContent={pageContent}/>} />
          <Route path="/projects/:id" element={<h1>Projects</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
}