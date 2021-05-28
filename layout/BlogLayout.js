import React from "react"
import styled, { createGlobalStyle } from "styled-components"

export default function BlogLayout({ children, className }) {
	return (
		<>
			<GlobalStyle />
			<PageContainer className={className}>
				<Content>{children}</Content>
				<OverlayContainer></OverlayContainer>
				<DonutBackground />
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
	width: 100%;
	height: 100%;
	background: url("/img/logo/logo-standalone.png");
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: center;

	position: fixed;
	top: 0;
	left: 0;

	z-index: -2;
	opacity: 0.24;
`

const OverlayContainer = styled.div`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	position: absolute;

	background-image: url("/img/collage.png");
	background-size: 100%;
	background-repeat: repeat-y;
	background-position: top;

	opacity: 0.56;
	z-index: -1;
`

const Content = styled.div`
	padding: 8rem 0;
`

const BlogContainer = styled.div`
	max-width: 90%;

	box-shadow: 0 3px 6px rgba(163, 154, 137, 0.12);

	margin: 0 auto;
`

const PageContainer = styled.div`
	position: relative;
	min-height: 100vh;

	@media (min-width: 1000px) {
		${BlogContainer} {
			max-width: 80vw;
		}
	}
`
