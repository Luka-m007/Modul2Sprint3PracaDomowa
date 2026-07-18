import styled from 'styled-components'

const WrapperColumnStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin: 16px 0;
	background-color: ${({ $noBgc }) => ($noBgc ? 'transparent' : '#3d4a5a')};
`

export const WrapperColumn = ({ children, $noBgc }) => {
	return <WrapperColumnStyled $noBgc={$noBgc}>{children}</WrapperColumnStyled>
}
