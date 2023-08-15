import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects.css'

import { useNavigate } from "react-router-dom";

function Projects() {
	const navigate = useNavigate()

	const final_url = () => {
			return <p>kek</p>
	}

	return (
		<div className='projects'>
			<br/>
			<div className='top'>
				<h2>Personal projects</h2>
			</div>
			<p>start url: {window.location.search}</p>
			<p>final url: {final_url()}</p>
			<br/>
			<div className='row1'>
			<Card bg='Secondary' style={{ width: '12rem', height: '22rem' }}>
				<Card.Img variant="top" src="mini-renderer.png" />
				<Card.Body>
					<Card.Title>Simple renderer from scratch</Card.Title>
					<Card.Text>
						3d graphics
					</Card.Text>
					<Button onClick={() => {navigate('/cv')}}>See cv</Button>
					{/*<Button onClick={() => {window.location.href = 'https://github.com/M1v1savva/mini-renderer'}} variant="primary">Go to github</Button> */}
				</Card.Body>
			</Card>

			<Card bg='Secondary'style={{ width: '12rem', height: '26rem' }}>
				<Card.Img variant="top" src="chesslines.png" />
				<Card.Body>
					<Card.Title>Chesslines</Card.Title>
					<Card.Text>
						Intuitive app to store your chess opening repertoire. <i>Still in development</i>
					</Card.Text>
					<Button onClick={() => {window.location.href = 'https://chesslines.onrender.com/'}} variant="primary">Go to the website</Button>
					<br/>
					<br/>
					<Button onClick={() => {window.location.href = 'https://github.com/M1v1savva/chesslines'}} variant="primary">Go to github</Button>
				</Card.Body>
			</Card>
			</div>
			<br/>
			<br/>

			<div className='top'>
				<h2>Team projects</h2>
			</div>
		</div>
	)
}

export default Projects