import React, { createContext, useState } from "react"

export const HeroContext = createContext()

export const HeroProvider = (props) => {
	const [heroVisible, setHeroVisible] = useState(false)

	return (
		<HeroContext.Provider value={{ heroVisible, setHeroVisible }}>
			{props.children}
		</HeroContext.Provider>
	)
}
