import Head from "next/head"
import React from "react"
import SingularBlogPost from "../../components/SingularBlogPost"
import BlogLayout from "../../layout/BlogLayout"
import Pill from "../../components/styled/Pill"
import styled from "styled-components"

export default function Blogs() {
	return (
		<>
			<Head>
				<title>SleepyDonut</title>
			</Head>

			<BlogLayout>
				<StyledPill color="purple" regular={true} large={true}>
					Blog
				</StyledPill>
				<SingularBlogPost data={[]} short={true} />
				<SingularBlogPost data={[]} short={true} />
				<SingularBlogPost data={[]} short={true} />
			</BlogLayout>
		</>
	)
}

const StyledPill = styled(Pill)`
	transform: translateX(calc(50vw - 50%));
`
