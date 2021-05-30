import { motion } from "framer-motion"
import "normalize.css"
import "../css/globals.scss"
import CustomHead from "../components/CustomHead"
import Footer from "../components/Footer"
import NavigationBar from "../components/NavigationBar"
import { HeroProvider } from "../context/HeroContext"
function MyApp({ Component, pageProps, router }) {
	return (
		<HeroProvider>
			<CustomHead />
			<NavigationBar />
			<motion.div
				key={router.route}
				initial="pageInitial"
				animate="pageAnimate"
				variants={{
					pageInitial: {
						y: 50,
					},
					pageAnimate: {
						y: 0,
					},
				}}
			>
				<Component {...pageProps} />
				<Footer />
			</motion.div>
		</HeroProvider>
	)
}

export default MyApp
