import styled from 'styled-components'

const WrapperColumnStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin: ${({ $noMargin }) => ($noMargin ? '0' : '16px 0')};
	background-color: ${({ $noBgc }) => ($noBgc ? 'transparent' : '#3d4a5a')};
`

export const WrapperColumn = ({ className, children, $noBgc, $noMargin }) => {
	return (
		<WrapperColumnStyled className={className} $noBgc={$noBgc} $noMargin={$noMargin}>
			{children}
		</WrapperColumnStyled>
	)
}
