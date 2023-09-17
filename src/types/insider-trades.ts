export interface InsiderTrades {
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
	CIK: string;
	AccessionNumber: string;
	FilingDate: Date;
	AcceptanceDate: Date;
	Filename: string;
	Ticker: string;
	CompanyName: string;
	SIC: number;
	Owner: string;
	Relationship: string;
	TransactionDate: Date;
	TransactionType: string;
	Cost: number;
	Shares: number;
	PositionValue: number;
	SharesTotal: number;
	IsTenPercentOwner: boolean;
	IsDirect: boolean;
}

export interface Meta {
	copyright: string;
	terms: string[];
}
