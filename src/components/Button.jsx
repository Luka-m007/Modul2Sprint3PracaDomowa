import styled from 'styled-components'

const Btn = styled.button`
	width: 100%;
	padding: 10px 20px;
	background-color: #007eeb;
	color: black;
	border-radius: 5px;
	border: none;
`

export const Button = ({ children, ...rest }) => {
	return <Btn {...rest}>{children}</Btn>
}
