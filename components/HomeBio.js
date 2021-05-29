import styled from "styled-components"
import { COLORED_ICON_ENUM } from "../helpers/icons"
import makeRealURI from "../helpers/makeRealURI"
import MemberAvatar from "./MemberAvatar"

export default function HomeBio({ data }) {
	const {homeData, ownerData} = data

	return (
		<BioContainer>
			<MemberAvatar src={makeRealURI(ownerData["Avatar"]?.url)} size="10rem" />
			<InfoContainer>
				<h5>Founder | {ownerData["Name"] ?? null}</h5>
				<p>{homeData["Biography"] ?? null}</p>
				<Socials>
					{ownerData["MemberSocials"]?.map((social, index) => (
						<a href="#" key={index}>
							<img
								src={
									COLORED_ICON_ENUM[
										social["Icon"].toUpperCase()
									] ?? null
								}
							/>
						</a>
					))}
				</Socials>
			</InfoContainer>
		</BioContainer>
	)
}

const InfoContainer = styled.div`
	& > *:not(:nth-of-type(-2)) {
		margin-bottom: 2rem;
	}
`

const Socials = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	a {
		:not(:last-of-type) {
			margin-right: 1rem;
		}
		display: flex;

		:hover {
			opacity: 0.8;
		}
	}
`

const BioContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	margin-left: inherit;

	display: flex;
	align-items: center;
	flex-direction: column;

	text-align: center;
	color: white;
	font-size: 1.25rem;

	& > * {
		margin-bottom: 2rem;
	}

	h5,
	p {
		text-shadow: 0 3px 6px var(--text-shadow);
		line-height: 1.9;
	}

	h5 {
		color: white;
		font-weight: 900;
		font-size: 1.5rem;
	}

	@media (min-width: 1000px) {
		flex-direction: row;
		align-items: flex-start;

		flex-basis: 60%;

		${InfoContainer} {
			text-align: left;
			margin-left: 2rem;
			margin-bottom: 0;
		}

		${Socials} {
			justify-content: flex-start;
			display: inline-flex;

			img {
				width: 1.4rem;
			}
		}

		p {
			font-size: 1rem;
			/* max-width: 90%; */
		}
	}
`
