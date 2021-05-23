import styled from "styled-components"

export default function Footer() {
	return (
		<FooterContainer>
			<span>SleepyDonut &#169; {new Date().getFullYear()}</span>

			<FooterSocials>
				<Social href="#">
					<img
						src="/img/icons/icon-footer-discord.svg"
						alt="discord"
					/>
				</Social>
				<Social href="#">
					<img
						src="/img/icons/icon-footer-twitter.svg"
						alt="twitter"
					/>
				</Social>
				<Social href="#">
					<img
						src="/img/icons/icon-footer-twitch.svg"
						alt="twitch"
					/>
				</Social>
				<Social href="#">
					<img src="/img/icons/icon-footer-email.svg" alt="email" />
				</Social>
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

const FooterSocials = styled.a`
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
			opacity: 1.5;
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
		}
	}
	img {
		display: flex;
	}
`
