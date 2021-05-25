import { useEffect, useState } from "react"
import styled from "styled-components"

export default function ScrollDown() {
    const [hidden, setHidden] = useState(false)

    const handleScroll = (e) => {
        if(window.scrollY >= 200) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
	return (
		<ArrowContainer opaque={hidden}>
			<img src="./img/icons/icon-scroll-arrow.svg" alt="go down" />
		</ArrowContainer>
	)
}

const ArrowContainer = styled.div`
	position: absolute;
	bottom: 4rem;

    z-index: 0;

	img {
        opacity: ${props => props.opaque ? '0' : '1'};
        transition: 0.2s opacity ease;
		animation: float 4s ease-in-out infinite;
	}

	@keyframes float {
		0% {
			transform: translatey(0px);
		}
		50% {
			transform: translatey(-20px);
		}
		100% {
			transform: translatey(0px);
		}
	}
`
