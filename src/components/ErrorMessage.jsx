import styled from 'styled-components'

const Span = styled.span`
	color: #ff0000;
	font-size: 12px;
	margin-top: -10px;
`

export const ErrorMessage = ({ children }) => {
	return <Span>{children}</Span>
}
