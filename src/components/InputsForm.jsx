import styled from 'styled-components'

const Input = styled.input`
	padding: 10px;
	border-radius: 5px;
	background-color: ${({ $noBgc }) => ($noBgc ? 'transparent' : '#3d4a5a')};
	color: #ffffff;
	/* margin: 16px 0; */
	border: none;
	margin: ${({ $margin }) => $margin || '16px 0'};
`

export const InputsForm = ({ $noBgc, children, margin, ...rest }) => {
	return (
		<Input $noBgc={$noBgc} {...rest} margin={margin}>
			{children}
		</Input>
	)
}
