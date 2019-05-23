import React from 'react';

import Container, { Anchor, Logo } from './styles';
import HeartIcon from './heart-icon';

const MadeWithLove = () => (
	<Anchor href="https://www.cogoport.com" target="_blank">
		<Container>
			Made with <HeartIcon />
			at
			<Logo
				src="https://www.cogoport.com/static/images/main_logo.svg"
				alt="Cogoport - Simplifying International Logistics"
			/>
		</Container>
	</Anchor>
);

export default MadeWithLove;
