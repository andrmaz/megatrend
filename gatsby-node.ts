import { queryLateFilings } from "./src/api/main";
import type { GatsbyNode } from "gatsby"
import path from "node:path";

export const onCreatePage: GatsbyNode['createPages'] = async ({
		actions: { createPage },
	}) => {
	const companies = await queryLateFilings()
	createPage({
		path: "/",
		component: path.resolve('src/pages/index.tsx'),
		context: { companies },
	});
}