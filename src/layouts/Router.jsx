import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { React, useState } from 'react'

import './router.css'

import Home from '../pages/Home'
import CV from '../pages/CV'

function Router() {
	return (
		<div className='router'>
			<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cv' element={<CV/>} />
      </Routes>
    	</BrowserRouter>
		</div>
	)
}

export default Router