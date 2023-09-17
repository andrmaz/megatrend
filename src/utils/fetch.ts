import { API_HOST, API_KEY, API_URL } from "../config/env";
import fetch, { RequestInit } from "node-fetch";

async function query<T>(
	path: string,
	options: RequestInit = {},
): Promise<Awaited<T>> {
	const response = await fetch(`${API_URL}${path}`, {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": API_KEY,
			"X-RapidAPI-Host": API_HOST,
		},
		...options,
	});
	const result = await response.json();
	return result;
}

export { query };
