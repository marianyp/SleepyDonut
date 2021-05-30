import preval from "next-plugin-preval"
import useQuery from "../hooks/useQuery"

async function getData() {
    let meta = {}
    try {
        meta = await useQuery("meta-data")
    } catch {}

	return {
		headData: meta,
	}
}

export default preval(getData())
