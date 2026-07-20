import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import styled from 'styled-components'
import {
	InputsForm,
	TitleForm,
	WrapperRow,
	WrapperColumn,
	Button,
	ErrorMessage,
	ExperienceEntryForm,
	PersonalDataForm,
	CoursePreferencesForm,
} from './index'

const TechnologiesWrapperRow = styled(WrapperRow)`
	margin: 13px 0;
`

const technologies = ['React', 'Node.js', 'HTML', 'CSS', 'Next.js']
const initialExperienceEntry = {
	technology: 'JavaScript',
	level: '1',
}

const experienceSchema = z.object({
	technology: z.string(),
	level: z.string(),
})
const schema = z
	.object({
		firstName: z.string().min(3, { message: 'Imię musi składać się conajmniej z 3 znaków' }),
		lastName: z.string().min(3, { message: 'Nazwisko musi składać się conajmniej z 3 znaków' }),
		email: z.string().email({ message: 'Nieprawidłowy adres email' }),
		phoneNumber: z.string().min(9, { message: 'Numer telefonu musi składać się z 9 cyfr' }),
		courseForm: z.enum(['Stacjonarny', 'Online']),
		technologies: z.array(z.string()).min(1, { message: 'Wybierz przynajmniej jedną technologię' }),
		cv: z.any().refine(files => ['image/jpeg', 'image/png'].includes(files?.[0]?.type), {
			message: 'Musisz dodać załącznik jako zdjęcie.',
		}),
		hasExperience: z.boolean(),
		experienceEntries: z.array(experienceSchema),
	})
	.refine(data => !data.hasExperience || (data.experienceEntries.length ?? 0) > 0, {
		message: 'Gdy zanaczono doświadczenie w programowaniu, lista doświadczeń nie może być pusta.',
		path: ['experienceEntries'],
	})

const defaultValues = {
	firstName: '',
	lastName: '',
	email: '',
	phoneNumber: '',
	courseForm: 'Online',
	technologies: [],
	cv: null,
	hasExperience: false,
	experienceEntries: [],
}

console.log('defaultValues', defaultValues)

export const Form = ({ onSubmitted }) => {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		control,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		defaultValues,
	})

	console.log('errors', errors)
	console.log('watch', watch())
	console.log('register', register('firstName'))

	const { fields, append, remove } = useFieldArray({ name: 'experienceEntries', control })

	const isExperienced = watch('hasExperience')
	const selectedTechnologies = watch('technologies')

	const toggleTechnology = tech => {
		const newTechnologies = selectedTechnologies.includes(tech)
			? selectedTechnologies.filter(item => item !== tech)
			: [...selectedTechnologies, tech]
		setValue('technologies', newTechnologies, { shouldValidate: true })
	}
	console.log('selectedTechnologies', selectedTechnologies)

	const onSubmit = data => {
		onSubmitted(data)
		console.log('data', data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<PersonalDataForm register={register} errors={errors} />
			<CoursePreferencesForm
				register={register}
				technologies={technologies}
				selectedTechnologies={selectedTechnologies}
				toggleTechnology={toggleTechnology}
				errors={errors}
			/>
			<TitleForm>Dodaj swoje CV</TitleForm>
			<WrapperColumn $noBgc={true} $noMargin={true}>
				<InputsForm type='file' $noBgc={true} name='cv' $margin='13px 0' {...register('cv')}></InputsForm>
				<ErrorMessage>{errors.cv?.message}</ErrorMessage>
			</WrapperColumn>
			<TitleForm $noMargin={true}>Doświadczenie w programowaniu</TitleForm>
			<TechnologiesWrapperRow>
				<InputsForm type='checkbox' id='experience' {...register('hasExperience')} />
				<label htmlFor='experience'>Czy masz doświadczenie w programowaniu?</label>
			</TechnologiesWrapperRow>
			<WrapperColumn $noBgc={true} $noMargin={true}>
				{isExperienced && (
					<>
						<Button color='#00a97d' type='button' onClick={() => append(initialExperienceEntry)}>
							Dodaj doświadczenie
						</Button>
						<ErrorMessage>{errors.experienceEntries?.message}</ErrorMessage>
						<ExperienceEntryForm fields={fields} register={register} remove={remove} />
					</>
				)}
			</WrapperColumn>

			<Button type='submit'>Wyślij zgłoszenie</Button>
		</form>
	)
}
