import {QueryType} from './src/graphql/schema'
import type { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode[`createSchemaCustomization`] = ({ actions }) => {
  const { createTypes } = actions
  createTypes(QueryType)
}