import { queryTrendingStocks } from "../api/main";
import { TrendingStockType } from "./trending-stock";
import { GraphQLList, GraphQLObjectType, GraphQLSchema } from "graphql";

export const QueryType = new GraphQLObjectType({
	name: "Query",
	description: "The root of all... queries",
	fields: () => ({
		trendingStocks: {
			type: new GraphQLList(TrendingStockType),
			resolve: queryTrendingStocks,
		},
	}),
});

export default new GraphQLSchema({
	query: QueryType,
});
