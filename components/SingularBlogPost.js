import Link from "next/link"
import React from "react"
import styled from "styled-components"
import useParseMd from "../hooks/useParseMd"
import trimHtml from "trim-html"

export default function SingularBlogPost({ data, short }) {
	const dt = new Date(data["created_at"])
	let theContent = useParseMd(data["Content"])
	if (short) {
		theContent = trimHtml(theContent, {
			limit: 1750,
		})
	}
	return (
		<BlogContainer short={short}>
			{short ? (
				<Link href={`/blog/${data["Slug"]}`}>
					<a href="">
						<Heading short={short}>
							<Title>{data["Title"]}</Title>
							<DateInfo>{`${dt.toLocaleDateString("default", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}`}</DateInfo>
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
				<Text
					dangerouslySetInnerHTML={{
						__html: theContent.html ?? theContent,
					}}
				></Text>
				{short ? (
					<ReadMoreContainer>
						<Link href={`/blog/${data["Slug"]}`}>
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

const Text = styled.div`
	* + * {
		margin-top: 1rem;
	}

	& > img,
	& > video,
	& > source {
		margin: 4rem 0;
	}

	img,
	video,
	source {
		width: 100%;
		max-height: 70vh;
		object-fit: contain;
		margin: 1rem 0;
	}

	ul {
		padding: 1rem;
	}

	blockquote {
		padding: 1rem;
		background: rgba(0, 0, 0, 0.1);

		position: relative;
		&::before {
			content: "";

			position: absolute;
			top: 0;
			left: 0;

			width: 3px;
			height: 100%;

			background: var(--indigo);
		}

		line-height: 2;
	}



	pre,
	code {
		background: rgba(0, 0, 0, 0.05);
		outline: 1px solid rgba(0, 0, 0, 0.1);
		padding: 0.25rem;
	}

	pre > code {
		background: none;
		outline: none;
		padding: none;
	}
`

const BlogContents = styled.div`
	background: #ede0c7;
	color: var(--text-opaque);

	padding: 1rem;
`

const AllBlogsContainer = styled.div`
	width: 100%;
	padding-top: 2rem;
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

		${Text} {
			padding: 2rem;

			p {
				*:first-child:not(:last-child) {
					margin-top: 4rem;
				}
				*:last-child:not(:first-child) {
					margin-top: 4rem;
				}
				img,
				video {
					width: 50%;
					margin-top: 0;
					margin-bottom: 0;
				}

				img + *,
				video + * {
					margin-left: 1rem;
				}
				* + img,
				* + video {
					margin-left: 1rem;
				}

				span {
					margin-top: 0;
					font-size: calc(0.5vw + 0.5vh + 0.25vmin);
					text-align: center;
				}

				display: flex;
				align-items: center;
				width: 100%;
			}
		}
		${AllBlogsContainer} {
			padding: 1rem 2rem;

			img {
				width: auto;
			}
		}
	}
`
