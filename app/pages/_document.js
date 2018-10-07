import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

import mainStyles from '../components/Global-Styles';

injectGlobal`${styledNormalize} ${mainStyles}`;

export default class MyDocument extends Document {
	static getInitialProps({ pathname, renderPage, isServer }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();

		return { ...page, styleTags, pathname, isServer };
	}

	render() {
		return (
			<html>
				<Head>
					<title>Beautiful, Zero Configuration, Toast Messages | CogoToast</title>

					<meta
						name="title"
						key="title"
						content="Beautiful, Zero Configuration, Toast Messages | CogoToast"
					/>
					<meta
						name="viewport"
						key="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>

					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
					<script async defer src="https://buttons.github.io/buttons.js" />
				</body>
			</html>
		);
	}
}
