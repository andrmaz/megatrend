import { rest } from "msw";
import { API_URL } from "../config/env";
import {
	balanceSheet,
	filings,
	insiderTrades,
	lateFilings,
	operations,
	trendingStocks,
} from "./data";

export const handlers = [
	rest.get(`${API_URL}/app/analytics`, (req, res, ctx) => {
		return res(ctx.json(trendingStocks));
	}),
	rest.get(`${API_URL}/company/late-filings`, (req, res, ctx) => {
		return res(ctx.json(lateFilings));
	}),
	rest.get(`${API_URL}/company/filings`, (req, res, ctx) => {
		req.url.searchParams.get("identifier"); // aapl
		return res(ctx.json(filings));
	}),
	rest.get(`${API_URL}/company/insider-transactions`, (req, res, ctx) => {
		req.url.searchParams.get("ticker"); // eeft
		return res(ctx.json(insiderTrades));
	}),
	rest.get(`${API_URL}/company/operations`, (req, res, ctx) => {
		req.url.searchParams.get("ticker"); // amzn
		req.url.searchParams.get("formtype"); // 10-K
		req.url.searchParams.get("filingorder"); // 0
		return res(ctx.json(operations));
	}),
	rest.get(`${API_URL}/company/balancesheet`, (req, res, ctx) => {
		req.url.searchParams.get("ticker"); // msft
		req.url.searchParams.get("formtype"); // 10-K
		req.url.searchParams.get("filingorder"); // 0
		return res(ctx.json(balanceSheet));
	}),
];
