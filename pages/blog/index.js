import Head from "next/head"
import React from "react"
import SingularBlogPost from "../../components/SingularBlogPost"
import BlogLayout from "../../layout/BlogLayout"

export default function Blogs() {
	return (
		<>
			<Head>
				<title>SleepyDonut</title>
			</Head>

			<BlogLayout>
				<SingularBlogPost data={[]} short={true} />
				<SingularBlogPost data={[]} short={true} />
				<SingularBlogPost data={[]} short={true} />
			</BlogLayout>
		</>
	)
}
