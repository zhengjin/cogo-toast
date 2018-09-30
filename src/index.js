import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Icons from './icons';
import styles from './styles.css';

const colors = {
	success: '#6EC05F',
	info: '#1271EC',
	warn: '#FED953',
	error: '#D60A2E',
	loading: '#0088ff',
};

const getDOMNodeFromReact = reactNode => {
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
		const bottomClass = `${styles.group} ${styles['flex-bottom']}`;
		document.body.appendChild(
			getDOMNodeFromReact(
				<div id="ct-container" className={styles.container}>
					<div id="ct-top" className={styles.row}>
						<div id="ct-top-left" className={styles.group} />
						<div id="ct-top-center" className={styles.group} />
						<div id="ct-top-right" className={styles.group} />
					</div>
					<div id="ct-bottom" className={styles.row}>
						<div id="ct-bottom-left" className={bottomClass} />
						<div id="ct-bottom-center" className={bottomClass} />
						<div id="ct-bottom-right" className={bottomClass} />
					</div>
				</div>,
			),
		);
	}

	const parentNode =
		document.body.clientWidth > 768
			? document.getElementById(`ct-${position}`)
			: document.getElementById(`ct-${position.includes('bottom') ? 'bottom' : 'top'}`);

	const CurrentIcon = Icons[type];
	const place = position.includes('bottom') ? 'Bottom' : 'Top';

	const toastClass = `${styles.toast}${onClick ? ` ${styles['cursor-pointer']}` : ''}`;
	const toastStyle = {
		borderLeft: `${bar.size || '3px'} ${bar.style || 'solid'} ${bar.color || colors[type]}`,
		opacity: 0,
		[`margin${place}`]: -15,
		paddingLeft: heading ? 25 : undefined,
		minHeight: heading ? 50 : undefined,
	};

	const toastNode = getDOMNodeFromReact(
		<div className={toastClass} style={toastStyle}>
			{icon ||
				(type !== 'loading' ? <CurrentIcon /> : <div className={styles['icon-loading']} />)}
			<div className={styles['text-group']} style={heading ? { marginLeft: 25 } : {}}>
				{heading && <h4 className={styles.heading}>{heading}</h4>}
				<div className={styles.text}>{text}</div>
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
	} else {
		return new Promise(resolve => {
			setTimeout(() => {
				hide();
				resolve();
			}, hideAfter * 1000);
		});
	}
};

const success = (text, options) => create(text, { ...options, type: 'success' });
const warn = (text, options) => create(text, { ...options, text, type: 'warn' });
const error = (text, options) => create(text, { ...options, text, type: 'error' });
const info = (text, options) => create(text, { ...options, text, type: 'info' });
const loading = (text, options) => create(text, { ...options, text, type: 'loading' });

export default { success, warn, error, info, loading, create };
