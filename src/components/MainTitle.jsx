import styled from 'styled-components'
const MainTitleH1 = styled.h1`
	color: #00a97d;
	margin-bottom: 20px;
`

export const MainTitle = ({ children }) => {
	return <MainTitleH1>{children}</MainTitleH1>
}
