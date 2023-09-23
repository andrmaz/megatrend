import { TrendingStock } from '../types/trending-stocks'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export const useTrendingStocksQuery = () => {
  return useStaticQuery<{trendingStocks: TrendingStock[]}>(graphql`
		query TrendingStock {
			trendingStocks {
				company
				identifier
				filingDate
				pagePath
				pageTitle
				score
				rank
			}
		}
  	`)
}
