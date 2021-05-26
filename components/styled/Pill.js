import React from "react"
import styled from "styled-components"

const types = {
	orange: {
		background: "linear-gradient(#E7B48B, #EBA065)",
		color: "white",
		shadow: "#CC8F5E",
	},
	red: {
		background: "linear-gradient(#ED8383, #CF6161)",
		color: "white",
		shadow: "rgba(156, 50, 50, 0.37)",
	},
}

const Pill = styled.div`
	--spacing: 2rem;
	position: absolute;
	top: 0;
	left: 50%;

	transform: translate(-50%, -50%);

	display: flex;
	align-items: center;

	height: 3rem;

	border-radius: 3.75rem;

	background: ${(props) => types[props.color].background};
	color: ${(props) => types[props.color].color};
	box-shadow: 0 3px 14px ${(props) => types[props.color].shadow};

	text-shadow: var(--text-shadow);

	font-weight: bold;

	padding: 0 var(--spacing);
	z-index: 90;
`

export default Pill
