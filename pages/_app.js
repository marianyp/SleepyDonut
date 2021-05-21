import "normalize.css"
import "../assets/css/globals.scss"
import NavigationBar from "../components/NavigationBar"
function MyApp({ Component, pageProps }) {
	return (
		<>
			<NavigationBar />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
