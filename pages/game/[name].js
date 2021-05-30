import Head from "next/head"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import CustomFooting from "../../components/CustomFooting"
import Pill from "../../components/styled/Pill"
import useHero from "../../hooks/useHero"
import MemberAvatar from "../../components/MemberAvatar"
import GameContributer from "../../components/GameContributer"
import useQuery from "../../hooks/useQuery"
import makeRealURI from "../../helpers/makeRealURI"

export default function Game({ gameData }) {
	const heroObserverRef = useHero()

	return (
		<>
			<GlobalStyle />

			<PageContainer>
				<GameHero>
					<SplashImageContainer ref={heroObserverRef}>
						<SplashImage
							src={makeRealURI(gameData["BannerImage"]?.url)}
						/>
						<PlayContainer>
							{gameData["ItchLink"] ? (
								<a href={gameData["ItchLink"] ?? null} target="_blank">
									<img src="/img/btn-itch.svg" />
								</a>
							) : null}
							{gameData["SteamLink"] ? (
								<a href={gameData["SteamLink"] ?? null} target="_blank">
									<img src="/img/btn-steam.svg" />
								</a>
							) : null}
						</PlayContainer>
					</SplashImageContainer>
					<MobilePlayContainer>
						<Pill color="orange">About</Pill>

						{gameData["ItchLink"] ? (
							<MobilePlayButtonContainer
								href={gameData["ItchLink"]}
								target="_blank"
							>
								<img src="/img/icons/icon-itch.io-colored.svg" />
							</MobilePlayButtonContainer>
						) : null}

						{gameData["SteamLink"] ? (
							<MobilePlayButtonContainer
								href={gameData["SteamLink"]}
								target="_blank"
							>
								<img src="/img/icons/icon-steam-colored.svg" />
							</MobilePlayButtonContainer>
						) : null}
					</MobilePlayContainer>
					<AboutGame>
						<Pill color="orange">About</Pill>
						<TextContainer>
							<p>{gameData["About"]}</p>
						</TextContainer>
					</AboutGame>
					{gameData["GameFeature"] ? (
						<GameFeature>
							<img
								src={makeRealURI(gameData["GameFeature"].url)}
							/>
						</GameFeature>
					) : null}
				</GameHero>

				<ContributersContainer>
					<Pill color="red">Contributers</Pill>
					<CustomFooting>
						<ContributersList>
							{gameData["TeamMembers"]?.map((c, index) => (
								<GameContributer data={c} key={index} size={gameData["TeamMembers"].length > 4 ? '12vw' : null} margin={gameData["TeamMembers"].length > 4 ? '4rem' : null} />
							))}
						</ContributersList>
					</CustomFooting>
				</ContributersContainer>
			</PageContainer>
		</>
	)
}

export async function getStaticPaths() {
	let possibleSlugs = []
	try {
		const games = await useQuery("games")
		possibleSlugs = games?.map((game) => game["Slug"])
	} catch {}

	return {
		paths: possibleSlugs?.map((slug) => ({ params: { name: slug } })),
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const { name } = params

	let thisGame = {}
	try {
		const games = await useQuery("games")
		thisGame = games.find((game) => game["Slug"] == name)
	} catch {}

	return {
		props: { gameData: thisGame },
	}
}

const GlobalStyle = createGlobalStyle`
  :root {
    --padding: 2rem;
  }

  body {
	background: #fff1d6;
  }

  @media (min-width: 1000px) {
	:root {
    	--padding: 4rem;
  	}
  }
`

const GameHero = styled.main`
	position: relative;
	background: #fff1d6;
`

const SplashImageContainer = styled.div`
	position: relative;
	display: flex;
`

const SplashImage = styled.img`
	width: 100%;
	object-fit: cover;
	user-drag: none;
`

const PlayContainer = styled.div`
	display: none;
	position: absolute;
	right: 0;
	bottom: 0;
	min-height: 4.65rem;
	background: rgba(0, 0, 0, 0.65);
	border-top-left-radius: 16px;

	padding: 0.5rem 1rem;
	align-items: center;

	a {
		display: flex;

		img {
			height: 3rem;
		}

		& + a {
			margin-left: 0.5rem;
		}
	}
`

const MobilePlayButtonContainer = styled.a`
	& + & {
		margin-left: 6.5rem;
	}
`

const MobilePlayContainer = styled.div`
	position: relative;

	min-height: 6rem;
	padding: 2.25rem 0;

	display: flex;
	justify-content: center;
	align-items: center;

	background: linear-gradient(#bfb2a8, #9e9893);
`

const AboutGame = styled.section`
	position: relative;
	min-height: 50vh;

	background: #fff1d6;
	color: var(--text-opaque);
	text-shadow: var(--text-shadow);

	padding: var(--padding);
	padding-top: 4rem;
	padding-bottom: calc(var(--padding) * 8);

	z-index: 10;

	${Pill} {
		display: none;
		transform: translate(calc(var(--spacing) * -1 + var(--padding)), -50%);
	}
`

const TextContainer = styled.div`
	p {
		white-space: pre-wrap;
	}
	p + p {
		margin-top: 2rem;
	}
`

const ContributersContainer = styled.section`
	position: relative;

	z-index: 20;
`

const ContributersList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	overflow-x: auto;

	scroll-snap-type: x block;

	::-webkit-scrollbar {
		height: 8px;
	}
	::-webkit-scrollbar-track {
		background: none;
	}
	::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.2);
		border-radius: 8px;
		cursor: pointer;
	}
	::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 0, 0, 0.05);
	}
	scrollbar-color: rgba(0, 0, 0, 0.2)
		rgba(0, 0, 0, 0);
	scrollbar-width: thin;

	padding-bottom: 1rem;
`

const GameFeature = styled.div`
	width: 100%;
	height: 100%;

	position: absolute;
	top: 0;
	left: 0;

	pointer-events: none;

	img {
		height: 30vw;
		max-height: 30%;
		min-height: 20vw;
		position: absolute;
		bottom: 0;
		right: 0;

		transform: translateY(20%) translateX(10%);
	}
	z-index: 10;
`

const PageContainer = styled.div`
	@media (min-width: 1000px) {
		${SplashImage} {
			height: 50vh;
		}

		${PlayContainer} {
			display: flex;
			justify-content: flex-end;
		}

		${MobilePlayContainer} {
			display: none;
		}

		${AboutGame} {
			${Pill} {
				display: flex;
				left: 0;
			}

			padding-bottom: calc(var(--padding) * 4);
		}
		${ContributersContainer} {
			position: relative;
			${Pill} {
				display: flex;
				left: 0;
				transform: translate(
					calc(var(--spacing) * -1 + var(--padding)),
					-50%
				);
			}
		}
		${ContributersList} {
			width: 100%;
			justify-content: center;
			flex-direction: row;
		}
		${TextContainer} {
			max-width: 64vw;
		}
		${GameFeature} {
			img {
				transform: translateY(10%) translateX(-20%);
				max-height: 20%;
			}
		}
	}
`
