import '../styles/globals'
import { TrendingStock } from '../types/trending-stocks';
import { css } from '@linaria/core';
import { tokens } from '@shopify/polaris-tokens';
import { type HeadFC, PageProps } from 'gatsby';
import * as React from 'react';

type Props = PageProps<unknown, { trendingStocks: TrendingStock[] }>;

const IndexPage = (props: Props) => {
	return (
		<main className={wrapper}>
			<h1 className={title}>Welcome to Megatrend</h1>
			<section>
				<h2 className={subtitle}>Trending Stocks</h2>
				<div className={container}>
					{props.pageContext.trendingStocks.map((stock) => {
						return (
							<article key={stock.Identifier} className={card}>
								<h3>{stock.Company}</h3>
								<span>
									{stock.Rank} - {stock.Score}
								</span>
							</article>
						);
					})}
				</div>
			</section>
		</main>
	);
};

const wrapper = css`
	background-color: ${tokens.color['color-bg-app']};
	padding: ${tokens.space['space-16']};
`;
const title = css`
	color: ${tokens.color['color-text-primary']};
	font-size: ${tokens.font['font-size-600']};
	margin: 0;
`;
const container = css`
	display: flex;
	flex-wrap: wrap;
	gap: ${tokens.space['space-2']};
`
const subtitle = css`
	color: ${tokens.color['color-text-info-strong']};
	font-size: ${tokens.font['font-size-500']};
`;
const card = css`
	border-radius: ${tokens.border['border-radius-1']};
	border: ${tokens.border['border-width-4']} solid ${tokens.color['color-border']};
	padding: ${tokens.space['space-4']};
`

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
