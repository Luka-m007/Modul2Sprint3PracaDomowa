import styled from 'styled-components'
const WrapperRowDiv = styled.div`
	display: flex;
	flex-direction: row;
	margin: ${({ $noMargin }) => ($noMargin ? '0' : '16px 0')};
	gap: 8px;
	justify-content: flex-start;
	align-items: center;
	color: #ffffff;
`

export const WrapperRow = ({ children, $noMargin }) => {
	return <WrapperRowDiv $noMargin={$noMargin}>{children}</WrapperRowDiv>
}
