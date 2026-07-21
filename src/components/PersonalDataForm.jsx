import { InputsForm, TitleForm, WrapperColumn, ErrorMessage } from './index.js'

export const PersonalDataForm = ({ register, errors }) => {
	return (
		<>
			<TitleForm $noMargin={true}>Dane osobowe</TitleForm>
			<WrapperColumn $noBgc={true} $noMargin={true}>
				<InputsForm type='text' placeholder='Imię' name='firstName' {...register('firstName')} />
				<ErrorMessage>{errors.firstName?.message}</ErrorMessage>
				<InputsForm type='text' placeholder='Nazwisko' name='lastName' {...register('lastName')} />
				<ErrorMessage>{errors.lastName?.message}</ErrorMessage>
				<InputsForm type='email' placeholder='E-mail' name='email' {...register('email')} />
				<ErrorMessage>{errors.email?.message}</ErrorMessage>
				<InputsForm type='number' placeholder='Numer telefonu' name='phoneNumber' {...register('phoneNumber')} />
				<ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
			</WrapperColumn>
		</>
	)
}
