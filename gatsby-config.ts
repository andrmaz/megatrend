import dotenv from 'dotenv'
import type { GatsbyConfig } from "gatsby";

dotenv.config({ path: `.env.${process.env.NODE_ENV}`})

const config: GatsbyConfig = {
	siteMetadata: {
		title: "megatrend",
		siteUrl: "https://www.yourdomain.tld",
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-typescript",
		{
		resolve: 'gatsby-plugin-linaria',
		options: {
			extractCritical: true, // false by default.
		},
		}
	],
};

export default config;
