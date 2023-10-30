import {
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLInt,
	GraphQLList,
	GraphQLObjectType,
	GraphQLString,
} from "graphql";

const CompanyType = new GraphQLObjectType({
	name: "Company",
	fields: {
		cik: { type: GraphQLString },
		name: { type: GraphQLString },
		ticker: { type: GraphQLString },
	},
});

const FilingType = new GraphQLObjectType({
	name: "Filing",
	fields: {
		accessionNumber: { type: GraphQLString },
		filingCount: { type: GraphQLInt },
		filingDate: { type: GraphQLString },
		name: { type: GraphQLString },
		period: { type: GraphQLString },
		source: { type: GraphQLString },
	},
});

const AttributesType = new GraphQLObjectType({
	name: "Attributes",
	fields: {
		company: { type: CompanyType },
		count: { type: GraphQLInt },
		filing: { type: FilingType },
		result: { type: new GraphQLList(GraphQLInt) },
		status: { type: GraphQLInt },
	},
});

const DataType = new GraphQLObjectType({
	name: "Data",
	fields: {
		attributes: { type: AttributesType },
		id: { type: GraphQLString },
		type: { type: GraphQLString },
	},
});

const MetaType = new GraphQLObjectType({
	name: "Meta",
	fields: {
		copyright: { type: GraphQLString },
		terms: { type: GraphQLString },
	},
});

export const OperationsType = new GraphQLObjectType({
	name: "Operations",
	description:
		"Returns a company's most recent statement of operations showing how they balance costs with revenue",
	fields: {
		data: { type: DataType },
		meta: { type: MetaType },
	},
});
