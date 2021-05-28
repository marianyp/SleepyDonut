import { useEffect, useRef, useState } from "react"
import styled, { isStyledComponent } from "styled-components"
import HomeGame from "./HomeGame"
import Wrapper from "./styled/Wrapper"

export default function HomeGames() {
	const [gameCount, setGameCount] = useState()
	const gamesContainerRef = useRef()

	useEffect(() => {
		setGameCount(gamesContainerRef.current.childElementCount)
	}, [])

	return (
		<StyledWrapper>
			<GamesContainer ref={gamesContainerRef} gameCount={gameCount}>
				<HomeGame
					name="Mace Madness"
					img="/img/thumbnail-mace-madness.png"
					platform="itch"
				/>
				<HomeGame
					name="Outlaws"
					img="/img/thumbnail-outlaws.png"
					platform="itch"
				/>
				{/* <HomeGame name="Some New Game" platform="itch" />
				<HomeGame name="Some New Game 2" platform="itch" />
				<HomeGame name="Some New Game 3" platform="itch" />
				<HomeGame name="Some New Game 4" platform="itch" />
				<HomeGame name="Some New Game 5" platform="itch" />
				<HomeGame name="Some New Game 6" platform="itch" />
				<HomeGame name="Some New Game 7" platform="itch" /> */}

			</GamesContainer>
		</StyledWrapper>
	)
}

const StyledWrapper = styled(Wrapper)`
	padding-top: 10vh;
	padding-bottom: 10vh;
`

const GamesContainer = styled.div`
	margin: 0 auto;

	max-width: 700px;
	@media (min-width: 900px) {
		display: grid;
		grid-gap: 4px;
		grid-template-columns: ${props => props.gameCount <= 2 ? 'repeat(2, minmax(140px, 1fr))' : 'repeat(3, minmax(140px, 1fr))'};

		max-width: ${props => props.gameCount <= 2 ? '70%' : 'none'};
	}
`
