import { React, useState } from 'react'
import MobileLayout from './layouts/MobileLayout'
import PClayout from './layouts/PClayout'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const [onMobile, setOnMobile] = useState(window.innerHeight > window.innerWidth)

  if (onMobile == true) {
    return (
      <MobileLayout />
    )
  } else {
    return (
      <PClayout />
    )
  } 
}

export default App
