import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container, { Row, CodeParent } from './styles';
import { H3 } from '../headers';
import CodeBlock from '../code-block';
import CodeIcon from './code-icon';

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
					{code && <CodeIcon onClick={this.toggleOpen} />}
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
	children: PropTypes.node.isRequired,
	code: PropTypes.node,
};

CodePanel.defaultProps = {
	code: '',
};

export default CodePanel;
