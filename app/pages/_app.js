import App, { Container } from 'next/app';

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
				<Component {...pageProps} />
			</Container>
		);
	}
}

export default MyApp;
