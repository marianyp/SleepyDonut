import { useContext, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { HeroContext } from "../context/HeroContext"

const useHero = () => {
	const { setHeroVisible } = useContext(HeroContext)

	const initial = useRef(true)

	const [heroObserverRef, heroInView, heroEntry] = useInView({
		threshold: 0.4,
	})

	useEffect(() => {
		if(initial.current) {
			setHeroVisible(true)
			initial.current = false
		} else {
			setHeroVisible(heroInView)
		}
	}, [heroInView])

	return heroObserverRef
}

export default useHero
