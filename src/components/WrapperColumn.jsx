import styled from 'styled-components'

const WrapperColumnStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin: 16px 0;
`

export const WrapperColumn = ({ children }) => {
	return <WrapperColumnStyled>{children}</WrapperColumnStyled>
}
