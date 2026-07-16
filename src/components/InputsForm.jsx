import styled from 'styled-components'

const Input = styled.input`
	padding: 10px;
	border-radius: 5px;
	background-color: ${({ $noBgc }) => ($noBgc ? 'transparent' : '#38385a')};
	/* background-color: #38385a; */
	color: #ffffff;
	margin: 10px 0;
	border: none;
`

export const InputsForm = ({ $noBgc, children, ...rest }) => {
	return (
		<Input $noBgc={$noBgc} {...rest}>
			{children}
		</Input>
	)
}
