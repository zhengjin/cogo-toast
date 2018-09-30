import Container, { Anchor, Icon, Logo } from './styles';

const MadeWithLove = () => (
	<Anchor href="https://www.cogoport.com" target="_blank">
		<Container>
			Made with <Icon src="/static/images/heart.svg" alt="Love" /> at
			<Logo
				src="https://www.cogoport.com/static/images/main_logo.svg"
				alt="Cogoport - Simplifying International Logistics"
			/>
		</Container>
	</Anchor>
);

export default MadeWithLove;
