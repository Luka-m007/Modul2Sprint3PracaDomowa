import { TitleForm, WrapperRow, WrapperColumn, InputsForm, TechnologySelectorForm, ErrorMessage } from './index'
import styled from 'styled-components'

const TechnologiesWrapperColumn = styled(WrapperColumn)`
	margin: 0 0 16px 0;
	border-radius: 5px;
	padding: 12px;
`

const TechnologiesWrapperRow = styled(WrapperRow)`
	margin: 13px 0;
`

export const CoursePreferencesForm = ({ register, technologies, selectedTechnologies, toggleTechnology, errors }) => {
	return (
		<>
			<TitleForm>Preferencje kursu</TitleForm>
			<WrapperColumn $noBgc={true} $noMargin={true}>
				<TechnologiesWrapperRow>
					<span>Wybierz formę nauki:</span>
					<InputsForm type='radio' id='stationary' name='courseForm' value='Stacjonarny' {...register('courseForm')} />
					<label htmlFor='stationary'>Stacjonarna</label>
					<InputsForm type='radio' id='online' name='courseForm' value='Online' {...register('courseForm')} />
					<label htmlFor='online'>Online</label>
				</TechnologiesWrapperRow>
				<TechnologiesWrapperColumn>
					{technologies.map((tech, index) => (
						<WrapperRow key={index} $noMargin={true}>
							<TechnologySelectorForm
								$active={selectedTechnologies.includes(tech)}
								onChange={() => toggleTechnology(tech)}>
								{tech}
							</TechnologySelectorForm>
						</WrapperRow>
					))}
				</TechnologiesWrapperColumn>
				<ErrorMessage>{errors.technologies?.message}</ErrorMessage>
			</WrapperColumn>
		</>
	)
}
