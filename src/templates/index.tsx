import { TrendingStock } from "../types/trending-stocks";
import { type HeadFC, PageProps } from "gatsby";
import * as React from "react";

type Props = PageProps<unknown, {trendingStocks: TrendingStock[]}>

const IndexPage = (props: Props) => {
	console.dir(props)
	return (
		<main>
			<h1>
				Welcome to Megatrend
			</h1>
			<section>
				<h2>Trending Stocks</h2>
				<ul>
					{props.pageContext.trendingStocks.map(stock => {
						return <li key={stock.Identifier}>
							<h3>{stock.Company}</h3>
							<span>{stock.Rank} - {stock.Score}</span>
						</li>
					})}
				</ul>
			</section>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
