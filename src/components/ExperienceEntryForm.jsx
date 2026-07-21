import { WrapperRow, Button } from './index.js'
import styled from 'styled-components'

const experienceTechnologies = ['JavaScript', 'Python', 'C++', 'Inne']
const experienceLevels = [1, 2, 3, 4, 5]

const StyledSelect = styled.select`
	padding: 8px;
	border-radius: 5px;
	border: none;
	background-color: #3d4a5a;
	color: #ffffff;
	flex: 1;
`
const StyledButton = styled(Button)`
	flex: 1;
`

const TechnologiesWrapperRow = styled(WrapperRow)`
	margin: 0 0 8px 0;
`

export const ExperienceEntryForm = ({ fields, register, remove }) => {
	return (
		<>
			{fields.map(({ id }, index) => (
				<TechnologiesWrapperRow key={id}>
					<StyledSelect {...register(`experienceEntries.${index}.technology`)}>
						{experienceTechnologies.map(tech => (
							<option key={tech} value={tech}>
								{tech}
							</option>
						))}
					</StyledSelect>
					<StyledSelect {...register(`experienceEntries.${index}.level`)}>
						{experienceLevels.map((lvl, idx) => (
							<option key={idx} value={lvl}>
								{lvl}
							</option>
						))}
					</StyledSelect>
					<StyledButton color='#ff0000' type='button' onClick={() => remove(index)}>
						Usuń
					</StyledButton>
				</TechnologiesWrapperRow>
			))}
		</>
	)
}
