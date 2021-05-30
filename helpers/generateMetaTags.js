const generateMetaTags = (_title, _description, _image, _favicon) => {
	return (
		<>
			<title>{_title}</title>
            <link rel="icon" href={_favicon} />
			<meta name="title" content={_title} />

			<meta
				name="description"
				content={_description}
			/>

			<meta property="og:type" content="website" />
			<meta property="og:url" content="http://sleepydonut.com/" />
			<meta property="og:title" content={_title} />
			<meta
				property="og:description"
				content={_description}
			/>
			<meta
				property="og:image"
				content={_image}
			/>

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="http://sleepydonut.com/" />
			<meta property="twitter:title" content={_title} />
			<meta
				property="twitter:description"
				content={_description}
			/>
			<meta
				property="twitter:image"
				content={_image}
			/>
		</>
	)
}

export default generateMetaTags
