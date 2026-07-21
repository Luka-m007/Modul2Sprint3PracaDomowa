import { TitleForm } from './index.js'
import styled from 'styled-components'

const P = styled.p`
	color: #ffffff;
	margin: 18px 0;
	font-size: 18px;
`
const Div = styled.div`
	padding: 10px 20px;
`

const Li = styled.li`
	color: #ffffff;
	padding: 0;
	margin: 5px 0;
	list-style-position: inside;
	font-size: 18px;
`

const Img = styled.img`
	width: 200px;
	height: auto;
	margin: 16px 0;
`

const Ul = styled.ul`
	margin: '18px 0';
`

export const SubmissionSummary = ({ data }) => {
	return (
		<Div>
			<TitleForm>Dane osobowe:</TitleForm>
			<div>
				<P>Imię: {data.firstName}</P>
				<P>Nazwisko: {data.lastName}</P>
				<P>Email: {data.email}</P>
				<P>Telefon: {data.phoneNumber}</P>
			</div>
			<TitleForm>Doświadczenie w programowaniu:</TitleForm>
			<div>
				<Ul>
					{data.experienceEntries.map((el, index) => (
						<Li key={index}>
							Technologia: {el.technology} / poziom: {el.level}
						</Li>
					))}
				</Ul>
			</div>
			<TitleForm>Preferencje kursu:</TitleForm>
			<div>
				<P>Typ kursu: {data.courseForm}</P>
				<P>Preferowane technolgie:</P>
				<ul>
					{data.technologies.map((tech, index) => (
						<Li key={index}>{tech}</Li>
					))}
				</ul>
			</div>
			<TitleForm>Curriculum vitae:</TitleForm>
			<Img src={URL.createObjectURL(data.cv[0])} alt='CV' />
		</Div>
	)
}
