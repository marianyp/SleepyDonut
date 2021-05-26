import Head from "next/head"
import Link from "next/link"
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
				<Content>
					<BlogContainer>
						<Heading>
							<Title>Some Blog Post Title</Title>
							<DateInfo>May 25, 2021</DateInfo>
						</Heading>

						<BlogContents>
							<h4>Lorem ipsum dolor sit amet consectetur.</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Corrupti temporibus officiis
								rem laudantium placeat inventore, veritatis
								veniam nam nulla sit culpa quos consequuntur
								asperiores!
							</p>
							<img src="/img/hero-img.png/" alt="" />

							<div>
								<img src="/img/hero-img.png/" alt="" />
								<div>
									<h5>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Soluta officiis
										mollitia odio?
									</h5>
									<p>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Repudiandae porro
										omnis eaque quos dolores aperiam
										maiores? Ipsum labore voluptate minus
										corporis excepturi, nulla perspiciatis
										nemo est ab, nostrum reprehenderit
										consequatur? Asperiores quae voluptates,
										delectus dolorum aut quos, ea aliquid
										voluptas velit culpa quia voluptatum
										porro maiores ab modi voluptatem, ipsam
										necessitatibus minima deserunt! Animi
										commodi et optio voluptas eaque nam.
									</p>
								</div>
							</div>

							<AllBlogsContainer>
								<Link href="/blogs">
									<a href="">
										<AllBlogsButton>
											<img src="/img/icons/icon-arrow-btn.svg" />
											All Blogs
										</AllBlogsButton>
									</a>
								</Link>
							</AllBlogsContainer>
						</BlogContents>
					</BlogContainer>
				</Content>
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
	background-size: 150%;
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
	background: #ede0c7;
	color: var(--text-opaque);

	padding: 1rem;

	* + * {
		margin-top: 1rem;
	}

	& > img {
		width: 100%;
		margin: 4rem 0;
	}
`

const AllBlogsContainer = styled.div`
	width: 100%;
	a {
		text-decoration: none;
	}
`
const AllBlogsButton = styled.button`
	height: 2.5rem;
	background: linear-gradient(#ed8383, #cf6161);
	color: white;

	box-shadow: 0 3px 6px rgba(156, 50, 50, 0.37);

	text-shadow: var(--text-shadow);
	border-radius: 3.75rem;
	border: none;

	padding: 0 2.5rem;

	cursor: pointer;

	display: flex;
	align-items: center;

	img {
		transform: translateY(10%);
	}

	:hover {
		opacity: 0.8;
	}
`

const PageContainer = styled.div`
	position: relative;
	min-height: 100vh;

	@media (min-width: 1000px) {
		${BlogContainer} {
			max-width: 80vw;
		}

		${BlogContents} {
			padding: 2rem;

			& > div:not(${AllBlogsContainer}) {
				& > * + * {
					margin-left: 2rem;
				}
				img {
					width: 50%;
					margin-top: 0;
					margin-bottom: 0;
				}
				display: flex;
				align-items: center;
				width: 100%;
			}
		}
	}
`
