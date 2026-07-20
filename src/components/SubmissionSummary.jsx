import { TitleForm } from './index.js'
import styled from 'styled-components'

const P = styled.p`
	color: #ffffff;
	margin: 16px 0;
`
const Div = styled.div`
	/* margin: 16px 0; */
`

const Li = styled.li`
	color: #ffffff;
	padding: 0;
	margin: 0;
	list-style-position: inside;
`

const Img = styled.img`
	width: 200px;
	height: auto;
	margin: 16px 0;
`

export const SubmissionSummary = ({ data }) => {
	return (
		<>
			<TitleForm>Dane osobowe:</TitleForm>
			<Div>
				<P>Imię: {data.firstName}</P>
				<P>Nazwisko: {data.lastName}</P>
				<P>Email: {data.email}</P>
				<P>Telefon: {data.phoneNumber}</P>
			</Div>
			<TitleForm>Doświadczenie w programowaniu:</TitleForm>
			<Div>
				<ul>
					{data.experienceEntries.map((el, index) => (
						<Li key={index}>
							Technologia: {el.technology} / poziom: {el.level}
						</Li>
					))}
				</ul>
			</Div>
			<TitleForm>Preferencje kursu:</TitleForm>
			<Div>
				<P>Typ kursu: {data.courseForm}</P>
				<P>Preferowane technolgie:</P>
				<ul>
					{data.technologies.map((tech, index) => (
						<Li key={index}>{tech}</Li>
					))}
				</ul>
			</Div>
			<TitleForm>Curriculum vitae:</TitleForm>
			<Img src={URL.createObjectURL(data.cv[0])} alt='CV' />
		</>
	)
}
