import MobileLayout from './../layouts/MobileLayout'
import AlbumLayout from './../layouts/AlbumLayout'
import { React, useState } from 'react'

function Layout() {
	const [width, _] = useState(window.innerWidth)
  const [height, __] = useState(window.innerHeight)

  const [onMobile, ___] = useState(window.innerHeight > window.innerWidth)

	if (onMobile == true) {
    return (
      <MobileLayout />
    )
  } else {
    return (
      <AlbumLayout />
    )
  }
}

export default Layout