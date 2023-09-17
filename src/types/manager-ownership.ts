export interface ManagerOwnership {
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
	result: Result;
}

export interface Result {
	TotalHoldings: number;
	TotalHoldingsPrevious: number;
	TotalShares: number;
	TotalSharesPrevious: number;
	NewPurchases: Calls;
	Increases: Calls;
	Sold: Calls;
	Decreases: Calls;
	NoChanges: Calls;
	Puts: Calls;
	Calls: Calls;
	Holdings: Holding[];
}

export interface Calls {
	Count: number;
	Value: number;
}

export interface Holding {
	CIK: string;
	CompanyName: string;
	Ticker: Ticker;
	CUSIP: Cusip;
	Issuer: Issuer;
	Class: Class;
	PositionAmountCurrent: number;
	PositionValueCurrent: number;
	PositionAmountPrevious: number;
	PositionValuePrevious: number;
	ChangeInShares: number;
	PercentChange: number;
	IsPrincipleAmount: boolean;
	IsPut: boolean;
	IsCall: boolean;
	IsSold: boolean;
	IsNew: boolean;
	IsIncrease: boolean;
	IsDecrease: boolean;
	IsNoChange: boolean;
}

export type Cusip = "55616P104";

export type Class =
	| "COM"
	| "EQUITY"
	| "CMN"
	| "COM\n"
	| "Cmn"
	| "COMMON"
	| "Common Stock";

export type Issuer =
	| "MACYS INC"
	| "MACY'S INC"
	| "Macy's Inc."
	| "MACYS IN"
	| "Macy's Inc"
	| "MACYS   INC"
	| "MACY`S INC                  ";

export type Ticker = "M";

export interface Meta {
	copyright: string;
	terms: string[];
}
