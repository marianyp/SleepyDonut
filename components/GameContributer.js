import React from "react"
import styled from "styled-components"
import { BORING_ICON_ENUM } from "../helpers/icons"
import makeRealURI from "../helpers/makeRealURI"
import MemberAvatar from "./MemberAvatar"

export default function GameContributer({ data, size, margin, row }) {
	if (row === undefined) row = false
	return (
		<ContributerContainer row={row} margin={margin}>
			<MemberAvatar src={makeRealURI(data["Avatar"]?.url)} size={size} />
			<Seperator>
				<Name>{data["Name"] ?? null}</Name>
				<Role>{data["Role"] ?? null}</Role>
				<SocialContainer>
					{data["MemberSocials"]?.map((social, index) => (
						<Social key={index}>
							<a href={social["Link"]} target="_blank">
								<img
									src={
										BORING_ICON_ENUM[
											social["Icon"].toUpperCase()
										]
									}
								/>
							</a>
						</Social>
					))}
				</SocialContainer>
			</Seperator>
		</ContributerContainer>
	)
}

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
	img {
		width: 1rem;
		height: 1rem;
	}
	& + & {
		margin-left: 1rem;
	}
`

const SocialContainer = styled.div`
	display: flex;
	justify-content: center;
`

const Seperator = styled.div`
	& > * + * {
		margin-top: 0.5rem;
	}
`

const ContributerContainer = styled.div`
	scroll-snap-align: start;

	display: flex;
	flex-direction: column;
	align-items: center;

	${Seperator} {
		& > * {
			margin-top: 0.35rem;
		}
	}

	& + & {
		margin-top: 2rem;
	}

	@media (min-width: 1000px) {
		flex-direction: ${(props) => (props.row ? "row" : "column")};
		${Name}, ${Role} {
			text-align: ${(props) => (props.row ? "left" : "center")};
		}

		${SocialContainer} {
			justify-content: ${(props) => (props.row ? "left" : "center")};
		}

		& + & {
			margin-top: 0;
			margin-left: ${(props) => props.margin ?? "7rem"};
		}

		& > div {
			margin-left: 2rem;
		}
	}
`
