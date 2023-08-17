import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { React } from 'react'

import Home from '../pages/Home'
import CV from '../pages/CV'

function Router() {
	return (
		<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='cv' element={<CV/>} />/
      </Routes>
    </BrowserRouter>
	)
}

export default Router