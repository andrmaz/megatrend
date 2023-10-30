import {
	Attributes,
	Company,
	Data,
	Filings,
	Meta,
	Result,
} from "../types/filings";
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
	}),
});

const ResultType = new GraphQLObjectType<Result>({
	name: "Result",
	fields: () => ({
		name: {
			type: GraphQLString,
		},
		accessionNumber: {
			type: GraphQLString,
		},
		filingDate: {
			type: GraphQLString,
		},
		period: {
			type: GraphQLString,
		},
		formType: {
			type: GraphQLString,
		},
		url: {
			type: GraphQLString,
		},
	}),
});

const CompanyType = new GraphQLObjectType<Company>({
	name: "Company",
	fields: () => ({
		name: {
			type: GraphQLString,
		},
		cik: {
			type: GraphQLString,
		},
		ticker: {
			type: GraphQLString,
		},
	}),
});

const AttributeType = new GraphQLObjectType<Attributes>({
	name: "Attribute",
	fields: () => ({
		status: {
			type: GraphQLInt,
		},
		company: {
			type: CompanyType,
		},
		count: {
			type: GraphQLInt,
		},
		result: {
			type: new GraphQLList(ResultType),
		},
	}),
});

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
		},
	}),
});

export const FilingsType = new GraphQLObjectType<Filings>({
	name: "Filings",
	description: "Returns a list of SEC Filings for the requested company.",
	fields: () => ({
		data: {
			type: DataType,
		},
		meta: {
			type: MetaType,
		},
	}),
});
