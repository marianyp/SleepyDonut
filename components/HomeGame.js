import Link from "next/link"
import styled from "styled-components"

export default function HomeGame({ name, img, platform, link }) {
	const PLATFORM_ENUM = {
		itch: "/img/icons/icon-footer-itch.svg",
		steam: "/img/icons/icon-footer-steam.svg",
	}
	Object.freeze(PLATFORM_ENUM)

	if (!Object.keys(PLATFORM_ENUM).includes(platform)) {
		throw Error(
			`Invalid enumeration value\n${platform} is not property in PLATFORM_ENUM`,
		)
	}

	return (
		<Link href={`/game/${link}`}>
			<Clickable>
				<GameContainer img={img} icon={PLATFORM_ENUM[platform]}>
					<h4>{name}</h4>
					<div>
						{platform ? <i></i> : null}
						Play Now
					</div>
				</GameContainer>
			</Clickable>
		</Link>
	)
}

const Clickable = styled.a`
	text-decoration: none;

	display: block;

	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}

	&:is(:not(:nth-of-type(3n))):last-of-type {
		grid-column: 2;
	}

	@media (min-width: 900px) {
		&:not(:last-of-type) {
			margin-bottom: 0;
		}
	}
`

const GameContainer = styled.div`
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	flex-direction: column;

	width: 100%;
	height: 50vw;
	max-height: 400px;

	background: linear-gradient(transparent 0%, black 180%),
		${(props) => (props.img ? `url('${props.img}')` : "black")};
	background-repeat: no-repeat;
	background-size: cover;
	color: white;

	user-select: none;

	h4 {
		text-transform: uppercase;
		font-weight: 900;
		font-size: 1.65rem;
	}

	div {
		display: flex;
		align-items: center;
		margin: 0 auto;

		i {
			width: 2rem;
			height: 2rem;

			display: inline-block;

			background: url("${(props) => props.icon}");
			background-repeat: no-repeat;
			background-position: center;
			background-size: 50%;
		}

		background: none;
		border: none;
		color: white;

		text-decoration: none;

		font-size: 1rem;

		font-weight: bold;

		cursor: pointer;
	}
	:hover {
		opacity: 0.8;
	}

	transition: opacity 0.2s ease;

	@media (min-width: 900px) {
		height: 20vw;
		max-height: none;
	}
`
