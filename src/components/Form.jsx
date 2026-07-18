import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { InputsForm, TitleForm, WrapperRow, WrapperColumn, TechnologySelectorForm, Button, ErrorMessage } from './index'

const technologies = ['React', 'Node.js', 'HTML', 'CSS', 'Next.js']

const schema = z.object({
	firstName: z.string().min(3, { message: 'Imię musi składać się conajmniej z 3 znaków' }),
	lastName: z.string().min(3, { message: 'Nazwisko musi składać się conajmniej z 3 znaków' }),
	email: z.string().email({ message: 'Nieprawidłowy adres email' }),
	phoneNumber: z.string().min(9, { message: 'Numer telefonu musi składać się z 9 cyfr' }),
	technologies: z.array(z.string()).min(1, { message: 'Wybierz przynajmniej jedną technologię' }),
	cv: z.any().refine(files => ['image/jpeg', 'image/png'].includes(files?.[0]?.type), {
		message: 'Musisz dodać załącznik jako zdjęcie.',
	}),
})

const defaultValues = {
	firstName: '',
	lastName: '',
	email: '',
	phoneNumber: '',
	courseForm: '',
	technologies: [],
	cv: null,
	experience: '',
}

console.log('defaultValues', defaultValues)

export const Form = () => {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		defaultValues,
	})

	console.log('errors', errors)
	console.log('watch', watch())
	console.log('register', register('firstName'))

	const selectedTechnologies = watch('technologies')

	const toggleTechnology = tech => {
		const newTechnologies = selectedTechnologies.includes(tech)
			? selectedTechnologies.filter(item => item !== tech)
			: [...selectedTechnologies, tech]
		setValue('technologies', newTechnologies, { shouldValidate: true })
	}
	console.log('selectedTechnologies', selectedTechnologies)

	const onSubmit = data => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TitleForm>Dane osobowe</TitleForm>
			<WrapperColumn $noBgc={true}>
				<InputsForm type='text' placeholder='Imię' name='firstName' {...register('firstName')} />
				<ErrorMessage>{errors.firstName?.message}</ErrorMessage>
				<InputsForm type='text' placeholder='Nazwisko' name='lastName' {...register('lastName')} />
				<ErrorMessage>{errors.lastName?.message}</ErrorMessage>
				<InputsForm type='email' placeholder='E-mail' name='email' {...register('email')} />
				<ErrorMessage>{errors.email?.message}</ErrorMessage>
				<InputsForm type='number' placeholder='Numer telefonu' name='phoneNumber' {...register('phoneNumber')} />
				<ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
			</WrapperColumn>

			<TitleForm>Preferencje kursu</TitleForm>
			<WrapperRow>
				<span>Wybierz formę nauki:</span>
				<InputsForm type='radio' id='stationary' name='courseForm' {...register('courseForm')} />
				<label htmlFor='stationary'>Stacjonarna</label>
				<InputsForm type='radio' id='online' name='courseForm' defaultChecked {...register('courseForm')} />
				<label htmlFor='online'>Online</label>
			</WrapperRow>
			<WrapperColumn>
				{technologies.map((tech, index) => (
					<WrapperRow key={index} $noMargin={true}>
						<TechnologySelectorForm
							$active={selectedTechnologies.includes(tech)}
							onChange={() => toggleTechnology(tech)}>
							{tech}
						</TechnologySelectorForm>
					</WrapperRow>
				))}
			</WrapperColumn>
			<ErrorMessage>{errors.technologies?.message}</ErrorMessage>
			<TitleForm>Dodaj swoje CV</TitleForm>
			<WrapperColumn $noBgc={true}>
				<InputsForm type='file' $noBgc={true} name='cv' {...register('cv')}></InputsForm>
				<ErrorMessage>{errors.cv?.message}</ErrorMessage>
			</WrapperColumn>
			<TitleForm>Doświadczenie w programowaniu</TitleForm>
			<Button type='submit'>Wyślij zgłoszenie</Button>
		</form>
	)
}
