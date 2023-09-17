import { BalanceSheet } from "../types/balance-sheet";
import { CashFlows } from "../types/cash-flows";
import { defaultFilingOrder, defaultFormType } from "../utils/constants";
import { Filings } from "../types/filings";
import { FinancialStatementsDisclosures } from "../types/financial-statements-disclosures";
import { Income } from "../types/income";
import { InsiderTrades } from "../types/insider-trades";
import { Items } from "../types/items";
import { LateFilings } from "../types/late-filings";
import { ManagerHoldings } from "../types/manager-holdings";
import { ManagerOwnership } from "../types/manager-ownership";
import { Operations } from "../types/operations";
import { TrendingStocks } from "../types/trending-stocks";
import { query } from "../utils/fetch";

/**
 * Returns a list of SEC Filings for the requested company.
 * @param  {string} identifier the company id
 * @example queryFilings('aapl')
 */
async function queryFilings(identifier: string) {
	try {
		return await query<Filings>(`/company/filings?identifier=${identifier}`);
	} catch (error) {
		console.error(error);
	}
}

/**
 * Returns recent 8-K Material Event SEC Filings made after the 5:30pm EST deadline on the previous filing day.
 * The feed is updated live on Monday mornings because these filings do not become publicly available until Monday at 6am EST.
 */
async function queryLateFilings() {
	try {
		return await query<LateFilings>("/company/late-filings");
	} catch (error) {
		console.error(error);
	}
}

/**
 * Returns a list of financial statements and disclosures from a company's Annual or Quarterly report.
 * @param  {string} cik Central Index Key
 * @param  {string} accessionNumber SEC Filing Identifier
 * @example queryFinancialStatementsDisclosures('1616262', '0001437749-21-013850')
 */
async function queryFinancialStatementsDisclosures(
	cik: string,
	accessionNumber: string,
) {
	try {
		return await query<FinancialStatementsDisclosures>(
			`/company/sections?cik=${cik}&accessionNumber=${accessionNumber}`,
		);
	} catch (error) {
		console.error(error);
	}
}

/**
 * Returns a company's most recent balance sheet summarizing their liabilities, assets and shareholders' equity.
 * @param  {string} ticker Publicly traded company's stock symbol
 * @param  {} formType 10-K = Annual Report (default) | 10-Q = Quarterly Report
 * @param  {} filingOrder Retrieve an older financial statement by specifying number of filings to go back. For example, to retrieve the second to most recent filing, specify a filingOrder value of 1. By default, the most recent filing is returned (filingOrder = 0)
 * @example queryBalanceSheet('msft', '10-k', 0)
 */
async function queryBalanceSheet(
	ticker: string,
	formType = defaultFormType,
	filingOrder = defaultFilingOrder,
) {
	try {
		return await query<BalanceSheet>(
			`/company/balancesheet?ticker=${ticker}&formtype=${formType}&filingorder=${filingOrder}`,
		);
	} catch (error) {
		console.error(error);
	}
}

/**
 * Returns a company's most recent cash flow statement showing the amount of cash used and generated
 * @param  {string} ticker Publicly traded company's stock symbol
 * @param  {} formType 10-K = Annual Report (default) | 10-Q = Quarterly Report
 * @param  {} filingOrder Retrieve an older financial statement by specifying number of filings to go back. For example, to retrieve the second to most recent filing, specify a filingOrder value of 1. By default, the most recent filing is returned (filingOrder = 0)
 * @example queryCashFlows('msft', '10-k', 0)
 */
async function queryCashFlows(
	ticker: string,
	formType = defaultFormType,
	filingOrder = defaultFilingOrder,
) {
	try {
		return await query<CashFlows>(
			`/company/cashflows?ticker=${ticker}&formtype=${formType}&filingorder=${filingOrder}`,
		);
	} catch (error) {
		console.error(error);
	}
}

/**
 * Returns a company's most recent income statement detailing what they earn for providing their goods and services OR a statement of loss explaining where lost income occurred
 * @param  {string} ticker Publicly traded company's stock symbol
 * @param  {} formType 10-K = Annual Report (default) | 10-Q = Quarterly Report
 * @param  {} filingOrder Retrieve an older financial statement by specifying number of filings to go back. For example, to retrieve the second to most recent filing, specify a filingOrder value of 1. By default, the most recent filing is returned (filingOrder = 0)
 * @example queryIncome('msft', '10-k', 0)
 */
async function queryIncome(
	ticker: string,
	formType = defaultFormType,
	filingOrder = defaultFilingOrder,
) {
	try {
		return await query<Income>(
			`/company/income?ticker=${ticker}&formtype=${formType}&filingorder=${filingOrder}`,
		);
	} catch (error) {
		console.error(error);
	}
}

/**
 * Returns a company's most recent statement of operations showing how they balance costs with revenue
 * @param  {string} ticker Publicly traded company's stock symbol
 * @param  {} formType 10-K = Annual Report (default) | 10-Q = Quarterly Report
 * @param  {} filingOrder Retrieve an older financial statement by specifying number of filings to go back. For example, to retrieve the second to most recent filing, specify a filingOrder value of 1. By default, the most recent filing is returned (filingOrder = 0)
 * @example queryOperations('msft', '10-k', 0)
 */
async function queryOperations(
	ticker: string,
	formType = defaultFormType,
	filingOrder = defaultFilingOrder,
) {
	try {
		return await query<Operations>(
			`/company/operations?ticker=${ticker}&formtype=${formType}&filingorder=${filingOrder}`,
		);
	} catch (error) {
		console.error(error);
	}
}

/**
 * Returns an aggregated and summarized collection of the most recent BUY, SELL and OPTION EXERCISE insider trades filed with Form 4 SEC Filings.
 * @param  {string} ticker Publicly traded company's stock symbol. If not specified in the request, the endpoint will return insider trades for all companies on the most recent trading day
 * @example queryInsiderTrades('msft')
 */
async function queryInsiderTrades(ticker: string) {
	try {
		return await query<InsiderTrades>(
			`/company/insider-transactions?ticker=${ticker}`,
		);
	} catch (error) {
		console.error(error);
	}
}

/**
 * Returns an institutional manager's quarterly portfolio holdings including new, sold and changed positions by comparing current and previous 13F SEC Filings.
 * @param  {string} cik Central Index Key
 * @example queryManagerHoldings('1553540')
 */
async function queryManagerHoldings(cik: string) {
	try {
		return await query<ManagerHoldings>(`/company/manager-holdings?cik=${cik}`);
	} catch (error) {
		console.error(error);
	}
}

/**
 * Returns institutional managers positions in a stock including the number of managers that sold, increased, decreased and added a stock to their portfolio by comparing current and previous 13F SEC Filings.
 * @param  {string} ticker Publicly traded company's stock symbol. If not specified in the request, the endpoint will return insider trades for all companies on the most recent trading day
 * @example queryManagerOwnership('msft')
 */
async function queryManagerOwnership(ticker: string) {
	try {
		return await query<ManagerOwnership>(
			`/company/manager-ownership?ticker=${ticker}`,
		);
	} catch (error) {
		console.error(error);
	}
}

/**
 * Returns the top trending stocks on Last10K.com right now with the most viewed 10-K / 20-F / 40-F Annual Reports and 10-Q Quarterly SEC Filings.
 */
async function queryTrendingStocks() {
	try {
		return await query<TrendingStocks>("/app/analytics");
	} catch (error) {
		console.error(error);
	}
}

/**
 * Returns the content of each item in an entire 10-K Annual Report.
 * @param  {string} ticker Publicly traded company's stock symbol. If not specified in the request, the endpoint will return insider trades for all companies on the most recent trading day
 * @example queryItems('msft')
 */
async function queryItems(ticker: string) {
	try {
		return await query<Items>(`/company/items?ticker=${ticker}`);
	} catch (error) {
		console.error(error);
	}
}

export {
	queryFilings,
	queryLateFilings,
	queryFinancialStatementsDisclosures,
	queryBalanceSheet,
	queryCashFlows,
	queryIncome,
	queryOperations,
	queryInsiderTrades,
	queryManagerHoldings,
	queryManagerOwnership,
	queryTrendingStocks,
	queryItems,
};
