import Paragraph from '../../../common-util/paragraph';
import CodePanel from '../../../common-util/code-panel';
import Section from './styles';

const Types = () => (
	<CodePanel heading="Only ~ 3.5K Gzipped">
		<Section>
			<Paragraph>The package contains one single minified build file.</Paragraph>
			<Paragraph>The SVG Icons and the Styles are built into the Code.</Paragraph>
			<Paragraph>Sourcemaps are also packed along.</Paragraph>
		</Section>
	</CodePanel>
);

export default Types;
