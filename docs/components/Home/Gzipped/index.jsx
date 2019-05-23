import React from 'react';

import Paragraph from '../../../common-util/paragraph';
import CodePanel from '../../../common-util/code-panel';
import Button from '../../../common-util/button';

import Section from './styles';

const Types = () => (
	<CodePanel heading="Only ~ 3.5K Gzipped">
		<Section>
			<Paragraph>
				The package contains one single minified build file, and its all inclusive!
			</Paragraph>
			<Paragraph>The SVG Icons and the Styles are packed along built into the Code.</Paragraph>
		</Section>
		<Section>
			<a href="https://github.com/Cogoport/cogo-toast" target="_blank">
				<Button className="info">Check out on Github!</Button>
			</a>
		</Section>
	</CodePanel>
);

export default Types;
