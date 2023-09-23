export interface TrendingStocks {
	Company: string;
	Identifier: string;
	FilingDate: Date;
	Pagepath: string;
	Pagetitle: Pagetitle;
	Score: number;
	Rank: number;
	AccessionNumber?: string;
}

export type Pagetitle =
	| "10K Annual Reports & 10Q SEC Filings | Last10K"
	| "10-K Annual Report Wed Feb 27 2013"
	| "10-K Annual Report Wed Feb 26 2014"
	| "10-K Annual Report Fri Feb 20 2015"
	| "10-K Annual Report Wed Mar 02 2011"
	| "10-K Annual Report Wed Feb 29 2012";
