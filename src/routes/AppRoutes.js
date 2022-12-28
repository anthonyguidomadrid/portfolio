import { BrowserRouter, Routes, Route } from "react-router-dom"

export const AppRoutes = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<div className="h-screen"><a href="/projects/atida">Go to Projects</a></div>} />
          <Route path="/projects/:id" element={<h1>Projects</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
}