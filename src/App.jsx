import {HashRouter, Route, Routes} from "react-router-dom"
import { BrandingIndentityVisual, SocialMediaManagement } from "./pages"

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/service">
            <Route path="" element={<div>Service</div>} />
            <Route path="branding-identity-visual" element={<BrandingIndentityVisual />} />
            <Route path="social-media-management" element={<SocialMediaManagement />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
