import preval from "next-plugin-preval"
import useQuery from "../hooks/useQuery"

async function getData() {
	let collage = {}
	try {
		collage = await useQuery("custom-collage")
	} catch {}

	return {
		collageData: collage,
	}
}

export default preval(getData())
