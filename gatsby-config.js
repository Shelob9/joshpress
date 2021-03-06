module.exports = {
	siteMetadata: {
		title: 'Josh Pollock',
		description: 'Josh Pollock | Internet Blog',
		siteUrl: 'https://joshpress.net',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				baseUrl: 'joshpress.net',
				// The protocol. This can be http or https.
				protocol: 'https',
				hostingWPCOM: false,
				useACF: false,
				// Set how many pages are retrieved per API request.
				perPage: 25,
				// Search and Replace Urls across WordPress content.
				//searchAndReplaceContentUrls: {},
				// Set how many simultaneous requests are sent at once.
				concurrentRequests: 10,
				// Set WP REST API routes whitelists
				// and blacklists using glob patterns.
				// Defaults to whitelist the routes shown
				// in the example below.
				// See: https://github.com/isaacs/minimatch
				// Example:  `["/*/*/comments", "/yoast/**"]`
				// ` will either include or exclude routes ending in `comments` and
				// all routes that begin with `yoast` from fetch.
				// Whitelisted routes using glob patterns
				includedRoutes: [
					'**/categories',
					'**/posts',
					'**/pages',
					'**/media',
					'**/tags',
					'**/taxonomies',
					'**/users',
				],
				// Blacklisted routes using glob patterns
				// excludedRoutes: ["**/posts/1456"],
				// Set this to keep media sizes.
				// This option is particularly useful in case you need access to
				// URLs for thumbnails, or any other media detail.
				// Defaults to false
				keepMediaSizes: true,
				// use a custom normalizer which is applied after the built-in ones.
				normalizer: function({ entities }) {
					return entities
				},
			},
		},
		`gatsby-plugin-advanced-sitemap`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://joshpress.net',
				sitemap: 'https://joshpress.net/sitemap.xml',
				env: {
					development: {
						policy: [{ userAgent: '*', allow: ['/'] }],
					},
					production: {
						policy: [{ userAgent: '*', disallow: '/' }],
					},
				},
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Josh Pollock`,
				short_name: `Josh Pollock`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#3d4852`,
				display: `standalone`,
				icon: `src/img/icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				precachePages: [`/contact`],
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			// Removes unused css rules
			resolve: 'gatsby-plugin-purgecss',
			options: {
				// Activates purging in gatsby develop
				develop: true,
				// Purge only the main css file
				purgeOnly: ['/all.sass'],
			},
		}, // must be after other CSS plugins
		'gatsby-plugin-netlify', // make sure to keep it last in the array
	],
}
