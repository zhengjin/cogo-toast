import CodePanel from '../../../common-util/code-panel';
import CodeBlock from '../../../common-util/code-block';
import { H4 } from '../../../common-util/headers';

import Section, { Group } from './styles';

const Types = () => (
	<CodePanel heading="Get Started, Plug &amp; Play">
		<Section>
			<Group>
				<H4>Install via NPM or Yarn</H4>
				<CodeBlock>
					<div>npm install --save cogo-toast</div>
					<div>yarn add cogo-toast</div>
				</CodeBlock>
			</Group>
			<Group>
				<H4>Usage</H4>
				<CodeBlock>
					<div>import cogoToast from 'cogo-toast';</div>
					<div>cogoToast.success("Success!");</div>
				</CodeBlock>
			</Group>
		</Section>
	</CodePanel>
);

export default Types;
