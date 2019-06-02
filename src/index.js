import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Icons from './icons';
import './styles.css';

const colors = {
	success: '#6EC05F',
	info: '#3f85a8',
	warn: '#FED953',
	error: '#D60A2E',
	loading: '#0088ff',
};

const getDOMNodeFromReact = (reactNode) => {
	const div = document.createElement('div');
	div.innerHTML = ReactDOMServer.renderToString(reactNode).trim();
	return div.firstChild;
};

const create = (text, options) => {
	const {
		type = 'info',
		hideAfter = 3,
		heading,
		position = 'top-center',
		icon,
		bar = {},
		onClick,
	} = options;

	if (!document.getElementById('ct-container')) {
		document.body.appendChild(
			getDOMNodeFromReact(
				<div id="ct-container" className="ct-container">
					<div id="ct-top" className="ct-row">
						<div id="ct-top-left" className="ct-group" />
						<div id="ct-top-center" className="ct-group" />
						<div id="ct-top-right" className="ct-group" />
					</div>
					<div id="ct-bottom" className="ct-row">
						<div id="ct-bottom-left" className="ct-group ct-flex-bottom" />
						<div id="ct-bottom-center" className="ct-group ct-flex-bottom" />
						<div id="ct-bottom-right" className="ct-group ct-flex-bottom" />
					</div>
				</div>,
			),
		);
	}

	const parentNode =		document.body.clientWidth > 768
		? document.getElementById(`ct-${position}`)
		: document.getElementById(`ct-${position.includes('bottom') ? 'bottom' : 'top'}`);

	const CurrentIcon = Icons[type];
	const place = position.includes('bottom') ? 'Bottom' : 'Top';

	const toastClass = `ct-toast${onClick ? ' ct-cursor-pointer' : ''}`;

	const borderLeft = `${bar.size || '3px'} ${bar.style || 'solid'} ${bar.color || colors[type]}`;
	const marginType = `margin${place}`;

	const toastStyle = {
		paddingLeft: heading ? 25 : undefined,
		minHeight: heading ? 50 : undefined,
		opacity: 0,
		borderLeft,
		[marginType]: -15,
	};

	const toastNode = getDOMNodeFromReact(
		<div className={toastClass} style={toastStyle}>
			{icon || (type !== 'loading' ? <CurrentIcon /> : <div className="ct-icon-loading" />)}
			<div className="ct-text-group" style={heading ? { marginLeft: 25 } : {}}>
				{heading && <h4 className="ct-heading">{heading}</h4>}
				<div className="ct-text">{text}</div>
			</div>
		</div>,
	);

	if (onClick) {
		toastNode.addEventListener('click', onClick);
	}

	setTimeout(() => {
		toastNode.style.opacity = 1;
		toastNode.style[`margin-${place.toLowerCase()}`] = '15px';
	}, 10);

	parentNode.appendChild(toastNode);

	const hide = () => {
		toastNode.style.opacity = 0;
		toastNode.style[`margin-${place.toLowerCase()}`] = '-15px';
		setTimeout(() => parentNode.removeChild(toastNode), 300);
	};

	if (hideAfter <= 0) {
		return hide;
	}
	return new Promise((resolve) => {
		setTimeout(() => {
			hide();
			resolve();
		}, hideAfter * 1000);
	});
};

const success = (text, options) => create(text, { ...options, type: 'success' });
const warn = (text, options) => create(text, { ...options, text, type: 'warn' });
const error = (text, options) => create(text, { ...options, text, type: 'error' });
const info = (text, options) => create(text, { ...options, text, type: 'info' });
const loading = (text, options) => create(text, { ...options, text, type: 'loading' });

export default {
	success,
	warn,
	error,
	info,
	loading,
	create,
};
