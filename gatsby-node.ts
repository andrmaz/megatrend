import path from "path";
import type { GatsbyNode } from "gatsby"
import { queryLateFilings, queryTrendingStocks } from "./src/api/main";

/* export const createSchemaCustomization: GatsbyNode[`createSchemaCustomization`] = ({ actions }) => {
  const { createTypes } = actions
  createTypes(QueryType)
} */

export const onPreInit: GatsbyNode['onPreInit'] = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { server } = await import('./src/mocks/server')
    server.listen()
    console.info('Mock services started');
  }
}

export const createPages: GatsbyNode["createPages"] = async ({ actions: { createPage } }) => {
  const [trendingStocks, lateFilings] = await Promise.all([queryTrendingStocks(), queryLateFilings()])

  createPage({
    path: "/",
    component: path.resolve("./src/templates/index.tsx"),
    context: { trendingStocks },
  })

  createPage({
    path: "/filings",
    component: path.resolve("./src/templates/filings.tsx"),
    context: { lateFilings },
  })
}