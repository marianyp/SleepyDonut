import styled from "styled-components"
import HomeGame from "./HomeGame"
import Wrapper from "./styled/Wrapper"

export default function HomeGames() {
	return (
		<Wrapper>
			<GamesContainer>
				<HomeGame name="Mace Madness" img="./img/thumbnail-mace-madness.png" platform="itch" />
				<HomeGame name="Outlaws" img="./img/thumbnail-outlaws.png" platform="itch" />
				<HomeGame name="Some New Game" platform="itch" />
			</GamesContainer>
		</Wrapper>
	)
}

const GamesContainer = styled.div``
