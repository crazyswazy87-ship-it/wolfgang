import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Catalogue from './pages/Catalogue'
import RefundPolicy from './components/shared/RefundPolicy'
import TermsAndConditions from './components/shared/TermsAndConditions'
import { ToastContainer } from 'react-toastify'
import HomePage from './pages/HomePage'
import PostForm from './pages/PostForm'
import About from './pages/About'


function App() {
  return (
    <>
    <ToastContainer />
    
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/wolfgng" element={<Home />} />
      <Route path="/post" element={<PostForm />} />
      <Route path="/andime" element={<Admin />} />
      <Route path="/about" element={<About />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/refund" element={<RefundPolicy />} />
      <Route path="/terms" element={<TermsAndConditions />} /> 
    </Routes>
    </>
  )
}

export default App