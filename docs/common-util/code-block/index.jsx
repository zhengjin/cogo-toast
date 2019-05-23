import React from 'react';
import { node } from 'prop-types';
import Container from './styles';

const CodeBlock = ({ children }) => <Container>{children}</Container>;

CodeBlock.propTypes = {
	children: node,
};

CodeBlock.defaultProps = {
	children: '',
};

export default CodeBlock;
