import { useContext, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { HeroContext } from "../context/HeroContext"

const useHero = () => {
	const { setHeroVisible } = useContext(HeroContext)

	const [heroObserverRef, heroInView, heroEntry] = useInView({
		threshold: 0.4,
	})

	useEffect(() => {
		setHeroVisible(heroInView)
	}, [heroInView])

	return heroObserverRef
}

export default useHero
