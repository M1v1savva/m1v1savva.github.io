import React from 'react'
import './Readme.css'

function Readme() {
	return (
		<div className={`readme box`}>
				<p>README</p>
				<h2>Hi there! 👋</h2>
				<p>I'm Ivan Poliakov, friends <a 
					href="https://en.wikipedia.org/wiki/Eastern_Slavic_naming_customs#Diminutive_forms"
					>call</a> me Vanya <a 
					href="https://www.youtube.com/watch?v=FuaHiDwSc5o">(/ˈvɑ̟nʲæ/)</a>. <br/>
				I'm a software developer and machine learning engineer from Moscow, Russia. <br/> 
				I've lived in Maastricht, Netherlands since summer 2019. <br/>
				Recent graduate. <br/></p>
				<p>I'm passionate about full stack web development, optimization problems and AI.</p>
				<p className='open-to-work'>Open to work in EU.</p>
			</div>
	)
}

export default Readme