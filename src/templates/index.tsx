import { css } from "@linaria/core";
import { tokens } from "@shopify/polaris-tokens";
import { type HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { TrendingDown, TrendingUp } from "react-feather";
import "../styles/globals";
import { TrendingStock } from "../types/trending-stocks";
import { Path } from "../utils/constants";
import { formatStringDate } from "../utils/date";
import { isTrendingUp } from "../utils/math";

type Props = PageProps<unknown, { trendingStocks: TrendingStock[] }>;

const IndexPage = (props: Props) => {
	return (
		<div className={wrapper}>
			<header className={header}>
				<h1 className={title}>Megatrend</h1>
				<nav className={navigation}>
					<a href={Path.Filings} className={link}>
						Late Filings
					</a>
				</nav>
			</header>
			<main className={container}>
				<h2 className={subtitle}>Trending Stocks</h2>
				<div className={content}>
					{props.pageContext.trendingStocks.map((stock, index) => {
						return (
							<article key={index + stock.Identifier} className={card}>
								<div className={heading}>
									<hgroup>
										<h3 className={ticker}>{stock.Identifier}</h3>
										<p className={company}>{stock.Company}</p>
									</hgroup>
									<time>{formatStringDate(stock.FilingDate)}</time>
								</div>
								<span>Score: </span>
								<b>{stock.Score}</b>
								<i className={icon}>
									{isTrendingUp() ? (
										<TrendingUp color="green" />
									) : (
										<TrendingDown color="red" />
									)}
								</i>
							</article>
						);
					})}
				</div>
			</main>
		</div>
	);
};

const wrapper = css`
	background-color: ${tokens.color["color-bg-app"]};
`;
const header = css`
	background-color: ${tokens.color["color-bg-primary-active"]};
	display: flex;
	padding: ${tokens.space["space-10"]};
	width: 100%;
`;
const navigation = css`
	margin-left: auto;
`;
const link = css`
	color: ${tokens.color["color-text-inverse"]};
	font-size: ${tokens.font["font-line-height-3"]};
	text-decoration: none;
`;
const container = css`
	padding: ${tokens.space["space-10"]};
`;
const title = css`
	color: ${tokens.color["color-text-inverse"]};
	font-size: ${tokens.font["font-size-600"]};
	margin: 0;
`;
const content = css`
	display: flex;
	flex-wrap: wrap;
	gap: ${tokens.space["space-8"]};
`;
const subtitle = css`
	color: ${tokens.color["color-text-info-strong"]};
	margin-bottom: ${tokens.space["space-10"]};
	font-size: ${tokens.font["font-size-500"]};
`;
const card = css`
	background-color: ${tokens.color["color-bg-app-selected"]};
	border-radius: ${tokens.border["border-radius-5"]};
	border: ${tokens.border["border-width-4"]} solid ${tokens.color["color-border"]};
	box-shadow: ${tokens.shadow["shadow-lg"]};
	min-width: 300px;
	padding: ${tokens.space["space-4"]};
`;
const heading = css`
	align-items: baseline;
	display: flex;
	justify-content: space-between;
	margin-bottom: ${tokens.space["space-4"]};
`;
const ticker = css`
	margin-top: 0;
`;
const company = css`
	margin-top: 0;
    width: 200px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;
const icon = css`
	float: right;
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
