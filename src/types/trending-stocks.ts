export interface TrendingStock {
	company: string;
	identifier: string;
	filingDate: Date;
	pagePath: string;
	pageTitle: PageTitle;
	score: number;
	rank: number;
	accessionNumber?: string;
}

export type PageTitle =
	| "10K Annual Reports & 10Q SEC Filings | Last10K"
	| "10-K Annual Report Wed Feb 27 2013"
	| "10-K Annual Report Wed Feb 26 2014"
	| "10-K Annual Report Fri Feb 20 2015"
	| "10-K Annual Report Wed Mar 02 2011"
	| "10-K Annual Report Wed Feb 29 2012";
