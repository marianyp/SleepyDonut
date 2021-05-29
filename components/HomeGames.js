import { useEffect, useRef, useState } from "react"
import styled, { isStyledComponent } from "styled-components"
import makeRealURI from "../helpers/makeRealURI"
import HomeGame from "./HomeGame"
import Wrapper from "./styled/Wrapper"

export default function HomeGames({ data }) {
	const { gamesData } = data

	return (
		<StyledWrapper>
			<GamesContainer gameCount={gamesData?.length}>
				{gamesData?.map((game, index) => (
					<HomeGame
						name={game["Name"] ?? '"Error (Oops, something went wrong)"'}
						img={makeRealURI(game["Thumbnail"]?.url)}
						platform={game["ItchLink"] ? 'itch' : game["SteamLink"] ? 'steam' : ''}
						key={index}
						link={game["Slug"] ?? '/'}
					/>
				))}
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
		display: ${(props) => (props.gameCount >= 1 ? "block" : "grid")};
		grid-gap: 4px;
		grid-template-columns: ${(props) =>
			props.gameCount <= 2
				? "repeat(2, minmax(140px, 1fr))"
				: "repeat(3, minmax(140px, 1fr))"};

		max-width: ${(props) =>
			props.gameCount <= 2
				? props.gameCount == 1
					? "35%"
					: "70%"
				: "none"};
	}
`
