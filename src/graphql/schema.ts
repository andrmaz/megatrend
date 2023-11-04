import { GraphQLList, GraphQLObjectType, GraphQLSchema } from "graphql";
import {
	queryBalanceSheet,
	queryFilings,
	queryInsiderTrades,
	queryLateFilings,
	queryOperations,
	queryTrendingStocks,
} from "../api/main";
import { BalanceSheetType } from "./balance-sheet";
import { FilingsType } from "./filings";
import { InsiderTradesType } from "./insider-trades";
import { LateFilingsType } from "./late-filings";
import { OperationsType } from "./operations";
import { TrendingStockType } from "./trending-stock";

export const QueryType = new GraphQLObjectType({
	name: "Query",
	description: "The root of all... queries",
	fields: () => ({
		trendingStocks: {
			type: new GraphQLList(TrendingStockType),
			resolve: queryTrendingStocks,
		},
		/* filings: {
			type: FilingsType,
			resolve: queryFilings,
		},
		lateFilings: {
			type: LateFilingsType,
			resolve: queryLateFilings,
		},
		insiderTrades: {
			type: InsiderTradesType,
			resolve: queryInsiderTrades,
		},
		balanceSheet: {
			type: BalanceSheetType,
			resolve: queryBalanceSheet,
		},
		operations: {
			type: OperationsType,
			resolve: queryOperations,
		} */
	}),
});

export default new GraphQLSchema({
	query: QueryType,
});
