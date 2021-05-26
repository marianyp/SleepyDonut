import { useContext, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import styled from "styled-components"
import { HeroContext } from "../context/HeroContext"
import Router from "next/router"

export default function NavigationBar() {
	const router = useRouter()

	const { heroVisible } = useContext(HeroContext)

	const [dropdownOpen, setDropdownOpen] = useState(false)
	const [hamburgerOpen, setHamburgerOpen] = useState(false)

	const [transparent, setTransparent] = useState(false)

	const [fixed, setFixed] = useState(null)

	const [sliding, setSliding] = useState(false)

	const navRef = useRef()

	Router.events.on("routeChangeComplete", () => {
		setHamburgerOpen(false)
	})

	const dynamicFixedRoutes = ["/", "/blog/"] // Routes which should always be fixed

	useEffect(() => {
		const willBeFixed = dynamicFixedRoutes.find((r) =>
			`${router.pathname}/`.indexOf(r) != -1 && r != '/'
		)

		if (router.pathname === "/") {
			setTransparent(heroVisible)
			setFixed(null)
		} else if (willBeFixed) {
			setTransparent(false)
			setFixed(null)
		} else if (!heroVisible) {
			slideDown(navRef.current)
			setTransparent(false)
			setFixed(true)
		} else if (heroVisible) {
			setTransparent(false)
			setFixed(false)
		}
	}, [heroVisible])

	useEffect(() => {
		setDropdownOpen(false)
	}, [hamburgerOpen])

	useEffect(() => {
		if (dropdownOpen) {
			document.addEventListener("click", handleDropdownOpen)
		}

		return () => {
			document.removeEventListener("click", handleDropdownOpen)
		}
	}, [dropdownOpen])

	const slideDown = (elm) => {
		if (!elm) return

		setSliding(true)

		requestAnimationFrame(() => {
			setSliding(false)
		})
	}

	const handleDropdownOpen = (e) => {
		setDropdownOpen(false)
	}

	const handleHamburgerClick = (e) => {
		setHamburgerOpen((current) => !current)
	}
	const handleDropdownClick = (e) => {
		setDropdownOpen((current) => !current)
	}
	const handleLogoClick = (e) => {
		setHamburgerOpen(false)
	}

	const handleNavigationClick = (e) => {
		setHamburgerOpen(false)
	}

	return (
		<NavigationContainer
			transparent={transparent}
			hamburgerOpen={hamburgerOpen}
			fixed={fixed}
			dropdownOpen={dropdownOpen}
			ref={navRef}
			className={sliding ? "sliding" : null}
		>
			<Link href="/">
				<a className="home-img-link" onClick={handleLogoClick}>
					<img
						src="/img/logo/logo-horizontal.png"
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
							<DropdownContainer onClick={handleNavigationClick}>
								<Link href="/game/mace-madness">
									<a href="#">Mace Madness</a>
								</Link>
								<Link href="/game/outlaws">
									<a href="#">Outlaws</a>
								</Link>
							</DropdownContainer>
						</Dropdown>
					</li>
					<li>
						<Link href="/">
							<a onClick={handleNavigationClick}>Blog</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a onClick={handleNavigationClick}>Contact</a>
						</Link>
					</li>
				</ul>
			</Menu>
		</NavigationContainer>
	)
}

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

const DropdownContainer = styled.div``

const NavigationContainer = styled.header`
	&.sliding {
		transform: translateY(-100%);
		transition: 0.4s background ease;
	}
	--height: 5.75rem;
	position: ${(props) =>
		props.fixed ? "fixed" : props.fixed !== null ? "relative" : "fixed"};

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

	transform: translateY(0);

	transition: 0.4s background ease, 0.4s transform ease-in-out;

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

		background: url("/img/icons/icon-arrow.svg");
		background-repeat: no-repeat;
		background-size: contain;

		transform: rotate(180deg) translateY(20%);
	}

	@media (min-width: 1000px) {
		font-size: 1rem;

		${Hamburger} {
			display: none;
		}

		${Menu} {
			transition: none;

			position: static;
			display: inline-block;
			width: auto;
			height: auto;

			transform: none;

			background: none;

			text-align: left;

			ul {
				display: flex;
				justify-content: flex-start;

				li {
					&:not(:last-of-type) {
						margin-bottom: 0;
						margin-right: 1rem;
					}
				}
			}
		}

		${Dropdown} {
			width: 30vw;

			position: absolute;
			top: 100%;
			transform: translateX(calc(-100% + (30vw / 5)));

			transition: ${(props) =>
					props.dropdownOpen ? "max-height 0.2s" : "max-height 0.42s"}
				ease;

			max-height: none;
			overflow: visible;

			a {
				position: relative;
				padding: 1rem;

				background: ${(props) =>
					props.transparent ? "#6e2cda" : "#D6A781"};
				transition: 0.4s background ease;

				&::after {
					transform: translateX(-1rem);
				}
			}
		}

		${DropdownContainer} {
			overflow: hidden;
			max-height: ${(props) => (props.dropdownOpen ? "100vw" : "0")};
			transition: ${(props) =>
				props.dropdownOpen
					? "max-height 0.4s ease-in"
					: "max-height 0.25s ease-out"};
			::before {
				content: "";
				position: absolute;
				top: 0;
				right: 0;

				transform: translateY(-100%);

				width: 2rem;
				height: 2rem;

				clip-path: polygon(54% 44%, 0 100%, 100% 100%);
				background: ${(props) =>
					props.transparent ? "#6e2cda" : "var(--orange)"};

				overflow: hidden;
				max-height: ${(props) => (props.dropdownOpen ? "100vw" : "0")};
				transition: ${(props) =>
					props.dropdownOpen
						? "max-height 0.4s ease-in"
						: "max-height 0.25s ease-out"};
			}
		}

		i {
			width: 0.75rem;
			height: 0.8rem;

			transform: rotate(180deg) translateY(10%);
		}
	}
`
