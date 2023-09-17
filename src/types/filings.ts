export interface Filings {
	meta: Meta;
	data: Data;
}

export interface Data {
	attributes: Attributes;
	type: string;
	id: string;
}

export interface Attributes {
	status: number;
	company: Company;
	count: number;
	result: Result[];
}

export interface Company {
	name: string;
	cik: string;
	ticker: string;
}

export interface Result {
	name: string;
	accessionNumber: string;
	filingDate: Date;
	period?: Date;
	formType: string;
	url: string;
}

export interface Meta {
	copyright: string;
	terms: string[];
}
