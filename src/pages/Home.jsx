import { React, useState, useEffect } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { SocialIcon } from 'react-social-icons';
import Collapsible from 'react-collapsible'
import './../darkMode.css'
import './Home.css'

function Home() {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    )
    
    const toggleDarkMode = () => {
        setTheme((theme == 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme
    }, [theme])

    const getReadme = () => {
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
            <p className='open-to-work'>Open to work in EU.</p>
          </div>
      )
    }

    const getSocials = () => {
      return (
        <div className='socials-container'>
          <h1>Socials</h1>
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

    const getStack = () => {
      return (
        <div className='stack-component'>
          <h1>Tech Stack</h1> <br/>
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

    const getExperience = () => {
      return (
        <div>
          <h2>Education</h2>
          <h2>Industry</h2>
        </div>
      )
    }

    const getProjects = () => {
      return (
        <div>
          <h2>Personal projects</h2>
          <h3>this website</h3>
          <h3>chesslines</h3>
          <h3>mini-renderer</h3>
          <h2>Team projects</h2>
        </div>
      )
    }

    const getCompetitiveProgramming = () => {
      return (
        <div>
          <h2>codeforces</h2>
        </div>
      )
    }

    const getGibberish = () => {
      return (
        <div>
          <h1>My O(1) L1 cash</h1>
        </div>
      )
    }

    return (
        <div className={`${theme}`}>
          <DarkModeSwitch
            className='switch'
            style={{ marginBottom: '2rem' }}
            checked={theme == 'dark' ? true : false}
            onChange={toggleDarkMode}
          />
          {getReadme()}
          {getSocials()}
          {getStack()}

          <br />
          <br />

          {/* {getExperience()}
          {getProjects()}
          {getCompetitiveProgramming()}
          {getGibberish()} */}
        </div>
      )
}

export default Home