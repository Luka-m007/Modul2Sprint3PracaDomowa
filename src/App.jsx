import { Form } from './components/Form'
import { Wrapper, MainTitle, SubmissionSummary } from './components/index.js'
import { useState } from 'react'
export function App() {
	const [submittedData, setSubmittedData] = useState(null)
	const isSubmitted = Boolean(submittedData)

	return (
		<section>
			<MainTitle>{isSubmitted ? 'Dane z formularza' : 'Formularz zgłoszeniowy na kurs programowania'}</MainTitle>
			<Wrapper>
				{isSubmitted ? <SubmissionSummary data={submittedData} /> : <Form onSubmitted={setSubmittedData} />}
			</Wrapper>
		</section>
	)
}
