import Head from "next/head"
import React from "react"
import styled from "styled-components"
import useHero from "../../hooks/useHero"

export default function Game() {
	const heroObserverRef = useHero()

	return (
		<>
			<Head>
				<title>SleepyDonut</title>
			</Head>

			<GameHero ref={heroObserverRef}></GameHero>
		</>
	)
}

const GameHero = styled.main`
	height: 100vh;
`
