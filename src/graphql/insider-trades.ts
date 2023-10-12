import {
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

const ResultType = new GraphQLObjectType({
    name: 'Result',
    fields: () => ({
        CIK: { type: GraphQLString },
        AccessionNumber: { type: GraphQLString },
        FilingDate: { type: GraphQLString },
        AcceptanceDate: { type: GraphQLString },
        Filename: { type: GraphQLString },
        Ticker: { type: GraphQLString },
        CompanyName: { type: GraphQLString },
        SIC: { type: GraphQLInt },
        Owner: { type: GraphQLString },
        Relationship: { type: GraphQLString },
        TransactionDate: { type: GraphQLString },
        TransactionType: { type: GraphQLString },
        Cost: { type: GraphQLFloat },
        Shares: { type: GraphQLFloat },
        PositionValue: { type: GraphQLFloat },
        SharesTotal: { type: GraphQLFloat },
        IsTenPercentOwner: { type: GraphQLBoolean },
        IsDirect: { type: GraphQLBoolean },
    }),
});

const AttributesType = new GraphQLObjectType({
    name: 'Attributes',
    fields: () => ({
        status: { type: GraphQLInt },
        count: { type: GraphQLInt },
        result: { type: new GraphQLList(ResultType) },
    }),
});

const DataType = new GraphQLObjectType({
    name: 'Data',
    fields: () => ({
        attributes: { type: AttributesType },
        type: { type: GraphQLString },
        id: { type: GraphQLString },
    }),
});

const MetaType = new GraphQLObjectType({
    name: 'Meta',
    fields: () => ({
        copyright: { type: GraphQLString },
        terms: { type: new GraphQLList(GraphQLString) },
    }),
});

export const InsiderTradesType = new GraphQLObjectType({
    name: 'InsiderTrades',
    description: "Returns an aggregated and summarized collection of the most recent BUY, SELL and OPTION EXERCISE insider trades filed with Form 4 SEC Filings.",
    fields: () => ({
        meta: { type: MetaType },
        data: { type: DataType },
    }),
});