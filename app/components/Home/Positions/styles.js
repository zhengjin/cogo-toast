import styled from 'styled-components';

export default styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 20px;

	& > * {
		margin: 10px 15px;
		width: 150px;
	}
`;

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	& > * {
		margin: 10px 0px;
	}
`;
