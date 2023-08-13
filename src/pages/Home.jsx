import { React, useState, useEffect } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

import Cache from './../components/Cache'
import CPjourney from './../components/CPjourney'
import Experience from './../components/Experience'
import Projects from './../components/Projects'
import Readme from './../components/Readme'
import Socials from './../components/Socials'
import Stack from './../components/Stack'

import './darkMode.css'
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

    return (
        <div className={`${theme}`}>
          <DarkModeSwitch
            className='switch'
            style={{ marginBottom: '2rem' }}
            checked={theme == 'dark' ? true : false}
            onChange={toggleDarkMode}
          />
          <Readme />
          <Socials />
          <Stack />
          <br />
          <br />
          <Experience />
          <Projects />
          <CPjourney />
          <Cache />
        </div>
      )
}

export default Home