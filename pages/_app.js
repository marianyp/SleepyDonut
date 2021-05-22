import "normalize.css"
import "../assets/css/globals.scss"
import Footer from "../components/Footer"
import NavigationBar from "../components/NavigationBar"
import { HeroProvider } from "../context/HeroContext"
function MyApp({ Component, pageProps }) {
	return (
		<>
			<HeroProvider>
				<NavigationBar />
				<Component {...pageProps} />
				<Footer />
			</HeroProvider>
		</>
	)
}

export default MyApp
