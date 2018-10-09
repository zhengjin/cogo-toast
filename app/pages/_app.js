import App, { Container } from 'next/app';
import Head from 'next/head';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		const { asPath, query = {} } = ctx;

		const initialProps = Component.getInitialProps
			? await Component.getInitialProps({ ...ctx })
			: {};
		const pageProps = { pathname: asPath, query, ...(initialProps || {}) };

		return { pageProps };
	}

	render() {
		const { Component, pageProps = {} } = this.props;

		return (
			<Container>
				<Head>
					<title>Beautiful, Zero Configuration, Toast Messages | CogoToast</title>
				</Head>
				<Component {...pageProps} />
			</Container>
		);
	}
}

export default MyApp;
