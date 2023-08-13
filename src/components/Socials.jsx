import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Collapsible from 'react-collapsible'
import './Socials.css'

function Socials() {
	return (
		<div className='socials-container'>
			<h2>Socials</h2>
			<div className='icons'>
				<div className='icon'>
					<SocialIcon url='https://www.linkedin.com/in/m1v1savva' />
					<p>LinkedIn</p>
				</div>

				<div className='icon'>
					<SocialIcon className='github-icon' url='https://github.com/M1v1savva' />
					<p>GitHub</p>
				</div>

				<div className='icon'>
					<SocialIcon url='mailto:ivan.polyakov.01@gmail.com' />
					<p>Email</p>
				</div>

				<div className='icon'>
					<SocialIcon url='https://t.me/M1v1savva1601' />
					<p>Telegram</p>
				</div>

				<div className='icon'>
					<SocialIcon url='https://api.whatsapp.com/qr/ARG2TSUIWOXOA1' />
					<p>WhatsApp</p>
				</div>
			</div>

			<Collapsible className='qr-box' trigger='Scan WhatsApp QR code to message instantly'>
				<br/>
				<img src='qr.jpg' />
			</Collapsible>

			<br/>
		</div>
	)
}

export default Socials