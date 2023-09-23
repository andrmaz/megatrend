import { useTrendingStocksQuery } from "../hooks/trending-stocks";
import { type HeadFC } from "gatsby";
import * as React from "react";

const IndexPage = () => {
	const data = useTrendingStocksQuery();
	return (
		<main>
			<h1>
				Congratulations
				<br />
				<span>— you just made a Gatsby site! 🎉🎉🎉</span>
			</h1>
			<section>{JSON.stringify(data.trendingStocks, null, 2)}</section>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
