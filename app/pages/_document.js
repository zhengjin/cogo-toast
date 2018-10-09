import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

import mainStyles from '../components/Global-Styles';

injectGlobal`${mainStyles} ${styledNormalize}`;

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
						key="viewport"
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>

					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="/static/meta/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/static/meta/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/static/meta/favicon-16x16.png"
					/>
					<link rel="manifest" href="/static/meta/site.webmanifest" />
					<link
						rel="mask-icon"
						href="/static/meta/safari-pinned-tab.svg"
						color="#4cba70"
					/>

					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="theme-color" content="#ffffff" />

					<meta
						key="title"
						name="title"
						content="Beautiful, Zero Configuration, Toast Messages | CogoToast"
					/>

					<meta
						key="description"
						name="description"
						content="Open Source, Plug and Play - Toast Messages System for React. ~ 3.5K Gzipped (All Inclusive of Icons, Styles, and Code) No configuration required."
					/>

					<meta
						key="keywords"
						name="keywords"
						content="react,toast,react-toast,toast-react,toastr,toast messages,messages,notifications,react notifications,component,components,react component,react components,ui,cogoport,open source"
					/>

					<meta
						key="image"
						property="image"
						content="/static/meta/safari-pinned-tab.svg"
					/>

					<meta key="author" name="author" content="Cogoport" />

					<meta
						key="og:title"
						name="og:title"
						content="Beautiful, Zero Configuration, Toast Messages | CogoToast"
					/>

					<meta
						key="og:description"
						name="og:description"
						content="Open Source, Plug and Play - Toast Messages System for React. ~ 3.5K Gzipped (All Inclusive of Icons, Styles, and Code) No configuration required."
					/>

					<meta
						key="og:url"
						property="og:url"
						content="https://cogoport.github.io/cogo-toast"
					/>
					<meta
						key="og:image"
						property="og:image"
						content="/static/meta/safari-pinned-tab.svg"
					/>

					<meta
						key="twitter:site"
						name="twitter:site"
						content="https://cogoport.github.io/cogo-toast"
					/>
					<meta key="twitter:card" name="twitter:card" content="summary_large_image" />
					<meta
						key="twitter:image"
						name="twitter:image"
						content="/static/meta/safari-pinned-tab.svg"
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
