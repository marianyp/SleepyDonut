const PRODUCTION = process.env.NEXT_PUBLIC_PRODUCTION
const API_URI = process.env.NEXT_PUBLIC_API_URI

export default function makeRealURI(uri) {
    let real
    if(PRODUCTION) {
        real = uri
    } else {
        real = `${API_URI}${uri}`
    }

    return real
}