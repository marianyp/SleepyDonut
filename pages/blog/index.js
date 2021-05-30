import Head from "next/head"
import React from "react"
import SingularBlogPost from "../../components/SingularBlogPost"
import BlogLayout from "../../layout/BlogLayout"
import Pill from "../../components/styled/Pill"
import styled from "styled-components"
import useQuery from "../../hooks/useQuery"

export default function Blogs({ blogsData }) {
	return (
		<>
			<BlogLayout>
				<StyledPill color="purple" regular={true} large={true}>
					Blog
				</StyledPill>

				{!blogsData.length ? null : blogsData.map((blog, key) => <SingularBlogPost data={blog} short={true} key={key} />)}
			</BlogLayout>
		</>
	)
}

export async function getStaticProps() {
	let blogs = []
	try {
		blogs = await useQuery("blogs")
	} catch (err) {}

	
	return {
		props: { blogsData: blogs },
	}
}

const StyledPill = styled(Pill)`
	transform: translateX(calc(50vw - 50%));
`
