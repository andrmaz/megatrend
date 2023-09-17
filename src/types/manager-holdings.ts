export interface ManagerHoldings {
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
	TotalMarketValue: number;
	TotalMarketValuePrevious: number;
	TotalMarketValuePercentChange: number;
	NewPurchases: Decreases;
	Increases: Decreases;
	Sold: Decreases;
	Decreases: Decreases;
	NoChanges: Decreases;
	Holdings: Holding[];
}

export interface Decreases {
	Count: number;
	Value: number;
}

export interface Holding {
	Ticker?: string;
	CUSIP: string;
	Issuer: string;
	Class: string;
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

export interface Meta {
	copyright: string;
	terms: string[];
}
