import React from "react"
import styled from "styled-components"

export default function Wrapper({ children }) {
	return <WrapperContainer>{children}</WrapperContainer>
}

const WrapperContainer = styled.div`
    padding: 2rem;
`