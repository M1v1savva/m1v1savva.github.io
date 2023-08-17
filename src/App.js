import { React } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import CV from './pages/CV'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
		<BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='cv' element={<CV/>} />/
      </Routes>
    </BrowserRouter>
	) 
}

export default App
