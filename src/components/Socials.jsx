import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Collapsible from 'react-collapsible'

function Socials() {
	const getIcon = (item) => {	
		return (
			<div className='icon'>
				<SocialIcon url={item.url} />
				<p>{item.label}</p>
			</div>
		)
	}

	const socials = [
		{label: 'LinkedIn', url: 'https://www.linkedin.com/in/m1v1savva'},
		{label: 'GitHub', url: 'https://github.com/M1v1savva'},
		{label: 'Email', url: 'mailto:ivan.polyakov.01@gmail.com'},
		{label: 'Telegram', url: 'https://t.me/M1v1savva1601'},
		{label: 'WhatsApp', url: 'https://api.whatsapp.com/qr/ARG2TSUIWOXOA1'}
	]

	return (
		<div className='section'>
		<div className='socials-container'>
			<h2>Socials</h2>
			<div className='icons'>
				{socials.map((item) => (getIcon(item)))}
			</div>

			<Collapsible className='box qr' trigger='Click to instantly scan WhatsApp QR code'>
				<br/>
				<img src='qr.jpg' />
			</Collapsible>

			<br/>
		</div>
		</div>
	)
}

export default Socials