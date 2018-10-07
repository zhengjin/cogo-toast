import styled from 'styled-components';

export default styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 20px 0px;
`;

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 10px;

	& > * {
		margin: 5px 0px;
	}
`;
