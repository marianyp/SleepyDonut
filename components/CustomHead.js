import Head from "next/head"
import React from "react"
import generateMetaTags from "../helpers/generateMetaTags"
import { headData } from "../helpers/head.preval"
import makeRealURI from "../helpers/makeRealURI"

const metaData = headData || {}

export default function CustomHead() {
	return (
		<Head>
			{generateMetaTags(
				metaData["Title"],
				metaData["Description"],
				makeRealURI(metaData["Image"]?.url),
                makeRealURI(metaData["Favicon"]?.url),
			)}
		</Head>
	)
}
