import styled from 'styled-components';
import colors from '../../../util/colors';

export default styled.div`
	width: 100%;
	background: ${colors.ACCENT_LIGHT};
	background: linear-gradient(to top, ${colors.ACCENT_LIGHT}, ${colors.ACCENT_DARK});
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px 30px;
`;

export const Row = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 15px 0px;
`;
