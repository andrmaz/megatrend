import { css } from "@linaria/core";
import { tokens } from "@shopify/polaris-tokens";
import { PageProps } from "gatsby";
import * as React from "react";
import { BalanceSheet as IBalanceSheet } from "../types/balance-sheet";
import { formatStringDate } from "../utils/date";
import { formatNumberCurrency } from "../utils/number";

type Props = PageProps<unknown, { balanceSheet: IBalanceSheet }>;

const BalanceSheet = (props: Props) => {
	const data = props.pageContext.balanceSheet.data;
	return (
		<div className={wrapper}>
			<header className={header}>
				<h1 className={title}>Megatrend</h1>
			</header>
			<main className={container}>
				<section>
					<h2>{data.attributes.filing.name}</h2>
					<hgroup role="group" aria-roledescription="Heading group">
						<h3>{data.attributes.company.name}</h3>
						<p aria-roledescription="subtitle">
							{data.attributes.company.ticker}
						</p>
					</hgroup>
					<i>
						Filing Date:{" "}
						<time>{formatStringDate(data.attributes.filing.filingDate)}</time>
					</i>
				</section>
				<dl>
					<div className={box}>
						<dt className={term}>Assets</dt>
						<dd className={amount}>
							{formatNumberCurrency(data.attributes.result.Assets)}
						</dd>
					</div>
					<div className={box}>
						<dt className={term}>Liabilities</dt>
						<dd className={amount}>
							{formatNumberCurrency(data.attributes.result.Liabilities)}
						</dd>
					</div>
					<div className={box}>
						<dt className={term}>Long Term Investments</dt>
						<dd className={amount}>
							{formatNumberCurrency(data.attributes.result.LongTermInvestments)}
						</dd>
					</div>
					<div className={box}>
						<dt className={term}>Short Term Investments</dt>
						<dd className={amount}>
							{formatNumberCurrency(
								data.attributes.result.ShortTermInvestments,
							)}
						</dd>
					</div>
				</dl>
			</main>
		</div>
	);
};

const wrapper = css`
	background-color: ${tokens.color["color-bg-app"]};
    height: 100%;
`;
const header = css`
	background-color: ${tokens.color["color-bg-primary-active"]};
	display: flex;
	padding: ${tokens.space["space-10"]};
	width: 100%;
`;
const container = css`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
	padding: ${tokens.space["space-10"]};
    width: 60%;
`;
const title = css`
	color: ${tokens.color["color-text-inverse"]};
	font-size: ${tokens.font["font-size-600"]};
	margin: 0;
`;
const box = css`
    border: ${tokens.border["border-width-1"]};
    box-shadow: ${tokens.shadow["shadow-lg"]};
    display: flex;
    margin-bottom: ${tokens.space["space-8"]};
    padding: ${tokens.space["space-8"]};
`;
const term = css`
    margin-right: ${tokens.space["space-4"]};
`;
const amount = css`
    font-size: ${tokens.font["font-size-400"]};
    margin-left: auto;
`;

export default BalanceSheet;
