import preval from "next-plugin-preval"
import useQuery from "../hooks/useQuery"

async function getData() {
	let allGames = {}
	try {
		allGames = await useQuery("games")
	} catch {}

	return {
		gameData: allGames,
	}
}

export default preval(getData())
