import Link from "next/link"
import React from "react"
import styled from "styled-components"

export default function SingularBlogPost({ data, short }) {
	const dt = new Date(data["PublishDate"])
	return (
		<BlogContainer short={short}>
			{short ? (
				<Link href="/blog/1">
					<a href="">
						<Heading short={short}>
							<Title>{data["Title"]}</Title>
							<DateInfo>May 25, 2021</DateInfo>
						</Heading>
					</a>
				</Link>
			) : (
				<Heading>
					<Title>{data["Title"]}</Title>
					<DateInfo>{`${dt.toLocaleDateString("default", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}`}</DateInfo>
				</Heading>
			)}

			<BlogContents>
				<h4>Lorem ipsum dolor sit amet consectetur.</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Corrupti temporibus officiis rem laudantium placeat
					inventore, veritatis veniam nam nulla sit culpa quos
					consequuntur asperiores!
				</p>
				<img src="/img/hero-img.png/" alt="" />

				<div>
					<img src="/img/hero-img.png/" alt="" />
					<div>
						<h5>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Soluta officiis mollitia odio?
						</h5>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Repudiandae porro omnis eaque quos dolores
							aperiam maiores? Ipsum labore voluptate minus
							corporis excepturi, nulla perspiciatis nemo est ab,
							nostrum reprehenderit consequatur? Asperiores quae
							voluptates, delectus dolorum aut quos, ea aliquid
							voluptas velit culpa quia voluptatum porro maiores
							ab modi voluptatem, ipsam necessitatibus minima
							deserunt! Animi commodi et optio voluptas eaque nam.
						</p>
					</div>
				</div>
				{short ? (
					<ReadMoreContainer>
						<Link href="/blog/something">
							<a href="">
								<ReadMore>Read More...</ReadMore>
							</a>
						</Link>
					</ReadMoreContainer>
				) : (
					<AllBlogsContainer>
						<Link href="/blog">
							<a href="">
								<AllBlogsButton>
									<img src="/img/icons/icon-arrow-btn.svg" />
									All Blogs
								</AllBlogsButton>
							</a>
						</Link>
					</AllBlogsContainer>
				)}
			</BlogContents>
		</BlogContainer>
	)
}

const Heading = styled.h6`
	padding: 1rem;
	min-height: ${(props) => (props.short ? "3rem" : "7.5rem")};

	background: var(--red);
	color: white;

	font-weight: bold;

	text-transform: capitalize;
	text-shadow: var(--text-shadow);

	display: flex;
	flex-direction: ${(props) => (props.short ? "row" : "column")};
	justify-content: ${(props) => (props.short ? "space-between" : "center")};
	align-items: center;

	* + * {
		margin-top: ${(props) => (props.short ? "0" : "0.5rem")};
	}
`

const Title = styled.p`
	font-size: 1rem;
	max-width: 40vw;
`
const DateInfo = styled.p`
	font-size: 0.8rem;
`

const BlogContents = styled.div`
	background: #ede0c7;
	color: var(--text-opaque);

	padding: 1rem;

	* + * {
		margin-top: 1rem;
	}

	& > img {
		margin: 4rem 0;
	}

	img {
		width: 100%;
		max-height: 70vh;
		object-fit: contain;
	}
`

const AllBlogsContainer = styled.div`
	width: 100%;
	a {
		text-decoration: none;
	}
`
const AllBlogsButton = styled.button`
	height: 2.5rem;
	background: linear-gradient(#ed8383, #cf6161);
	color: white;

	box-shadow: 0 3px 6px rgba(156, 50, 50, 0.37);

	text-shadow: var(--text-shadow);
	border-radius: 3.75rem;
	border: none;

	padding: 0 2.5rem;

	cursor: pointer;

	display: inline-flex;
	align-items: center;

	img {
		transform: translateY(10%);
		width: auto;
	}

	:hover {
		opacity: 0.8;
	}
`

const ReadMoreContainer = styled.div`
	width: 100%;

	margin-top: 4rem;

	a {
		text-decoration: none;
		:hover {
			opacity: 0.6;
		}
	}
`
const ReadMore = styled.p`
	color: var(--red);
	font-weight: bold;
	display: inline-flex;
`

const BlogContainer = styled.div`
	max-width: 95%;

	box-shadow: 0 3px 6px rgba(163, 154, 137, 0.12);

	margin: ${(props) => (props.short ? "2rem" : "")} auto;

	& > a {
		text-decoration: none;
	}

	@media (min-width: 1000px) {
		max-width: 60%;

		${BlogContents} {
			padding: 2rem;

			& > div:not(${AllBlogsContainer}) {
				& > * + * {
					margin-left: 2rem;
				}
				img {
					width: 50%;
					margin-top: 0;
					margin-bottom: 0;
				}
				display: flex;
				align-items: center;
				width: 100%;
			}

			& > ${AllBlogsContainer} {
				img {
					width: auto;
				}
			}
		}
	}
`
