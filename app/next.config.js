const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE, ANALYZE_LOG } = process.env;

module.exports = {
	webpack: (config, { dev, isServer }) => {
		if (dev) {
			config.devtool = 'cheap-module-source-map';
		}
		if (ANALYZE) {
			config.plugins.push(
				new BundleAnalyzerPlugin({
					analyzerMode: 'server',
					analyzerPort: isServer ? 8888 : 8889,
					openAnalyzer: true,
				}),
			);
		}
		if (ANALYZE_LOG) {
			config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'));
		}

		return config;
	},
};
