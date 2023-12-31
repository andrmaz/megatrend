export interface BalanceSheet {
	data: Data;
	meta: Meta;
}

export interface Data {
	attributes: Attributes;
	id: string;
	type: string;
}

export interface Attributes {
	company: Company;
	count: number;
	filing: Filing;
	result: { [key: string]: number };
	status: number;
}

export interface Company {
	cik: string;
	name: string;
	ticker: string;
}

export interface Filing {
	accessionNumber: string;
	filingCount: number;
	filingDate: string;
	name: string;
	period: string;
	source: string;
}

export interface Meta {
	copyright: string;
	terms: string;
}
