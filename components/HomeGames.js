import styled, { isStyledComponent } from "styled-components"
import HomeGame from "./HomeGame"
import Wrapper from "./styled/Wrapper"

export default function HomeGames() {
	return (
		<Wrapper>
			<GamesContainer>
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
				<HomeGame name="Some New Game" platform="itch" />
				<HomeGame name="Some New Game 2" platform="itch" />
				{/* <HomeGame name="Some New Game 3" platform="itch" /> */}
				{/* <HomeGame name="Some New Game 4" platform="itch" /> */}
				{/* <HomeGame name="Some New Game 5" platform="itch" /> */}
				{/* <HomeGame name="Some New Game 6" platform="itch" /> */}
				{/* <HomeGame name="Some New Game 7" platform="itch" /> */}

			</GamesContainer>
		</Wrapper>
	)
}


const GamesContainer = styled.div`
	margin: 0 auto;

	max-width: 700px;
	@media (min-width: 900px) {
		display: grid;
		grid-gap: 4px;
		grid-template-columns: repeat(3, minmax(140px, 1fr));

		max-width: none;
	}
`
