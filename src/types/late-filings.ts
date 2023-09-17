export interface LateFilings {
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
	count: number;
	result: Result[];
}

export interface Result {
	FormType: FormType;
	AcceptanceDate: Date;
	FilingDate: Date;
	Period: Date;
	AccessionNumber: string;
	Ticker?: string;
	CIK: string;
	Company: string;
	Items: string[];
	SIC: number;
}

export type FormType = "8-K";

export interface Meta {
	copyright: string;
	terms: string[];
}
