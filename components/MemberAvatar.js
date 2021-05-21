import styled from "styled-components"

export default function MemberAvatar({ img, size }) {
	return (
		<AvatarContainer size={size}>
			<FrameContainer>
				<img src="./img/frame.png" />
			</FrameContainer>

			<PictureContainer>
				<img src="./img/crychair.png" />
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
	img {
		height: 100%;
		width: 100%;
	}
`

const PictureContainer = styled.div`
	position: absolute;
	top: 0;
	height: var(--size);
	width: var(--size);
	img {
		clip-path: polygon(30% 5%, 5% 78%, 24% 77%, 69% 77%, 78% 51%, 94% 5%);
		object-fit: contain;
		height: 100%;
		width: 100%;
	}
`
