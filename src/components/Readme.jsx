import React from 'react'
import Button from 'react-bootstrap/Button'
import { SocialIcon } from 'react-social-icons'
import { useNavigate } from 'react-router-dom'

function Readme() {
	const navigate = useNavigate()

	return (
		<div className='section'>
		<div className='readme'>
			<div className='text-readme'>
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
			<div className='github-link'>
				<SocialIcon className='github-icon' url={'https://github.com/M1v1savva'} />
				<br/>
				<Button size="lg" variant="pink" onClick={() => {window.location.href = 'https://github.com/M1v1savva'}}>To github</Button>
				<br/>
				<Button size="lg" variant="pink" onClick={() => {navigate ('/cv')}}>To my CV</Button>
			</div>
		</div>
		</div>
	)
}

export default Readme