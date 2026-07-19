import styled from 'styled-components'

const Btn = styled.button`
	width: 100%;
	padding: 10px 20px;
	margin: 10px 0;
	/* background-color: #007eeb;
     */
	background-color: ${({ color }) => color || '#007eeb'};
	color: black;
	border-radius: 5px;
	border: none;
`

export const Button = ({ color, children, ...rest }) => {
	return (
		<Btn {...rest} color={color}>
			{children}
		</Btn>
	)
}
