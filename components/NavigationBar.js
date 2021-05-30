import { useContext, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import styled from "styled-components"
import { HeroContext } from "../context/HeroContext"
import Router from "next/router"
import DropdownLink from "./DropdownLink"
import makeRealURI from "../helpers/makeRealURI"

import data from "../helpers/nav.preval"

let { gameData } = data

gameData = gameData ?? []

export default function NavigationBar() {
	const router = useRouter()

	const { heroVisible } = useContext(HeroContext)

	const [dropdownOpen, setDropdownOpen] = useState(false)
	const [hamburgerOpen, setHamburgerOpen] = useState(false)

	const [transparent, setTransparent] = useState(true)

	const [fixed, setFixed] = useState(null)

	const [sliding, setSliding] = useState(false)

	const navRef = useRef()
	const dropdownContainerRef = useRef()

	const maxItemsShown = 4

	const [overflow, setOverflow] = useState()

	useEffect(() => {
		setOverflow(
			(
				dropdownContainerRef.current?.childElementCount > maxItemsShown
			).toString(),
		)
	}, [])

	Router.events.on("routeChangeComplete", () => {
		setHamburgerOpen(false)

		const willBeFixed = Boolean(
			dynamicFixedRoutes.find(
				(r) => `${router.pathname}/`.indexOf(r) != -1 && r != "/",
			),
		)
		navigationCheck(willBeFixed, true)
	})

	const dynamicFixedRoutes = ["/", "/blog/", "/game/"] // Routes which should always be fixed

	useEffect(() => {
		const willBeFixed = Boolean(
			dynamicFixedRoutes.find(
				(r) => `${router.pathname}/`.indexOf(r) != -1 && r != "/",
			),
		)

		navigationCheck(willBeFixed)
		if (router.pathname === "/") {
			setTransparent(heroVisible)
		}
	}, [heroVisible])

	useEffect(() => {
		setDropdownOpen(false)
	}, [hamburgerOpen])

	useEffect(() => {
		if (dropdownOpen) {
			document.addEventListener("click", handleDropdownOpen)
		}

		dropdownContainerRef.current.scrollTop = "0"

		return () => {
			document.removeEventListener("click", handleDropdownOpen)
		}
	}, [dropdownOpen])

	const slideDown = () => {
		setSliding(true)

		setTimeout(() => {
			setSliding(false)
		}, 50)
	}

	const navigationCheck = (willBeFixed, soft) => {
		if (router.pathname === "/") {
			setTransparent(true)
			setFixed(true)
		} else if (willBeFixed) {
			setTransparent(false)
			setFixed(true)
		} else {
			setTransparent(false)
			setFixed(!heroVisible)
			if (!heroVisible && !soft) slideDown()
		}
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
		scrollTo(0, 0)
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
			overflow={overflow}
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
						<button
							onClick={
								gameData?.length ? handleDropdownClick : null
							}
						>
							<a>
								Games <i></i>
							</a>
						</button>

						<Dropdown dropdownOpen={dropdownOpen}>
							<DropdownContainer
								onClick={handleNavigationClick}
								ref={dropdownContainerRef}
								overflow={overflow}
								maxItems={maxItemsShown}
								dropdownOpen={dropdownOpen}
								transparent={transparent}
							>
								{gameData?.map((game, key) => (
									<StyledDropdownLink
										platforms={[
											game["Platform"]["PC"]
												? "pc"
												: null,
											game["Platform"]["Mobile"]
												? "mobile"
												: null,
										]}
										key={key}
										logo={makeRealURI(game["Icon"]?.url)}
										link={`/game/${game["Slug"]}`}
									>
										{game["Name"]}
									</StyledDropdownLink>
								))}
							</DropdownContainer>
						</Dropdown>
					</li>
					<li>
						<Link href="/blog">
							<a onClick={handleNavigationClick}>Blog</a>
						</Link>
					</li>
					<li>
						<Link href="/#contact">
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
			position: relative;

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
`

const DropdownContainer = styled.div`
	scroll-snap-type: y mandatory;
	overflow-y: ${(props) => (props.overflow === "true" ? "scroll" : "hidden")};
	::-webkit-scrollbar {
		width: 4px;
		transform: translateX(-50%);
	}
	::-webkit-scrollbar-track {
		background: none;
	}
	::-webkit-scrollbar-thumb {
		background: ${(props) =>
			props.transparent ? "var(--orange)" : "#6e2cda"};
	}
	::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.2);
	}
	scrollbar-color: ${(props) =>
			props.transparent ? "var(--orange)" : "#6e2cda"}
		rgba(0, 0, 0, 0);
	scrollbar-width: thin;
	max-height: ${(props) =>
		props.dropdownOpen ? `calc((3.5rem * ${props.maxItems}) - 2px)` : "0"};
	transition: ${(props) =>
		props.dropdownOpen
			? "max-height 0.4s ease-in"
			: "max-height 0.25s ease-out"};
`

const StyledDropdownLink = styled(DropdownLink)``

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
	& > a img {
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

			position: relative;
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
			min-width: 30vw;

			position: absolute;
			top: calc(3.5rem + 1px);
			right: 0;
			transform: translateX(0.5rem);

			transition: max-height 0.4s ease-in;

			overflow: visible;

			${StyledDropdownLink} {
				position: relative;
				padding: 1rem;

				display: flex;
				align-items: center;

				background: ${(props) =>
					props.transparent ? "#6e2cda" : "#D6A781"};
				transition: 0.2s background ease;

				&::after {
					transform: translateX(-1rem);
				}
			}
		}

		${DropdownContainer} {
			::before {
				content: "";
				position: absolute;
				top: 1px;
				right: 0;

				transform: translateY(-100%)
					${(props) =>
						props.overflow === "true" ? `translateX(-6px)` : null};

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
