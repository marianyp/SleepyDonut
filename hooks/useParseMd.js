import marked from "marked"
import url from "url"

const API_URI = process.env.NEXT_PUBLIC_API_URI
const PRODUCTION = process.env.NEXT_PUBLIC_PRODUCTION

const useParseMd = (md) => {
	const regex = /\]\((.+)(?=(\.(svg|gif|png|jpe?g)))/g

	const withProperImageLink = md
		.toString()
		.replace(regex, (fullResult, imagePath) => {
			const newImagePath = url.resolve(
				PRODUCTION ? null : API_URI,
				imagePath,
			)
			return `](${newImagePath}`
		})

	let renderer = new marked.Renderer()

	renderer.image = (href, title, alt) => {
		if (href.match(/.(jpg|jpeg|png|gif)$/i)) {
			return `<img src=${href} />`
		} else {
			return `<video controls src="${
				PRODUCTION ? null : API_URI
			}${href}"></video>`
		}
	}

	renderer.paragraph = (text) => {
		if (text.startsWith("<img") && !text.endsWith(">")) {
			let split = text.split("/>")
			return `<p>${split[0]}/><span>${split[1]}</span></p>`
		}
		if (text.startsWith("<img")) {
			return text + "\n"
		}
		if (text.startsWith("<video") && !text.endsWith(">")) {
			let split = text.split("</video>")
			return `<p>${split[0]}</video><span>${split[1]}</span></p>`
		}
		if (text.startsWith("<video")) {
			return text + "\n"
		}
		if (text.endsWith(">")) {
			let split = text.split("\n")

			if (split.find((t) => t.startsWith("<img") || t.startsWith("<video"))) {
				return `<p><span>${split[0]}</span>${split[1]}</p>`
			}
		}

		return "<p>" + text + "</p>"
	}

	marked.setOptions({ renderer })

	const html = marked(withProperImageLink)

	return html
}

export default useParseMd
