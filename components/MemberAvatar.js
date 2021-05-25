import styled from "styled-components"

export default function MemberAvatar({ src, size }) {
	return (
		<AvatarContainer size={size}>
			<FrameContainer>
				<img src="/img/frame.png" />
			</FrameContainer>
			<PictureContainer>
				<img src={src} />
			</PictureContainer>
		</AvatarContainer>
	)
}

const AvatarContainer = styled.div`
	position: relative;
	display: inline-block;

	--size: ${(props) => props.size ?? "14rem"};
`

const FrameContainer = styled.div`
	height: var(--size);
	width: var(--size);

	position: absolute;
	top: 0;

	img {
		height: 100%;
		width: 100%;
	}
`

const PictureContainer = styled.div`
	height: var(--size);
	width: var(--size);

	clip-path: polygon(6% 74.5%, 69% 75%, 93% 9%, 30% 9%);

	img {
		object-fit: contain;
		height: 100%;
		width: 100%;
	}
`
