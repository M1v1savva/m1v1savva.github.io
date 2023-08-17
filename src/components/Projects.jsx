import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {

	const redirect = (url) => {
		window.location.href = url
	}	

	const checkButton = (url) => {
		if (url !== undefined) {
			return (
				<div>
				<Button variant="primary" onClick={() => redirect(url)}>
					Go to the website
				</Button>
				<br/>
				<br/>
				</div>
			) 
		} else {
				return (
					<>
					</>
				)
		}
	}

	const getCard = (title, back_src, wi, he, txt, url, url2) => {
		return ( 
			<Card bg='Secondary' style={{ width: wi, height: he }}>
				<Card.Img variant="top" src={back_src} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>
						{txt}
					</Card.Text>
					{checkButton(url2)}
					<Button variant="primary" onClick={() => redirect(url)}>Go to github</Button>
				</Card.Body>
			</Card>
		)
	}

	return (
		<div className='projects'>
			<br/>
			<h2>Personal projects</h2>
			<br/>
			<div className='row1'>
			{getCard(
				'Simple renderer from scratch',
				'mini-renderer.png',
				'20rem', '33rem',
				'My implementations of series of articles on 3D graphics',
				'https://github.com/M1v1savva/mini-renderer'
			)}

			{getCard(
				'Chesslines',
				'chesslines.png',
				'20rem', '33rem',
				'An intuitive web app to store your chess opening repertoire. Still in development but a lot of functionality is already there',
				'https://github.com/M1v1savva/chesslines',
				'https://chesslines.onrender.com/'
			)}

		{getCard(
				'Pentomino Tetris',
				'tetris.png',
				'20rem', '33rem',
				'One of university team projects. Our group developed an aethetic pentomino tetris game and AI that plays much better than us.',
				'https://github.com/M1v1savva/tetris'
			)}

		{getCard(
				'My bachelor thesis',
				'anime.png',
				'20rem', '33rem',
				'Generation of anime faces with conditional StyleGAN model and transfer learning',
				'https://github.com/M1v1savva/anime-thesis'
			)}

			</div>
			<br/>
			<br/>
		</div>
	)
}

export default Projects