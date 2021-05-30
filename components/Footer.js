import styled from "styled-components"
import data from "../helpers/footer.preval"
import { BORING_ICON_ENUM } from "../helpers/icons"

const { footerData } = data
export default function Footer() {
	return (
		<FooterContainer>
			<span>SleepyDonut &#169; {new Date().getFullYear()}</span>

			<FooterSocials>
				{!footerData
					? null
					: footerData["Socials"].map((link, key) => (
							<Social href={link["Link"]} key={key}>
								<img
									src={
										BORING_ICON_ENUM[
											link["Icon"].toUpperCase()
										]
									}
								/>
							</Social>
					  ))}
			</FooterSocials>
		</FooterContainer>
	)
}

const FooterContainer = styled.footer`
	height: 3.75rem;

	background: #5b24b4;
	color: white;

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;
`

const FooterSocials = styled.div`
	display: flex;
`
const Social = styled.a`
	--spacing: 2rem;
	cursor: pointer;
	display: flex;

	:hover {
		img {
			opacity: 0.5;
		}

		&:after {
			opacity: 1;
		}
	}

	:not(:last-of-type) {
		margin-right: var(--spacing);

		position: relative;
		:after {
			content: "";
			position: absolute;
			top: 0;
			right: calc((var(--spacing) / 2) * -1);

			height: 100%;
			width: 1px;

			background: white;
			pointer-events: none;
		}
	}
	img {
		display: flex;
		width: 0.95rem;
		height: 0.95rem;
	}
`
