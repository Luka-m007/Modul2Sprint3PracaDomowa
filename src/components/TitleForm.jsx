import styled from 'styled-components'

const Title = styled.h2`
	color: #ffad48;
	font-size: 24px;
	margin-top: ${({ $noMargin }) => ($noMargin ? '0' : '13px')};
`

export const TitleForm = ({ children, $noMargin }) => {
	return <Title $noMargin={$noMargin}>{children}</Title>
}
