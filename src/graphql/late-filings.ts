import { Attributes, Data, LateFilings, Meta, Result } from "../types/late-filings";
import {
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

const MetaType = new GraphQLObjectType<Meta>({
    name: "Meta",
    fields: () => ({
        copyright: {
            type: GraphQLString,
        },
        terms: {
            type: new GraphQLList(GraphQLString),
        },
    })
})

const ResultType = new GraphQLObjectType<Result>({
    name: "Result",
    fields: () => ({
        FormType: {
            type: GraphQLString,
        },
        AcceptanceDate: {
            type: GraphQLString,
        },
        FilingDate: {
            type: GraphQLString,
        },
        Period: {
            type: GraphQLString,
        },
        AccessionNumber: {
            type: GraphQLString,
        },
        Ticker: {
            type: GraphQLString,
        },
        CIK: {
            type: GraphQLString,
        },
        Company: {
            type: GraphQLString,
        },
        Items: {
            type: new GraphQLList(GraphQLString),
        },
        SIC: {
            type: GraphQLInt,

        },
    })
})

const AttributeType = new GraphQLObjectType<Attributes>({
    name: "Attribute",
    fields: () => ({
        status: {
            type: GraphQLInt,
        },
        count: {
            type: GraphQLInt,
        },
        result: {
            type: new GraphQLList(ResultType),
        }
    })
})

const DataType = new GraphQLObjectType<Data>({
    name: "Data",
    fields: () => ({
        id: {
            type: GraphQLString,
        },
        type: {
            type: GraphQLString,
        },
        attributes: {
            type: new GraphQLList(AttributeType),
        }
    })
})

export const LateFilingsType = new GraphQLObjectType<LateFilings>({
    name: "LateFilings",
    description: "Returns recent 8-K Material Event SEC Filings made after the 5:30 pm EST deadline on the previous filing day.",
    fields: () => ({
        data: {
            type: DataType,
        },
        meta: {
            type: MetaType,
        }
    }),
});
