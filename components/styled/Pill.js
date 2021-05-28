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
	purple: {
		background: "linear-gradient(#AD54EC, #6E2CDA)",
		color: "white",
		shadow: "rgba(32, 13, 64, 0.12)",
	},
}

const Pill = styled.div`
	--spacing: 2rem;
	position: ${(props) => (props.regular ? "static" : "absolute")};
	top: 0;
	left: 50%;

	transform: ${(props) => (props.regular ? "" : "translate(-50%, -50%)")};

	display: inline-flex;
	align-items: center;

	min-height: 3rem;

	border-radius: 3.75rem;

	background: ${(props) => types[props.color].background};
	color: ${(props) => types[props.color].color};
	box-shadow: 0 3px 14px ${(props) => types[props.color].shadow};

	text-shadow: var(--text-shadow);

	font-weight: bold;

	padding: ${(props) =>
		props.large ? "1rem calc(var(--spacing))" : "0 var(--spacing)"};
	font-size: ${(props) => (props.large ? "1.5rem" : "1rem")};

	z-index: 90;
	user-select: none;
`

export default Pill
