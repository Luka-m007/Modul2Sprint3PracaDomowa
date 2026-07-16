import { InputsForm, TitleForm, WrapperRow, WrapperColumn, TechnologySelectorForm } from './index'

const technologies = ['React', 'Node.js', 'HTML', 'CSS', 'Next.js']

export const Form = () => {
	return (
		<form>
			<TitleForm>Dane osobowe</TitleForm>
			<WrapperColumn>
				<InputsForm type='text' placeholder='Imię' />
				<InputsForm type='text' placeholder='Nazwisko' />
				<InputsForm type='email' placeholder='E-mail' />
				<InputsForm type='number' placeholder='Numer telefonu' />
			</WrapperColumn>

			<TitleForm>Preferencje kursu</TitleForm>
			<WrapperRow>
				<span>Wybierz formę nauki:</span>
				<InputsForm type='radio' id='frontend' name='courseForm' />
				<label htmlFor='frontend'>Frontend</label>
				<InputsForm type='radio' id='backend' name='courseForm' />
				<label htmlFor='backend'>Backend</label>
			</WrapperRow>
			<WrapperColumn>
				{technologies.map((tech, index) => (
					<WrapperRow key={index} $noMargin={true}>
						<TechnologySelectorForm active={false}>{tech}</TechnologySelectorForm>
					</WrapperRow>
				))}
			</WrapperColumn>

			<TitleForm>Dodaj swoje CV</TitleForm>
			<InputsForm type='file' $noBgc={true}></InputsForm>
			<TitleForm>Doświadczenie w programowaniu</TitleForm>
		</form>
	)
}
