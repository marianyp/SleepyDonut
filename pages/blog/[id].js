import Head from "next/head"
import Link from "next/link"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import SingularBlogPost from "../../components/SingularBlogPost"
import CustomFooting from "../../components/CustomFooting"
import Pill from "../../components/styled/Pill"
import BlogLayout from "../../layout/BlogLayout"
import GameContributer from "../../components/GameContributer"
import useQuery from "../../hooks/useQuery"

export default function BlogPost({ postData }) {
	return (
		<>
			<Head>
				<title>SleepyDonut</title>
			</Head>
			<GlobalStyle />

			<StyledLayout>
				<SingularBlogPost data={postData} short={false} />
			</StyledLayout>

			<AuthorContainer>
				<Pill color="red">Author</Pill>
				<CustomFooting>
					<GameContributer data={postData["Author"]} size="8rem" />
				</CustomFooting>
			</AuthorContainer>
		</>
	)
}

export async function getStaticPaths() {
	let possibleSlugs = []
	try {
		const blogs = await useQuery("blogs")
		possibleSlugs = blogs.map((blog) => blog["Slug"])
	} catch {}

	return {
		paths: possibleSlugs.map((slug) => ({ params: { id: slug } })),
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const { id } = params

	let thisBlog = {}
	try {
		const blogs = await useQuery("blogs")
		thisBlog = blogs.find((blog) => blog["Slug"] == id)
	} catch {}

	return {
		props: { postData: thisBlog },
	}
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

const StyledLayout = styled(BlogLayout)`
	position: relative;
	min-height: 100vh;
`

const AuthorContainer = styled.section`
	position: relative;

	z-index: 20;

	@media (min-width: 1000px) {
		${Pill} {
			left: 0;
			transform: translate(
				calc(var(--spacing) * -1 + var(--padding)),
				-50%
			);
		}
	}
`
