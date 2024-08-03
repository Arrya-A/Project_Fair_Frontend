
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Project from './pages/Project'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'
import PagenotFound from './pages/PagenotFound'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/register' element={<Auth register/>} />
        <Route path='/login' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<PagenotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
