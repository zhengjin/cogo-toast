import { Component } from 'react';
import PropTypes from 'prop-types';

import Container, { Row, Icon, CodeParent } from './styles';
import { H3 } from '../headers';
import CodeBlock from '../code-block';

class CodePanel extends Component {
	state = { isOpen: false };

	toggleOpen = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

	render() {
		const { heading, code, children } = this.props;
		const { isOpen } = this.state;

		return (
			<Container>
				<Row>
					<H3>{heading}</H3>
					{code && (
						<Icon
							src="/static/images/code.svg"
							alt="See Code"
							onClick={this.toggleOpen}
						/>
					)}
				</Row>
				{isOpen && <CodeParent>{code}</CodeParent>}
				{children}
			</Container>
		);
	}
}

CodePanel.Block = CodeBlock;

CodePanel.propTypes = {
	heading: PropTypes.string.isRequired,
	code: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
};

export default CodePanel;
