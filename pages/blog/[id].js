import Head from "next/head"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"

export default function BlogPost() {
	return (
		<>
			<Head>
				<title>SleepyDonut</title>
			</Head>
			<GlobalStyle />
			<PageContainer>
				<OverlayContainer></OverlayContainer>
				<DonutBackground />

				<Content>
					<BlogContainer>
						<Heading>
							<Title>Some Blog Post Title</Title>
							<DateInfo>May 25, 2021</DateInfo>
						</Heading>

                        <BlogContents>

                        </BlogContents>
					</BlogContainer>
				</Content>
			</PageContainer>
		</>
	)
}

const GlobalStyle = createGlobalStyle`
  body {
      background-color: #fff1d6;
  }
`

const DonutBackground = styled.div`
	width: 100vw;
	height: 100vh;
	background: url("/img/logo/logo-standalone.png");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;

	position: sticky;
	top: 0;
	left: 0;

	z-index: -1;
	opacity: 0.5;
`

const OverlayContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	background-image: url("/img/collage.png");
	background-size: 100%;
	background-repeat: repeat-y;
	background-position: top;

	opacity: 0.5;
`

const Content = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 100vh;
`

const BlogContainer = styled.div`
	max-width: 90%;
	margin: 0 auto;
`

const Heading = styled.h6`
	padding: 1rem;
    min-height: 7.5rem;

	background: var(--red);
	color: white;

	font-weight: bold;

	text-transform: capitalize;
    text-shadow: var(--text-shadow);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    * + * {
        margin-top: 0.5rem;
    }
`

const Title = styled.p`
	font-size: 1rem;
`
const DateInfo = styled.p`
	font-size: 0.8rem;
`

const BlogContents = styled.div`
    min-height: 60vw;
    background: #EDE0C7;
`

const PageContainer = styled.div`
	position: relative;
`
