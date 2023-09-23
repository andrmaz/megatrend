import { TrendingStock } from '../types/trending-stocks';
import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLString
} from 'graphql';

export const TrendingStockType = new GraphQLObjectType<TrendingStock>({
  name: 'TrendingStock',
  description: 'Somebody that you used to know',
  fields: () => ({
    company: {
      type: GraphQLString,
      resolve: stock => stock.company,
    },
    identifier: {
      type: GraphQLString,
      resolve: stock => stock.identifier,
    },
    filingDate: {
      type: new GraphQLScalarType({name: 'date'}),
      resolve: stock => stock.filingDate,
    },
    pagePath: {
      type: GraphQLString,
      resolve: stock => stock.pagePath,
    },
    pageTitle: {
      type: GraphQLString,
      resolve: stock => stock.pageTitle,
    },
    score: {
      type: GraphQLInt,
      resolve: stock => stock.score,
    },
    rank: {
      type: GraphQLInt,
      resolve: stock => stock.rank,
    },
	accessionNumber: {
      type: GraphQLString,
      resolve: stock => stock.accessionNumber,
    },
  })
})