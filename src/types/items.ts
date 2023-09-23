export interface Items {
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
	filing: Filing;
	count: number;
	result: Result[];
}

export interface Company {
	name: string;
	cik: string;
	ticker: string;
}

export interface Filing {
	accessionNumber: string;
	filingDate: Date;
	period: Date;
	formType: string;
	url: string;
}

export interface Result {
	Key: string;
	Value: string;
}

export interface Meta {
	copyright: string;
	terms: string[];
}
