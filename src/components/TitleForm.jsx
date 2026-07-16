import styled from 'styled-components'

const Titile = styled.h2`
	color: orange;
	font-size: 24px;
`

export const TitleForm = ({ children }) => {
	return <Titile>{children}</Titile>
}
