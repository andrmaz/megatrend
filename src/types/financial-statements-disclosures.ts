export interface FinancialStatementsDisclosures {
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
	formType: string;
}

export interface Result {
	Id: string;
	HtmlFileName: string;
	Url: string;
	Section: Section;
	Name: string;
}

export type Section = "Statement" | "Document" | "Disclosure";

export interface Meta {
	copyright: string;
	terms: string[];
}
