import cogoToast from 'cogo-toast';

import CodePanel from '../../../common-util/code-panel';
import Button from '../../../common-util/button';
import Section, { Group } from './styles';

const positions = [
	'top-left',
	'top-center',
	'top-right',
	'bottom-left',
	'bottom-center',
	'bottom-right',
];

const showMessage = position => cogoToast.info('This is an info message.', { position });

const showMessageWithHeading = position => {
	cogoToast.info('This is an info message.', { position, heading: 'Information' });
};

const codeBlock = (
	<CodePanel.Block>
		{`cogoToast.info("This is an info message", { position: 'top-center', heading: 'Information' });`}
	</CodePanel.Block>
);

const Positions = () => (
	<CodePanel heading="Positions &amp; Heading" code={codeBlock}>
		<Section>
			{positions.map(position => (
				<Group key={position}>
					<Button className="info" onClick={() => showMessage(position)}>
						{position}
					</Button>
					<Button className="primary" onClick={() => showMessageWithHeading(position)}>
						With Heading
					</Button>
				</Group>
			))}
		</Section>
	</CodePanel>
);

export default Positions;
