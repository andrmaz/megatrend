import { TrendingStock } from "../types/trending-stocks";
import {
	GraphQLInt,
	GraphQLObjectType,
	GraphQLString,
} from "graphql";

export const TrendingStockType = new GraphQLObjectType<TrendingStock>({
	name: "TrendingStock",
	description: "Returns the top trending stocks on Last10K.com right now with the most viewed 10-K / 20-F / 40-F Annual Reports and 10-Q Quarterly SEC Filings.",
	fields: () => ({
		Company: {
			type: GraphQLString,
		},
		Identifier: {
			type: GraphQLString,
		},
		FilingDate: {
			type: GraphQLString,
		},
		Pagepath: {
			type: GraphQLString,
		},
		Pagetitle: {
			type: GraphQLString,
		},
		Score: {
			type: GraphQLInt,
		},
		Rank: {
			type: GraphQLInt,
		},
		AccessionNumber: {
			type: GraphQLString,
		},
	}),
});
