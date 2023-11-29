import path from "path";
import type { GatsbyNode } from "gatsby"
import { queryBalanceSheet, queryLateFilings, queryTrendingStocks } from "./src/api/main";
import { Path } from "./src/utils/constants";

export const onPreInit: GatsbyNode['onPreInit'] = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { server } = await import('./src/mocks/server')
    server.listen()
    console.info('Mock services started');
  }
}

export const createPages: GatsbyNode["createPages"] = async ({ actions: { createPage } }) => {
  const [trendingStocks, lateFilings, balanceSheet] = await Promise.all([queryTrendingStocks(), queryLateFilings(), queryBalanceSheet("msft")])

  createPage({
    path: Path.Home,
    component: path.resolve("./src/templates/index.tsx"),
    context: { trendingStocks },
  })

  createPage({
    path: Path.Filings,
    component: path.resolve("./src/templates/filings.tsx"),
    context: { lateFilings },
  })

  createPage({
    path: Path.Balance,
    component: path.resolve("./src/templates/balance-sheet.tsx"),
    context: { balanceSheet },
  })
}