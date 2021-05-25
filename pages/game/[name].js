import Head from "next/head"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import CustomFooting from "../../components/CustomFooting"
import Pill from "../../components/styled/Pill"
import useHero from "../../hooks/useHero"
import MemberAvatar from "../../components/MemberAvatar"
import GameContributer from "../../components/GameContributer"

export default function Game() {
	const heroObserverRef = useHero()

	const temp = {
		img: "/img/crychair.png",
		name: "Evan Malmud",
		role: "developer",
		socials: ["twitter", "instagram", "youtube", "custom"],
	}

	let contributers = [temp, temp, temp]

	return (
		<>
			<Head>
				<title>SleepyDonut</title>
			</Head>
			<GlobalStyle />

			<PageContainer>
				<GameHero>
					<SplashImageContainer ref={heroObserverRef}>
						<SplashImage src="/img/banner.png" />
						<PlayContainer>
							<a href="#">
								<img src="/img/btn-itch.svg" />
							</a>
							<a href="#">
								<img src="/img/btn-steam.svg" />
							</a>
						</PlayContainer>
					</SplashImageContainer>
					<MobilePlayContainer>
						<Pill color="orange">About</Pill>

						<MobilePlayButtonContainer href="#">
							<img src="/img/icons/icon-itch.io-colored.svg" />
						</MobilePlayButtonContainer>
						<MobilePlayButtonContainer href="#">
							<img src="/img/icons/icon-steam-colored.svg" />
						</MobilePlayButtonContainer>
					</MobilePlayContainer>
					<AboutGame>
						<Pill color="orange">About</Pill>
						<TextContainer>
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Beatae laborum facilis
								assumenda pariatur minima dolor iste nihil quos
								voluptas mollitia? Placeat quae eveniet
								obcaecati officiis maiores, vel repellendus est
								repellat fuga dolore.
							</p>
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Beatae laborum facilis
								assumenda pariatur minima dolor iste nihil quos
								voluptas mollitia? Placeat quae eveniet
								obcaecati officiis maiores, vel repellendus est
								repellat fuga dolore.
							</p>
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Beatae laborum facilis
								assumenda pariatur minima dolor iste nihil quos
								voluptas mollitia? Placeat quae eveniet
								obcaecati officiis maiores, vel repellendus est
								repellat fuga dolore.
							</p>
						</TextContainer>
					</AboutGame>
					<GameFeature>
						<img src="/img/mace.png" />
					</GameFeature>
				</GameHero>

				<ContributersContainer>
					<Pill color="red">About</Pill>
					<CustomFooting>
						<ContributersList>
							{contributers.map((c, index) => (
								<GameContributer data={c} key={index} />
							))}
						</ContributersList>
					</CustomFooting>
				</ContributersContainer>
			</PageContainer>
		</>
	)
}

const GlobalStyle = createGlobalStyle`
  :root {
    --padding: 2rem;
  }

  @media (min-width: 1000px) {
	:root {
    	--padding: 4rem;
  	}
  }
`

const GameHero = styled.main`
	position: relative;
	min-height: 100vh;
	background: #fff1d6;
`

const SplashImageContainer = styled.div`
	position: relative;
	display: flex;
`

const SplashImage = styled.img`
	width: 100%;
	object-fit: fill;
`

const PlayContainer = styled.div`
	display: none;
	position: absolute;
	right: 0;
	bottom: 0;
	min-width: 20rem;
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
	padding: 1.5rem 0;

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
	p + p {
		margin-top: 2rem;
	}
`

const ContributersContainer = styled.section`
	position: relative;
	min-height: 50vh;

	z-index: 20;
`

const ContributersList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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
