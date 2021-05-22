import styled from "styled-components"

export default function HomeSubscribe() {
	return (
		<FormContainer>
			<Heading>Subscribe To Our Newsletter</Heading>

			<form action="" onSubmit={null}>
				<div>
					<InputField type="text" placeholder="Enter your E-mail" />
					<Line />
				</div>
				<SignUpButton>Sign Me Up</SignUpButton>
			</form>
		</FormContainer>
	)
}

const Heading = styled.h5`
	font-size: 2rem;
	font-weight: 800;
	text-shadow: var(--text-shadow);

	max-width: 400px;

	margin: 0 auto;
	margin-top: 6rem;
`

const InputField = styled.input`
	width: 100%;
	position: relative;

	background: none;
	border: none;

	color: white;

	text-align: center;

	text-shadow: var(--text-shadow);

	::placeholder {
		color: white;
		text-shadow: var(--text-shadow);
		text-align: center;

		font-weight: 300;
	}

	:after {
		content: "";
		position: absolute;
		bottom: 0;

		width: 100%;

		height: 2px;
		background: white;
	}

	:focus {
		outline: none;

		::placeholder {
			opacity: 0.4;
		}
	}

	:hover {
		opacity: 1;
	}
`

const Line = styled.div`
	width: 100%;
	height: 1px;

	background: white;

	margin-top: 0.35rem;
`

const SignUpButton = styled.button`
	width: 100%;
	height: 3.75rem;

	color: #6227c2;
	background: white;
	border: none;
	font-weight: bold;

	text-transform: uppercase;

	cursor: pointer;
`

const FormContainer = styled.div`
	text-align: center;
	color: white;

	& > *,
	form > * {
		:not(:last-child) {
			margin-bottom: 3rem;
		}
	}
	max-width: 500px;
	margin: 0 auto;

	@media (min-width: 1000px) {
		${Heading} {
			margin-top: 0;

			font-size: 1.4rem;
			width: 60%;
		}

		max-width: 20vw;
		min-width: 300px;
	}
`
