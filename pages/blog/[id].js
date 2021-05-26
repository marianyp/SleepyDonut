import Head from "next/head"
import Link from "next/link"
import React from "react"
import styled from "styled-components"
import SingularBlogPost from "../../components/SingularBlogPost"
import BlogLayout from "../../layout/BlogLayout"

export default function BlogPost() {
	return (
		<>
			<Head>
				<title>SleepyDonut</title>
			</Head>
			<StyledLayout>
				<SingularBlogPost data={[]} short={false} />
			</StyledLayout>
		</>
	)
}

const StyledLayout = styled(BlogLayout)`
	position: relative;
	min-height: 100vh;
`
