import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import styled from "styled-components"
import { HeroContext } from "../context/HeroContext"

export default function NavigationBar() {
	const router = useRouter()

	const { heroVisible } = useContext(HeroContext)

	const [dropdownOpen, setDropdownOpen] = useState(false)
	const [hamburgerOpen, setHamburgerOpen] = useState(false)

	const [transparent, setTransparent] = useState(false)

	useEffect(() => {
		if (router.pathname === "/") {
			setTransparent(heroVisible)
		}
	}, [heroVisible])

	useEffect(() => {
		setDropdownOpen(false)
	}, [hamburgerOpen])

	const handleHamburgerClick = (e) => {
		setHamburgerOpen((current) => !current)
	}
	const handleDropdownClick = (e) => {
		setDropdownOpen((current) => !current)
	}

	return (
		<NavigationContainer
			transparent={transparent}
			hamburgerOpen={hamburgerOpen}
		>
			<Link href="/">
				<a className="home-img-link">
					<img
						src="img/logo/logo-horizontal.png"
						alt="SleepyDonut Logo"
					/>
				</a>
			</Link>

			<Hamburger onClick={handleHamburgerClick}>
				<HamburgerLine />
				<HamburgerLine />
				<HamburgerLine />
			</Hamburger>

			<Menu hamburgerOpen={hamburgerOpen}>
				<ul>
					<li>
						<button onClick={handleDropdownClick}>
							<a>
								Games <i></i>
							</a>
						</button>

						<Dropdown dropdownOpen={dropdownOpen}>
							<a href="#">Mace Madness</a>
							<a href="#">Outlaws</a>
						</Dropdown>
					</li>
					<li>
						<Link href="/">
							<a>Blog</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</Menu>
		</NavigationContainer>
	)
}

const NavigationContainer = styled.header`
	--height: 5.75rem;
	position: fixed;
	top: 0;

	z-index: 99;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 1rem;

	width: 100%;
	height: 5.75rem;

	background: ${(props) =>
		props.transparent ? "transparent" : "var(--orange)"};

	transition: 0.4s background ease;

	font-size: 2rem;

	.home-img-link {
		display: inline-block;
		height: 50%;
		z-index: 10;
	}
	img {
		height: 100%;

		opacity: ${(props) =>
			props.transparent && !props.hamburgerOpen ? "0" : "1"};
		transition: 0.1s opacity ease;
	}

	a {
		color: white;
		text-decoration: none;

		font-weight: 900;
		text-transform: uppercase;
	}

	i {
		width: 1.125rem;
		height: 1.5rem;

		display: inline-block;

		background: url("./img/icons/icon-arrow.svg");
		background-repeat: no-repeat;
		background-size: contain;

		transform: rotate(180deg) translateY(20%);
	}
`

const Hamburger = styled.div`
	cursor: pointer;

	z-index: 10;
`

const HamburgerLine = styled.div`
	--size: 0.25rem;

	background: white;
	width: 2rem;
	height: var(--size);

	border-radius: 50px;

	&:not(:last-of-type) {
		margin-bottom: var(--size);
	}
`

const Menu = styled.nav`
	position: absolute;
	top: 0;
	left: 0;

	width: 100vw;
	height: 100vh;

	display: flex;

	align-items: center;
	justify-content: center;

	transform: ${(props) =>
		props.hamburgerOpen ? "translateY(0)" : "translateY(-100vh)"};

	transition: transform 0.4s ease;

	background: var(--orange);

	text-align: center;

	button {
		border: none;
		background: none;
		cursor: pointer;
	}

	ul {
		width: 100%;
		li {
			list-style: none;

			& > a,
			button {
				&:hover {
					opacity: 0.6;
				}
			}

			&:not(:last-of-type) {
				margin-bottom: 1rem;
			}
		}
	}
`

const Dropdown = styled.div`
	overflow: hidden;
	max-height: ${(props) => (props.dropdownOpen ? "100vw" : "0")};

	transition: ${(props) =>
		props.dropdownOpen
			? "max-height 0.4s ease-in"
			: "max-height 0.25s ease-out"};

	a {
		display: block;
		padding: 1rem 0;

		font-size: 1rem;

		background: #d6a781;

		&:hover {
			color: rgba(255, 255, 255, 0.6);
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
	}
`
