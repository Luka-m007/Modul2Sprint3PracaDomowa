import styled from 'styled-components'

const WrapperDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	border-radius: 5px;
	background-color: #3c3d3c;
`

export const Wrapper = ({ children }) => {
	return <WrapperDiv>{children}</WrapperDiv>
}
