import styled from 'styled-components'

const HiddenCheckbox = styled.input`
	display: none;
`

const StyledCheckbox = styled.span`
	color: ${({ active }) => (active ? '#4ea8ff' : '#999')};

	font-weight: ${({ active }) => (active ? '700' : '400')};
	cursor: pointer;
`

export const TechnologySelectorForm = ({ active, children }) => {
	return (
		<label>
			<HiddenCheckbox type='checkbox' checked={active} />
			<StyledCheckbox active={active}>{children}</StyledCheckbox>
		</label>
	)
}
