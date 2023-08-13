import React from 'react'
import './Stack.css'

function Stack() {
	const parse_caption = (str) => {
		if (str == 'cplusplus')
			return 'c++'
		if (str == 'googlecloud')
			return 'google cloud'
		return str
	}

	const gen_icon = (insert_str) => {
		return (
			<div className='new-icon'>
				<figure>
				<img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${insert_str}/${insert_str}-original.svg`}></img>
				<figcaption>{parse_caption(insert_str)}</figcaption>
				</figure>
			</div>
		)
	}

	const gen_icon2 = (insert_str) => {
		return (
			<div className='new-icon'>
				<figure>
				<img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${insert_str}/${insert_str}-plain.svg`}></img>
				<figcaption>{parse_caption(insert_str)}</figcaption>
				</figure>
			</div>
		)
	}

	return (
		<div className='stack-component'>
			<h2>Tech Stack</h2> <br/>
			<div className='stack'>
				{gen_icon('cplusplus')} 
				{gen_icon('java')}
				{gen_icon('python')} 
				{gen_icon('html5')} 
				{gen_icon('css3')}
				{gen_icon('javascript')}
				{gen_icon('matlab')}
				{gen_icon('flask')} 
				{gen_icon('fastapi')}
				{gen_icon('mongodb')} 
				{gen_icon('react')}
				{gen_icon('googlecloud')}
				{gen_icon('react')}
				{gen_icon('pytorch')} 
				{gen_icon('tensorflow')}
				{gen_icon('numpy')} 
				{gen_icon('pandas')}
				{gen_icon('git')}
				{gen_icon2('ubuntu')}
				{gen_icon('vscode')}
				{gen_icon('jupyter')}
				{gen_icon('latex')}
			</div>
		</div>
	)
}

export default Stack