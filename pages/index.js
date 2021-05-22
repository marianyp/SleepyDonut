import Head from "next/head"
import { useContext, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import HomeBio from "../components/HomeBio"
import HomeGames from "../components/HomeGames"
import HomeSubscribe from "../components/HomeSubscribe"
import NavigationBar from "../components/NavigationBar"
import ScrollDown from "../components/ScrollDown"
import Wrapper from "../components/styled/Wrapper"
import { HeroContext } from "../context/HeroContext"

export default function Home() {
	const { setHeroVisible } = useContext(HeroContext)

	const [heroObserverRef, heroInView, heroEntry] = useInView({
		threshold: 0.4,
	})

	useEffect(() => {
		setHeroVisible(heroInView)
	}, [heroInView])

	return (
		<>
			<Head>
				<title>SleepyDonut</title>
			</Head>

			<Hero ref={heroObserverRef}>
				<HeroFeature>
					<img
						src="./img/logo/logo-vertical.png"
						alt="SleepyDonut Logo"
					/>

					<div>We Make Games For Fun!</div>
				</HeroFeature>

				<ScrollDown />
			</Hero>

			<GamesSection>
				<HomeGames />
			</GamesSection>

			<Footing>
				<GrungeContainer>
					<Grunge />
				</GrungeContainer>
				<FootingContainer>
					<FootingWrapper>
						<HomeBio />

						<hr />

						<HomeSubscribe />
					</FootingWrapper>
				</FootingContainer>
			</Footing>
		</>
	)
}

const Hero = styled.main`
	height: calc(100vh);

	background: linear-gradient(
			transparent 0%,
			var(--orange) 98%,
			var(--orange)
		),
		url("./img/hero-img.png");
	background-repeat: no-repeat;
	background-position: 15%;
	background-size: cover;

	display: flex;
	justify-content: center;
	align-items: center;

	flex-direction: column;
`

const HeroFeature = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	flex-direction: column;

	max-width: 700px;

	img {
		width: 40%;
	}

	div {
		width: 90%;

		padding: 0.6rem 0;

		font-weight: 900;
		text-align: center;
		text-transform: uppercase;

		border-radius: 2rem;

		background: var(--orange);
		color: white;

		text-shadow: var(--text-shadow);

		box-shadow: 0 3px 6px rgba(148, 82, 82, 0.32);
	}
`

const GamesSection = styled.section`
	background: linear-gradient(var(--orange), var(--red) 200%);
	padding-bottom: 8rem;
`

const GrungeContainer = styled.div`
	width: 100%;
	height: 100%;
	
	background: linear-gradient(var(--indigo), var(--indigo));

	overflow: hidden;
	position: absolute;
	top: 0;
	z-index: -1;

	pointer-events: none;
`

const Grunge = styled.div`
	position: absolute;

	top: 0;

	width: 300%;
	height: 100%;

	background: url("./img/grunge.png");
	background-size: 2000px;
	background-position: calc(100vw - 30%);

	transform: translateX(-40%) rotate(calc(10deg + 10vw));

	opacity: 0.07;
	overflow: hidden;

	pointer-events: none;
`

const FootingWrapper = styled.div`
	padding: 2rem;
	height: 100%;
`

const FootingContainer = styled.div`
	z-index: 1;
	
	width: 100%;

	padding: 6rem 0;

	hr {
		width: 100%;
		height: 2px;
		background-color: white;
		border: none;

		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
	}
`

const Footing = styled.section`
	&::before {
		--blur: 6px;

		content: "";

		position: absolute;
		top: 0;

		width: 100%;
		height: 10rem;

		background: url("./img/splash.png");
		background-repeat: repeat no-repeat;
		background-size: 500px;
		filter: drop-shadow(
			0 calc(var(--blur) * -2.1) var(--blur) rgba(0, 0, 0, 0.075)
		);

		transform: translateY(calc(-50% + 5px));
		pointer-events: none;
	}
	&::after {
		content: "";
		position: absolute;
		top: 0;

		width: 100%;
		height: 100%;

		background: linear-gradient(
			transparent,
			transparent 30%,
			rgba(0, 0, 0, 0.25) 40%,
			transparent 90%
		);

		transform: translateY(-45%);
		pointer-events: none;
	}

	position: relative;

	min-height: 100vh;

	@media (min-width: 1000px) {
		min-height: auto;

		${FootingWrapper} {
			display: flex;
			align-items: stretch;
		}
		${FootingContainer} {
			padding: 0;
			display: flex;

			padding: 4rem 0;

			h5 {
				display: inline-block;
			}

			p {
				display: inline-block;
			}

			hr {
				width: 2px;
				height: auto;
				margin: 0 4rem;
			}
		}
	}
`
