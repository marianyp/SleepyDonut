import styled from "styled-components"
import MemberAvatar from "./MemberAvatar"

export default function HomeBio() {
	return (
		<BioContainer>
			<MemberAvatar src="/img/crychair.png" size="10rem" />
			<InfoContainer>
				<h5>Founder | Evan Malmud</h5>
				<p>
					A paragraph of text with an unassigned link. Explain things
					about the website. That I do Game Jams and to contact me
					with any questions! A second row of text with a web link.
				</p>
				<Socials>
					<a href="#">
						<img src="./img/icons/icon-discord.svg" />
					</a>
					<a href="#">
						<img src="./img/icons/icon-twitter.svg" />
					</a>
					<a href="#">
						<img src="./img/icons/icon-twitch.svg" />
					</a>
					<a href="#">
						<img src="./img/icons/icon-email-cartoon.svg" />
					</a>
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
