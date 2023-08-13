import React from 'react'
import './Experience.css'

function Experience() {
	return (
		<div className='experience'>
			<div className='top'>
			<h2>Education</h2>
			</div>
			<h5>Maastricht University</h5>
			<p>Bachelor of Science in Data Science and Artificial Intelligence
			<br/>September 2019 - December 2022</p>
			<ul>
				<li><b>Bachelor's thesis:</b> Trained a <b>StyleGAN</b> model for generating 
				anime faces with just a google cloud sign-up credit bonus.</li>
			</ul>
			<div className='top'>
			<h2>Work Experience</h2>
			</div>
			<h5>Garant</h5>
			<p>Natural Language Processing engineer
			<br/>August 2021 - December 2021</p>
			<ul>
				<li>Worked on building a search model for a FAQ database 
					using encoding models and word statistics</li>
			</ul>
		</div>
	)
}

export default Experience