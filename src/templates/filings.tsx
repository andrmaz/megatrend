import { LateFilings } from "../types/late-filings";
import { path } from "../utils/constants";
import { formatStringDate } from "../utils/date";
import { css } from "@linaria/core";
import { tokens } from "@shopify/polaris-tokens";
import { PageProps } from "gatsby";
import * as React from "react";

type Props = PageProps<unknown, { lateFilings: LateFilings }>;

const Filings = (props: Props) => {
	return (
		<div className={wrapper}>
			<header className={header}>
				<h1 className={title}>Megatrend</h1>
				<nav className={navigation}>
					<a href={path.home} className={link}>
						Trending Stocks
					</a>
				</nav>
			</header>
			<main className={container}>
				<h2 className={subtitle}>Late Filings</h2>
				<div className={content}>
					{props.pageContext.lateFilings.data.attributes.result.map(
						(result, index) => {
							return (
								<article key={index + result.CIK} className={card}>
									<div className={heading}>
										<hgroup>
											<h3 className={ticker}>{result.SIC}</h3>
											<p className={company}>{result.Company}</p>
										</hgroup>
										<time>{formatStringDate(result.FilingDate)}</time>
									</div>
									<ul>
										{result.Items.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</article>
							);
						},
					)}
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
	background-color: ${tokens.color["color-bg-secondary-experimental"]};
	border-radius: ${tokens.border["border-radius-5"]};
	border: ${tokens.border["border-width-4"]} solid ${tokens.color["color-border"]};
	min-width: 300px;
	padding: ${tokens.space["space-4"]};
`;
const heading = css`
	align-items: baseline;
	display: flex;
	justify-content: space-between;
`;
const ticker = css`
	margin-top: 0;
`;
const company = css`
	margin-top: 0;
    width: 200px;
    text-overflow: ellipsis;
	text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
`;

export default Filings;
