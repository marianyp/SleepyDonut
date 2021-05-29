import preval from "next-plugin-preval"
import useQuery from "../hooks/useQuery"

async function getData() {
	const allGames = await useQuery("games")

	return {
		gameData: allGames,
	}
}

export default preval(getData())
