import styled from "styled-components"

export default function CustomFooting({ children, waves, className }) {
	return (
		<>
			<Footing waves={waves} className={className}>
				<Waves></Waves>
				<GrungeContainer>
					<Grunge />
				</GrungeContainer>
				<FootingContainer>
					<FootingWrapper>{children}</FootingWrapper>
				</FootingContainer>
			</Footing>
		</>
	)
}

const GrungeContainer = styled.div`
	width: 100%;
	height: 100%;

	background-color: var(--indigo);

	overflow: hidden;
	position: absolute;
	top: 0;
	z-index: -1;

	pointer-events: none;
`

const Grunge = styled.div`
	position: absolute;

	top: 0;

	width: 300%;
	height: 100%;

	background: url("/img/grunge.png");
	background-size: clamp(1000px, 420vw, 2000px);
	background-position: calc(100vw - 30%);

	transform: translateX(-40%) rotate(calc(10deg + 10vw));

	opacity: 0.07;
	overflow: hidden;

	pointer-events: none;
`

const FootingWrapper = styled.div`
	padding: 2rem;
	height: 100%;
	width: 100%;
	
`

const FootingContainer = styled.div`
	position: relative;
	top: 0;
	left: 0;
	z-index: 10;

	width: 100%;

	padding: 2rem 0;

	hr {
		width: 100%;
		height: 2px;
		background-color: white;
		border: none;

		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
	}
`

const Waves = styled.div``

const Footing = styled.section`
	overflow: hidden;
	position: relative;
	&::before {
		--blur: 6px;

		content: ${(props) => (props.waves ? "" : null)};

		position: absolute;
		top: 0;

		width: 100%;
		height: 10rem;

		background: url("/img/splash.png");
		background-repeat: repeat no-repeat;
		background-size: 500px;
		filter: drop-shadow(
			0 calc(var(--blur) * -2.1) var(--blur) rgba(0, 0, 0, 0.075)
		);

		transform: translateY(calc(-50% + 5px));
		pointer-events: none;
	}
	&::after {
		content: "";
		position: absolute;
		top: 0;

		width: 100%;
		height: 100%;

		background: linear-gradient(
			transparent,
			transparent 30%,
			rgba(0, 0, 0, 0.25) 40%,
			transparent 90%
		);

		transform: translateY(calc(-38.5%));
		overflow: hidden;
		z-index: -1;
		pointer-events: none;
	}
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	@media (min-width: 1000px) {
		min-height: auto;

		${FootingWrapper} {
			display: flex;
			align-items: stretch;
		}
		${FootingContainer} {
			padding: 0;
			display: flex;

			padding: 2rem 0;

			h5 {
				display: inline-block;
			}

			p {
				display: inline-block;
			}

			hr {
				width: 2px;
				height: auto;
				margin: 0 4rem;
			}
		}
		${Waves} {
			position: absolute;
			width: 100%;
			height: 100%;

			background-image: url("/img/waves.svg");
			background-size: contain;
			background-repeat: no-repeat;
			background-position: 0% 100%;
			transform: scaleX(-1);
		}
	}
`
