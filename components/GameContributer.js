import React from "react"
import styled from "styled-components"
import MemberAvatar from "./MemberAvatar"

export default function GameContributer({ data }) {
	const { img, name, role, socials } = data

	return (
		<ContributerContainer>
			<MemberAvatar src={img} />
			<Name>{name}</Name>
			<Role>{role}</Role>
			<SocialContainer>
				{socials.map((social, index) => (
					<Social key={index}>
						<a href="#" target="_blank">
							<img src="/img/icons/icon-footer-email.svg" />
						</a>
					</Social>
				))}
			</SocialContainer>
		</ContributerContainer>
	)
}

const ContributerContainer = styled.div`
	& + & {
		margin-top: 6rem;
	}

	& > * + * {
		margin-top: 0.5rem;
	}

	@media (min-width: 1000px) {
		& + & {
			margin-top: 0;
			margin-left: 7rem;
		}
	}
`

const Name = styled.h6`
	text-transform: uppercase;
	text-align: center;

	color: white;

	font-weight: 900;
	font-size: 1.65rem;

	text-shadow: var(--text-shadow);
`

const Role = styled.h6`
	text-transform: uppercase;
	text-align: center;

	color: white;

	font-weight: 400;
	font-size: 1rem;

	text-shadow: var(--text-shadow);
`

const Social = styled.div`
	& + & {
		margin-left: 1rem;
	}
`

const SocialContainer = styled.div`
	display: flex;
	justify-content: center;
`
