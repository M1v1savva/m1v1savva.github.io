import Home from './../pages/Home'

function MobileLayout() {
	import('./../styles/mobile/Cache.css')
	import('./../styles/mobile/CPjourney.css')
	import('./../styles/mobile/Experience.css')
	import('./../styles/mobile/Projects.css')
	import('./../styles/mobile/Projects.css')
	import('./../styles/mobile/Readme.css')
	import('./../styles/mobile/Socials.css')
	import('./../styles/mobile/Stack.css')
	import('./../styles/mobile/main.css')

	return (
		<div style={{width: "95vw"}}> 
			<Home />
		</div>
	)
}

export default MobileLayout