import "normalize.css"
import "../assets/css/globals.scss"
import NavigationBar from "../components/NavigationBar"
import { HeroProvider } from "../context/HeroContext"
function MyApp({ Component, pageProps }) {
	return (
		<>
			<HeroProvider>
				<NavigationBar />
				<Component {...pageProps} />
			</HeroProvider>
		</>
	)
}

export default MyApp
