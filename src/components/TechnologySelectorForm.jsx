import styled from 'styled-components'

const Label = styled.label`
	width: 100%;
	margin: 2px 0;
`

const HiddenCheckbox = styled.input`
	display: none;
`

const StyledCheckbox = styled.span`
	display: block;
	background: ${({ $active }) => ($active ? 'blue' : 'none')};
	cursor: pointer;
`

export const TechnologySelectorForm = ({ $active, children, onChange }) => {
	return (
		<Label>
			<HiddenCheckbox type='checkbox' checked={$active} onChange={onChange} />
			<StyledCheckbox $active={$active}>{children}</StyledCheckbox>
		</Label>
	)
}
