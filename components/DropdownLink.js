import Link from "next/link"
import React from "react"
import styled from "styled-components"

export default function DropdownLink({ platforms, logo, children, className }) {
	return (
		<Link href="/game/outlaws">
			<StyledLink href="" className={className}>
				<Logo src={logo || "/img/game_logos/Game_Title.png"} />

				<div>{children}</div>

				<PlatformContainer>
					{platforms?.includes("pc") ? (
						<Platform src="/img/icons/icon-platform-pc.svg" />
					) : null}

					{platforms?.includes("mobile") ? (
						<Platform src="/img/icons/icon-platform-phone.svg" />
					) : null}
				</PlatformContainer>
			</StyledLink>
		</Link>
	)
}

const Logo = styled.img`
	width: 15%;
	object-fit: scale-down;
`

const Platform = styled.img`
	width: 30%;
	display: flex;

	margin-right: clamp(1rem, 0.8vw, 0.8vw);

	@media (min-width: 1000px) {
		:not(:last-of-type) {
			margin-right: clamp(1rem, 0.8vw, 0.8vw);
		}
		height: 30%;
		width: auto;
	}
`

const PlatformContainer = styled.div`
	display: flex;
	align-items: center;
`

const StyledLink = styled.a`
	scroll-snap-align: start;
	display: flex;

	& > * {
		:not(:last-child) {
			margin-right: 1rem;
		}

		:last-child {
			margin-left: auto;
		}
	}

	padding: 1rem 0;
	height: 3.5rem;

	font-size: 1rem;

	background: #d6a781;

	&:hover {
		color: rgba(255, 255, 255, 0.6);
		* {
			opacity: 0.6;
		}
	}

	&:not(:last-of-type) {
		position: relative;

		&::after {
			content: "";

			position: absolute;
			bottom: 0;
			display: block;

			width: 100%;
			height: 2px;

			background: rgba(0, 0, 0, 0.08);
		}
	}
`
