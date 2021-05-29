import "isomorphic-fetch"

const API_URI = process.env.NEXT_PUBLIC_API_URI

const useQuery = async (query) => {
    const data = await fetch(`${API_URI}/${query}`)
    const json = await data.json()

    return json
}

export default useQuery