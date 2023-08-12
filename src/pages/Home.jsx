import { React, useState, useEffect } from 'react'
import './Home.css'
import './style.css'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import './../darkMode.css'

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
      if (theme == 'dark') 
        return (
          <div className='box-dark readme'>
              <p>README</p>
              <h2 id="hi-there-">Hi there! 👋</h2>
              <p>I'm Ivan Poliakov, friends <a className='a-dark' href="https://en.wikipedia.org/wiki/Eastern_Slavic_naming_customs#Diminutive_forms">call</a> me Vanya <a className='a-dark' href="https://www.youtube.com/watch?v=FuaHiDwSc5o">(/ˈvɑ̟nʲæ/)</a>. <br/>
              I'm a software developer and machine learning engineer from Moscow, Russia. <br/> 
              I've lived in Maastricht, Netherlands since summer 2019. <br/>
              Recent graduate. <br/>
              Open to work in EU.
              </p>
            </div>
        )
      else 
        return (
          <div className='box-light readme'>
              <p>README</p>
              <h2 id="hi-there-">Hi there! 👋</h2>
              <p>I'm Ivan Poliakov, friends <a className='a-light'href="https://en.wikipedia.org/wiki/Eastern_Slavic_naming_customs#Diminutive_forms">call</a> me Vanya <a className='a-light' href="https://www.youtube.com/watch?v=FuaHiDwSc5o">(/ˈvɑ̟nʲæ/)</a>. <br/>
              I'm a software developer and machine learning engineer from Moscow, Russia. <br/> 
              I've lived in Maastricht, Netherlands since summer 2019. <br/>
              Recent graduate. <br/>
              Open to work in EU.
              </p>
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
            size={60}
          />
          <p className='switch-caption'>
            Click here to switch to { theme == 'dark' ? 'light' : 'dark' } theme
          </p>
          {getReadme()}
        </div>
      )
}

export default Home