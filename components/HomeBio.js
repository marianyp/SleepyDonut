import styled from "styled-components"
import MemberAvatar from "./MemberAvatar"

export default function HomeBio() {
	return (
		<BioContainer>
			<MemberAvatar size="10rem" />
			<h5>Founder | Evan Malmud</h5>
			<p>
				A paragraph of text with an unassigned link. Explain things
				about the website. That I do Game Jams and to contact me with
				any questions! A second row of text with a web link.
			</p>
		</BioContainer>
	)
}

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

    h5, p {
        text-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
        line-height: 1.9;
    }

	h5 {
		color: white;
		font-weight: 900;
		font-size: 1.5rem;
	}
`
