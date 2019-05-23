import styled from '@emotion/styled';

export default styled.div`
	flex: ${({ flex }) => (flex || 1)} !important;

	& > * {
		flex: 1;
		margin: ${({ spacing }) => (spacing || '10px')} 0px;

		&:first-child {
			margin-top: 0px;
		}

		&:last-child {
			margin-bottom: 0px;
		}
	}
`;
