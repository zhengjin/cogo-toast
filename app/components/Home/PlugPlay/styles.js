import styled from 'styled-components';

export default styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 20px 0px;

	& > * {
		margin: 10px 15px;
		min-width: 350px;
	}
`;

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;

	& > * {
		margin: 5px 0px;
	}
`;
