function formatStringDate(date: string) {
	return new Intl.DateTimeFormat("en-US", {
		year: "2-digit",
		month: "2-digit",
		day: "2-digit",
	}).format(new Date(date));
}

export { formatStringDate };
