import preval from "next-plugin-preval"
import useQuery from "../hooks/useQuery"

async function getData() {
	let footer = {}
	try {
		footer = await useQuery("footer-links")
	} catch {}

	return {
		footerData: footer,
	}
}

export default preval(getData())
