import styled from "styled-components"

export default function HomeGame({ name, img, platform }) {
	const PLATFORM_ENUM = {
		itch: "./img/icons/icon-itch.svg",
		steam: "STEAM",
	}
	Object.freeze(PLATFORM_ENUM)

	if (!Object.keys(PLATFORM_ENUM).includes(platform)) {
		throw Error(
			`Invalid enumeration value\n${platform} is not property in PLATFORM_ENUM`,
		)
	}

	return (
		<GameContainer img={img} icon={PLATFORM_ENUM[platform]}>
			<h4>{name}</h4>
			<button>
				<i></i>
				Play Now
			</button>
		</GameContainer>
	)
}

const GameContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	flex-direction: column;

	width: 100%;
	height: 30vh;

	background: linear-gradient(transparent 0%, black 180%),
		${(props) => (props.img ? `url('${props.img}')` : "black")};
	color: white;

	user-select: none;

	h4 {
		margin-bottom: 0.65rem;
		text-transform: uppercase;
		font-weight: 900;
		font-size: 1.4rem;
	}

	button {
        display: flex;
        align-items: center;
		i {
			width: 2rem;
			height: 2rem;

            display: inline-block;

			background: url('${(props) => (props.icon)}');
			background-repeat: no-repeat;
            background-position: center -20%;
			background-size: 120%;
		}

		background: none;
		border: none;
		color: white;

		font-size: 0.75rem;

		font-weight: bold;

		cursor: pointer;
	}

	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}
`
