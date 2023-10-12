import { BalanceSheet } from "../types/balance-sheet";
import { Filings } from "../types/filings";
import { InsiderTrades } from "../types/insider-trades";
import { LateFilings } from "../types/late-filings";
import { Operations } from "../types/operations";
import { TrendingStock } from "../types/trending-stocks";

export const trendingStocks: TrendingStock[] = [
    {
        "Company": "Meta Platforms, Inc.",
        "Identifier": "FB",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/fb",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 14,
        "Rank": 1
    },
    {
        "Company": "Alibaba Group Holding Ltd",
        "Identifier": "BABA",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/baba",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 13,
        "Rank": 2
    },
    {
        "Company": "Citigroup Inc",
        "Identifier": "C",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/c",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 11,
        "Rank": 3
    },
    {
        "Company": "Vertex Energy Inc.",
        "Identifier": "VTNR",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/vtnr",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 9,
        "Rank": 4
    },
    {
        "Company": "Camber Energy, Inc.",
        "Identifier": "CEI",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/cei",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 8,
        "Rank": 5
    },
    {
        "Company": "Glaxosmithkline Plc",
        "Identifier": "GSK",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/gsk",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 8,
        "Rank": 6
    },
    {
        "Company": "Mcdonalds Corp",
        "Identifier": "MCD",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/mcd",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 8,
        "Rank": 7
    },
    {
        "Company": "Palantir Technologies Inc.",
        "Identifier": "PLTR",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/pltr",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 8,
        "Rank": 8
    },
    {
        "Company": "Sea Ltd",
        "Identifier": "SE",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/se",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 8,
        "Rank": 9
    },
    {
        "Company": "Bank Of Montreal",
        "Identifier": "BMO",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/bmo",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 7,
        "Rank": 10
    },
    {
        "Company": "Walt Disney Co",
        "Identifier": "DIS",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/dis",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 7,
        "Rank": 11
    },
    {
        "Company": "Lee Enterprises, Inc",
        "Identifier": "LEE",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/lee",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 7,
        "Rank": 12
    },
    {
        "Company": "Nike Inc",
        "Identifier": "NKE",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/nke",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 7,
        "Rank": 13
    },
    {
        "Company": "Proto Labs Inc",
        "Identifier": "PRLB",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/prlb",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 7,
        "Rank": 14
    },
    {
        "Company": "Zendesk, Inc.",
        "Identifier": "ZEN",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/zen",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 7,
        "Rank": 15
    },
    {
        "Company": "Bank Bradesco",
        "Identifier": "BBD",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/bbd",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 6,
        "Rank": 16
    },
    {
        "Company": "Cnh Industrial N.V.",
        "Identifier": "CNHI",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/cnhi",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 6,
        "Rank": 17
    },
    {
        "Company": "Spotify Technology S.A.",
        "Identifier": "SPOT",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/spot",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 6,
        "Rank": 18
    },
    {
        "Company": "Acacia Communications, Inc.",
        "Identifier": "ACIA",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/acia",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 5,
        "Rank": 19
    },
    {
        "Company": "Cbre Group, Inc.",
        "Identifier": "CBRE",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/cbre",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 5,
        "Rank": 20
    },
    {
        "Company": "Capital One Financial Corp",
        "Identifier": "COF",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/cof",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 5,
        "Rank": 21
    },
    {
        "Company": "Digitalbridge Group, Inc.",
        "Identifier": "DBRG",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/dbrg",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 5,
        "Rank": 22
    },
    {
        "Company": "Fossil Group, Inc.",
        "Identifier": "FOSL",
        "AccessionNumber": "0001047469-13-001813",
        "FilingDate": "2013-02-27T00:00:00",
        "Pagepath": "/sec-filings/fosl/0001047469-13-001813.htm",
        "Pagetitle": "10-K Annual Report Wed Feb 27 2013",
        "Score": 5,
        "Rank": 23
    },
    {
        "Company": "Fossil Group, Inc.",
        "Identifier": "FOSL",
        "AccessionNumber": "0001047469-14-001392",
        "FilingDate": "2014-02-26T00:00:00",
        "Pagepath": "/sec-filings/fosl/0001047469-14-001392.htm",
        "Pagetitle": "10-K Annual Report Wed Feb 26 2014",
        "Score": 5,
        "Rank": 24
    },
    {
        "Company": "Fossil Group, Inc.",
        "Identifier": "FOSL",
        "AccessionNumber": "0001047469-15-000992",
        "FilingDate": "2015-02-20T00:00:00",
        "Pagepath": "/sec-filings/fosl/0001047469-15-000992.htm",
        "Pagetitle": "10-K Annual Report Fri Feb 20 2015",
        "Score": 5,
        "Rank": 25
    },
    {
        "Company": "Fossil Group, Inc.",
        "Identifier": "FOSL",
        "AccessionNumber": "0001193125-11-053553",
        "FilingDate": "2011-03-02T00:00:00",
        "Pagepath": "/sec-filings/fosl/0001193125-11-053553.htm",
        "Pagetitle": "10-K Annual Report Wed Mar 02 2011",
        "Score": 5,
        "Rank": 26
    },
    {
        "Company": "Fossil Group, Inc.",
        "Identifier": "FOSL",
        "AccessionNumber": "0001193125-12-089155",
        "FilingDate": "2012-02-29T00:00:00",
        "Pagepath": "/sec-filings/fosl/0001193125-12-089155.htm",
        "Pagetitle": "10-K Annual Report Wed Feb 29 2012",
        "Score": 5,
        "Rank": 27
    },
    {
        "Company": "Masco Corp",
        "Identifier": "MAS",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/mas",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 5,
        "Rank": 28
    },
    {
        "Company": "Royal Caribbean Cruises Ltd",
        "Identifier": "RCL",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/rcl",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 5,
        "Rank": 29
    },
    {
        "Company": "Sapiens International Corp N V",
        "Identifier": "SPNS",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/spns",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 5,
        "Rank": 30
    },
    {
        "Company": "Sinovac Biotech Ltd",
        "Identifier": "SVA",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/sva",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 5,
        "Rank": 31
    },
    {
        "Company": "Transdigm Group Inc",
        "Identifier": "TDG",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/tdg",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 5,
        "Rank": 32
    },
    {
        "Company": "Universal Technical Institute Inc",
        "Identifier": "UTI",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/uti",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 5,
        "Rank": 33
    },
    {
        "Company": "Walmart Inc.",
        "Identifier": "WMT",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/wmt",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 5,
        "Rank": 34
    },
    {
        "Company": "Abm Industries Inc",
        "Identifier": "ABM",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/abm",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 35
    },
    {
        "Company": "Advanced Micro Devices Inc",
        "Identifier": "AMD",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/amd",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 36
    },
    {
        "Company": "Calumet Specialty Products Partners, L.P.",
        "Identifier": "CLMT",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/clmt",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 37
    },
    {
        "Company": "Clearwire Corp De",
        "Identifier": "CLWR",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/clwr",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 38
    },
    {
        "Company": "Despegar.Com, Corp.",
        "Identifier": "DESP",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/desp",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 39
    },
    {
        "Company": "Fastenal Co",
        "Identifier": "FAST",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/fast",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 40
    },
    {
        "Company": "Goodyear Tire Rubber Co",
        "Identifier": "GT",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/gt",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 41
    },
    {
        "Company": "Iec Electronics Corp",
        "Identifier": "IEC",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/iec",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 42
    },
    {
        "Company": "J C Penney Co Inc",
        "Identifier": "JCP",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/jcp",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 43
    },
    {
        "Company": "Ikang Healthcare Group, Inc.",
        "Identifier": "KANG",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/kang",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 44
    },
    {
        "Company": "3M Co",
        "Identifier": "MMM",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/mmm",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 45
    },
    {
        "Company": "Optec International, Inc.",
        "Identifier": "OPTI",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/opti",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 46
    },
    {
        "Company": "Ossen Innovation Co. Ltd.",
        "Identifier": "OSN",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/osn",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 47
    },
    {
        "Company": "Occidental Petroleum Corp",
        "Identifier": "OXY",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/oxy",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 48
    },
    {
        "Company": "Roblox Corp",
        "Identifier": "RBLX",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/rblx",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 49
    },
    {
        "Company": "Sap Se",
        "Identifier": "SAP",
        "FilingDate": "0001-01-01T00:00:00",
        "Pagepath": "/sec-filings/sap",
        "Pagetitle": "10K Annual Reports & 10Q SEC Filings | Last10K",
        "Score": 4,
        "Rank": 50
    }
]

export const lateFilings: LateFilings = {
    "meta": {
        "copyright": "Copyright 2023 Last10K.com All Rights Reserverd",
        "terms": [
            "https://dev.last10k.com/terms",
            "https://www.sec.gov/privacy.htm#security"
        ]
    },
    "data": {
        "attributes": {
            "status": 0,
            "count": 65,
            "result": [
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T18:39:38",
                    "FilingDate": "2023-08-08T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001683168-23-005367",
                    "Ticker": "EDGM",
                    "CIK": "1652958",
                    "Company": "Edgemode, Inc.",
                    "Items": [
                        "New Agreement",
                        "New Financial Obligation",
                        "Unregistered Sales",
                        "Financial Exhibit"
                    ],
                    "SIC": 8082
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T17:10:01",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001213900-23-064125",
                    "Ticker": "ASNS",
                    "CIK": "1141284",
                    "Company": "ACTELIS NETWORKS INC",
                    "Items": [
                        "Vote of Security Holders"
                    ],
                    "SIC": 3669
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T17:00:36",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001213900-23-064105",
                    "Ticker": "DATS",
                    "CIK": "1648960",
                    "Company": "DatChat, Inc.",
                    "Items": [
                        "New Agreement",
                        "Unregistered Sales",
                        "Bylaw Change",
                        "Financial Exhibit"
                    ],
                    "SIC": 4822
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:52:46",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001140361-23-038344",
                    "Ticker": "KKR",
                    "CIK": "1404912",
                    "Company": "KKR  Co. Inc.",
                    "Items": [
                        "Event for Officers"
                    ],
                    "SIC": 6282
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:50:09",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001104659-23-088394",
                    "Ticker": "AMEH",
                    "CIK": "1083446",
                    "Company": "Apollo Medical Holdings, Inc.",
                    "Items": [
                        "Interim Review",
                        "Regulated Disclosure"
                    ],
                    "SIC": 8742
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:46:10",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001733998-23-000044",
                    "Ticker": "NWN",
                    "CIK": "1733998",
                    "Company": "Northwest Natural Holding Co",
                    "Items": [
                        "New Financial Obligation",
                        "Financial Exhibit"
                    ],
                    "SIC": 4924
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:46:10",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001733998-23-000044",
                    "CIK": "73020",
                    "Company": "NORTHWEST NATURAL GAS CO",
                    "Items": [
                        "New Financial Obligation",
                        "Financial Exhibit"
                    ],
                    "SIC": 4924
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:30:52",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001193125-23-205023",
                    "Ticker": "SNPS",
                    "CIK": "883241",
                    "Company": "SYNOPSYS INC",
                    "Items": [
                        "Event for Officers",
                        "Regulated Disclosure",
                        "Financial Exhibit"
                    ],
                    "SIC": 7372
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:26:38",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0000034067-23-000122",
                    "Ticker": "BOOM",
                    "CIK": "34067",
                    "Company": "DMC Global Inc.",
                    "Items": [
                        "Event for Officers",
                        "Regulated Disclosure",
                        "Financial Exhibit"
                    ],
                    "SIC": 3390
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:25:17",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001829126-23-005176",
                    "Ticker": "LUCY",
                    "CIK": "1808377",
                    "Company": "Innovative Eyewear Inc",
                    "Items": [
                        "Vote of Security Holders"
                    ],
                    "SIC": 3851
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:21:40",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001079973-23-001070",
                    "Ticker": "LCTC",
                    "CIK": "1493137",
                    "Company": "Lifeloc Technologies, Inc",
                    "Items": [
                        "Earnings Release",
                        "Financial Exhibit"
                    ],
                    "SIC": 3826
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:19:09",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0000313143-23-000037",
                    "Ticker": "HAE",
                    "CIK": "313143",
                    "Company": "HAEMONETICS CORP",
                    "Items": [
                        "Event for Officers",
                        "Vote of Security Holders",
                        "Financial Exhibit"
                    ],
                    "SIC": 3841
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:06:24",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0000950170-23-039053",
                    "CIK": "1803696",
                    "Company": "Adeia Inc.",
                    "Items": [
                        "Earnings Release",
                        "Event for Officers",
                        "Financial Exhibit"
                    ],
                    "SIC": 4841
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:05:40",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001628280-23-027757",
                    "Ticker": "LOV",
                    "CIK": "1705338",
                    "Company": "Spark Networks SE",
                    "Items": [
                        "New Agreement",
                        "Financial Exhibit"
                    ],
                    "SIC": 7200
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:05:37",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001193125-23-204956",
                    "Ticker": "MNOV",
                    "CIK": "1226616",
                    "Company": "MEDICINOVA INC",
                    "Items": [
                        "Event for Officers"
                    ],
                    "SIC": 2834
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:05:17",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0000950170-23-039043",
                    "Ticker": "ASMB",
                    "CIK": "1426800",
                    "Company": "ASSEMBLY BIOSCIENCES, INC.",
                    "Items": [
                        "New Agreement",
                        "New Financial Obligation"
                    ],
                    "SIC": 2834
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:05:09",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001683168-23-005355",
                    "Ticker": "LTRX",
                    "CIK": "1114925",
                    "Company": "LANTRONIX INC",
                    "Items": [
                        "Event for Officers",
                        "Regulated Disclosure",
                        "Financial Exhibit"
                    ],
                    "SIC": 3576
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:01:56",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001193125-23-204950",
                    "Ticker": "MPRA",
                    "CIK": "1853436",
                    "Company": "Mercato Partners Acquisition Corp",
                    "Items": [
                        "Other Events"
                    ],
                    "SIC": 6770
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T16:01:23",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001104659-23-088326",
                    "Ticker": "IBIO",
                    "CIK": "1420720",
                    "Company": "iBio, Inc.",
                    "Items": [
                        "New Agreement",
                        "Earnings Release",
                        "Security Holders Change"
                    ],
                    "SIC": 2834
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T09:22:27",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001065059-23-000046",
                    "Ticker": "LEU",
                    "CIK": "1065059",
                    "Company": "CENTRUS ENERGY CORP",
                    "Items": [
                        "Event for Officers",
                        "Financial Exhibit"
                    ],
                    "SIC": 1400
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T09:20:07",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001213900-23-063876",
                    "Ticker": "ORMP",
                    "CIK": "1176309",
                    "Company": "ORAMED PHARMACEUTICALS INC.",
                    "Items": [
                        "Other Events",
                        "Financial Exhibit"
                    ],
                    "SIC": 2834
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T09:02:20",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0000950170-23-038779",
                    "Ticker": "TSLA",
                    "CIK": "1318605",
                    "Company": "Tesla, Inc.",
                    "Items": [
                        "Event for Officers"
                    ],
                    "SIC": 3711
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T09:01:34",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001193125-23-204578",
                    "Ticker": "PSTX",
                    "CIK": "1661460",
                    "Company": "Poseida Therapeutics, Inc.",
                    "Items": [
                        "New Agreement",
                        "Unregistered Sales",
                        "Regulated Disclosure",
                        "Other Events",
                        "Financial Exhibit"
                    ],
                    "SIC": 2836
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T08:35:32",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001493152-23-026971",
                    "Ticker": "COWI",
                    "CIK": "1156784",
                    "Company": "CarbonMeta Technologies, Inc.",
                    "Items": [
                        "Financial Exhibit"
                    ],
                    "SIC": 7372
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T08:14:41",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001213900-23-063838",
                    "Ticker": "VII",
                    "CIK": "1826011",
                    "Company": "7GC  Co. Holdings Inc.",
                    "Items": [
                        "New Agreement",
                        "Regulated Disclosure",
                        "Financial Exhibit"
                    ],
                    "SIC": 6770
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T08:02:59",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001193125-23-204493",
                    "Ticker": "IKNA",
                    "CIK": "1835579",
                    "Company": "Ikena Oncology, Inc.",
                    "Items": [
                        "New Agreement",
                        "Change in Assets",
                        "Unregistered Sales",
                        "Bylaw Change",
                        "Regulated Disclosure",
                        "Financial Exhibit"
                    ],
                    "SIC": 2836
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T08:00:33",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001213900-23-063831",
                    "CIK": "1534155",
                    "Company": "Ameri Metro, Inc.",
                    "Items": [
                        "Event for Officers",
                        "Financial Exhibit"
                    ],
                    "SIC": 1600
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T08:00:12",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001683168-23-005320",
                    "Ticker": "FRLA",
                    "CIK": "1849294",
                    "Company": "Fortune Rise Acquisition Corp",
                    "Items": [
                        "New Financial Obligation",
                        "Unregistered Sales",
                        "Regulated Disclosure",
                        "Financial Exhibit"
                    ],
                    "SIC": 6770
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T07:38:49",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001213900-23-063824",
                    "Ticker": "FFIE",
                    "CIK": "1805521",
                    "Company": "FARADAY FUTURE INTELLIGENT ELECTRIC INC.",
                    "Items": [
                        "New Agreement",
                        "New Financial Obligation",
                        "Unregistered Sales",
                        "Financial Exhibit"
                    ],
                    "SIC": 3711
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T07:36:09",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0000950170-23-038744",
                    "Ticker": "VIRX",
                    "CIK": "1061027",
                    "Company": "Viracta Therapeutics, Inc.",
                    "Items": [
                        "Event for Officers",
                        "Regulated Disclosure",
                        "Financial Exhibit"
                    ],
                    "SIC": 2834
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T06:52:17",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001671284-23-000032",
                    "Ticker": "BHG",
                    "CIK": "1671284",
                    "Company": "Bright Health Group Inc.",
                    "Items": [
                        "New Agreement",
                        "New Financial Obligation",
                        "Unregistered Sales",
                        "Regulated Disclosure",
                        "Financial Exhibit"
                    ],
                    "SIC": 6324
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T06:26:20",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-06-30T00:00:00",
                    "AccessionNumber": "0001493152-23-026959",
                    "Ticker": "NOVV",
                    "CIK": "1858028",
                    "Company": "Nova Vision Acquisition Corp",
                    "Items": [
                        "Interim Review"
                    ],
                    "SIC": 6770
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T06:09:36",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001564708-23-000334",
                    "Ticker": "NWSA",
                    "CIK": "1564708",
                    "Company": "NEWS CORP",
                    "Items": [
                        "Other Events",
                        "Financial Exhibit"
                    ],
                    "SIC": 2711
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T06:03:37",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001104659-23-088006",
                    "Ticker": "O",
                    "CIK": "726728",
                    "Company": "REALTY INCOME CORP",
                    "Items": [
                        "Other Events",
                        "Financial Exhibit"
                    ],
                    "SIC": 6798
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-08-07T06:01:24",
                    "FilingDate": "2023-08-07T00:00:00",
                    "Period": "2023-08-04T00:00:00",
                    "AccessionNumber": "0001140361-23-038152",
                    "Ticker": "ACMR",
                    "CIK": "1680062",
                    "Company": "ACM Research, Inc.",
                    "Items": [
                        "Earnings Release",
                        "Regulated Disclosure",
                        "Financial Exhibit"
                    ],
                    "SIC": 3559
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T17:37:50",
                    "FilingDate": "2023-08-01T00:00:00",
                    "Period": "2023-07-21T00:00:00",
                    "AccessionNumber": "0001213900-23-061388",
                    "Ticker": "CLOE",
                    "CIK": "1849058",
                    "Company": "Clover Leaf Capital Corp.",
                    "Items": [
                        "Other Events",
                        "Financial Exhibit"
                    ],
                    "SIC": 6770
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T17:33:46",
                    "FilingDate": "2023-08-01T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001213900-23-061385",
                    "CIK": "914712",
                    "Company": "Steel Connect, Inc.",
                    "Items": [
                        "Event for Officers",
                        "Financial Exhibit"
                    ],
                    "SIC": 7389
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T17:30:14",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001493152-23-026121",
                    "Ticker": "LFMD",
                    "CIK": "948320",
                    "Company": "LifeMD, Inc.",
                    "Items": [
                        "Event for Officers"
                    ],
                    "SIC": 8011
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T17:01:40",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001104659-23-085870",
                    "Ticker": "RAD",
                    "CIK": "84129",
                    "Company": "RITE AID CORP",
                    "Items": [
                        "Event for Officers"
                    ],
                    "SIC": 5912
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T16:53:26",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001437749-23-021191",
                    "Ticker": "NPK",
                    "CIK": "80172",
                    "Company": "NATIONAL PRESTO INDUSTRIES INC",
                    "Items": [
                        "Earnings Release",
                        "Financial Exhibit"
                    ],
                    "SIC": 3480
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T16:46:45",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001520138-23-000304",
                    "Ticker": "FNGR",
                    "CIK": "1602409",
                    "Company": "FingerMotion, Inc.",
                    "Items": [
                        "Other Events",
                        "Financial Exhibit"
                    ],
                    "SIC": 7372
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T16:39:20",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001437749-23-021184",
                    "Ticker": "RGCO",
                    "CIK": "1069533",
                    "Company": "RGC RESOURCES INC",
                    "Items": [
                        "New Agreement",
                        "Financial Exhibit"
                    ],
                    "SIC": 4923
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T16:18:44",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001562151-23-000047",
                    "Ticker": "CWGL",
                    "CIK": "1562151",
                    "Company": "Crimson Wine Group, Ltd",
                    "Items": [
                        "Security Holders Change",
                        "Vote of Security Holders",
                        "Financial Exhibit"
                    ],
                    "SIC": 2080
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T16:11:04",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001023731-23-000110",
                    "Ticker": "EGHT",
                    "CIK": "1023731",
                    "Company": "8X8 INC",
                    "Items": [
                        "Vote of Security Holders"
                    ],
                    "SIC": 7374
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T16:10:31",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001558370-23-012560",
                    "Ticker": "NBSE",
                    "CIK": "1173281",
                    "Company": "NeuBase Therapeutics, Inc.",
                    "Items": [
                        "Event for Officers",
                        "Financial Exhibit"
                    ],
                    "SIC": 2834
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T16:05:53",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001193125-23-199108",
                    "Ticker": "FREQ",
                    "CIK": "1703647",
                    "Company": "Frequency Therapeutics, Inc.",
                    "Items": [
                        "Event for Officers",
                        "Financial Exhibit"
                    ],
                    "SIC": 2834
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T16:05:04",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0000772406-23-000041",
                    "Ticker": "CRUS",
                    "CIK": "772406",
                    "Company": "CIRRUS LOGIC, INC.",
                    "Items": [
                        "Vote of Security Holders"
                    ],
                    "SIC": 3674
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T15:52:50",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001279569-23-000954",
                    "Ticker": "FFNTF",
                    "CIK": "1783875",
                    "Company": "4Front Ventures Corp.",
                    "Items": [
                        "Earnings Release",
                        "Financial Exhibit"
                    ],
                    "SIC": 2833
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T15:47:34",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001213900-23-061267",
                    "Ticker": "AKOM",
                    "CIK": "1590496",
                    "Company": "Aerkomm Inc.",
                    "Items": [
                        "Regulated Disclosure",
                        "Financial Exhibit"
                    ],
                    "SIC": 4899
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T14:07:43",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001193125-23-198907",
                    "Ticker": "CPSI",
                    "CIK": "1169445",
                    "Company": "COMPUTER PROGRAMS  SYSTEMS INC",
                    "Items": [
                        "Event for Officers",
                        "Financial Exhibit"
                    ],
                    "SIC": 7371
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T12:59:40",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001662972-23-000087",
                    "CIK": "1662972",
                    "Company": "Blackstone Real Estate Income Trust, Inc.",
                    "Items": [
                        "Regulated Disclosure"
                    ],
                    "SIC": 6798
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T10:50:22",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001104659-23-085676",
                    "Ticker": "RSSS",
                    "CIK": "1386301",
                    "Company": "Research Solutions, Inc.",
                    "Items": [
                        "New Agreement",
                        "New Financial Obligation",
                        "Financial Exhibit"
                    ],
                    "SIC": 7389
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T09:40:10",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001493152-23-026024",
                    "Ticker": "MEDS",
                    "CIK": "1382574",
                    "Company": "TRxADE HEALTH, INC",
                    "Items": [
                        "New Agreement",
                        "Change in Assets",
                        "Event for Officers",
                        "Regulated Disclosure",
                        "Other Events",
                        "Financial Exhibit"
                    ],
                    "SIC": 5122
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T09:06:59",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001193125-23-198647",
                    "Ticker": "FTDR",
                    "CIK": "1727263",
                    "Company": "Frontdoor, Inc.",
                    "Items": [
                        "Event for Officers",
                        "Financial Exhibit"
                    ],
                    "SIC": 7340
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T08:45:13",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001437749-23-021101",
                    "Ticker": "AMTX",
                    "CIK": "738214",
                    "Company": "AEMETIS, INC",
                    "Items": [
                        "New Agreement",
                        "New Financial Obligation",
                        "Regulated Disclosure",
                        "Financial Exhibit"
                    ],
                    "SIC": 2860
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T08:40:55",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001558370-23-012508",
                    "Ticker": "MBIO",
                    "CIK": "1680048",
                    "Company": "MUSTANG BIO, INC.",
                    "Items": [
                        "New Agreement",
                        "Change in Assets",
                        "Financial Exhibit"
                    ],
                    "SIC": 2834
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T08:28:56",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001104659-23-085617",
                    "Ticker": "CKPT",
                    "CIK": "1651407",
                    "Company": "Checkpoint Therapeutics, Inc.",
                    "Items": [
                        "New Agreement",
                        "Other Events",
                        "Financial Exhibit"
                    ],
                    "SIC": 2834
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T08:01:45",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001368148-23-000075",
                    "Ticker": "ATHX",
                    "CIK": "1368148",
                    "Company": "ATHERSYS, INC  NEW",
                    "Items": [
                        "Listing Status"
                    ],
                    "SIC": 2834
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T07:08:08",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001564708-23-000324",
                    "Ticker": "NWSA",
                    "CIK": "1564708",
                    "Company": "NEWS CORP",
                    "Items": [
                        "Other Events",
                        "Financial Exhibit"
                    ],
                    "SIC": 2711
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T07:01:29",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001193125-23-198543",
                    "Ticker": "RETA",
                    "CIK": "1358762",
                    "Company": "REATA PHARMACEUTICALS INC",
                    "Items": [
                        "New Agreement",
                        "Other Events",
                        "Financial Exhibit"
                    ],
                    "SIC": 2834
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T07:01:19",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001213900-23-061007",
                    "CIK": "1950803",
                    "Company": "Stepstone Private Credit Fund LLC",
                    "Items": [
                        "Unregistered Sales",
                        "Other Events",
                        "Financial Exhibit"
                    ],
                    "SIC": 0
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T07:00:30",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001193125-23-198542",
                    "Ticker": "BIIB",
                    "CIK": "875045",
                    "Company": "BIOGEN INC.",
                    "Items": [
                        "New Agreement",
                        "Bylaw Change",
                        "Financial Exhibit"
                    ],
                    "SIC": 2836
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T07:00:25",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001104659-23-085578",
                    "Ticker": "TELL",
                    "CIK": "61398",
                    "Company": "TELLURIAN INC.",
                    "Items": [
                        "New Agreement",
                        "Security Holders Change",
                        "Vote of Security Holders",
                        "Financial Exhibit"
                    ],
                    "SIC": 1311
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T06:26:49",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001915657-23-000051",
                    "Ticker": "DINO",
                    "CIK": "1915657",
                    "Company": "HF Sinclair Corp",
                    "Items": [
                        "New Agreement",
                        "Financial Exhibit"
                    ],
                    "SIC": 4610
                },
                {
                    "FormType": "8-K",
                    "AcceptanceDate": "2023-07-31T06:18:03",
                    "FilingDate": "2023-07-31T00:00:00",
                    "Period": "2023-07-28T00:00:00",
                    "AccessionNumber": "0001193125-23-198499",
                    "Ticker": "BSAQ",
                    "CIK": "1851908",
                    "Company": "Black Spade Acquisition Co",
                    "Items": [
                        "Regulated Disclosure",
                        "Financial Exhibit"
                    ],
                    "SIC": 6770
                }
            ]
        },
        "type": "filings",
        "id": "806b3e6d-a685-4fa0-adfe-157c2a733c3b"
    }
}

export const filings: Filings = {
    "meta": {
        "copyright": "Copyright 2022 Last10K.com All Rights Reserverd",
        "terms": [
            "https://dev.last10k.com/terms",
            "https://www.sec.gov/privacy.htm#security"
        ]
    },
    "data": {
        "attributes": {
            "status": 0,
            "company": {
                "name": "Apple Inc.",
                "cik": "320193",
                "ticker": "aapl"
            },
            "count": 350,
            "result": [
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-21-328151",
                    "filingDate": "2021-11-12T00:00:00",
                    "period": "2021-11-09T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521328151/d259993d8k.htm"
                },
                {
                    "name": "S-3ASR Report",
                    "accessionNumber": "0001193125-21-312274",
                    "filingDate": "2021-10-29T00:00:00",
                    "formType": "S-3ASR",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521312274/d192862ds3asr.htm"
                },
                {
                    "name": "IRANNOTICE Report",
                    "accessionNumber": "0001193125-21-311635",
                    "filingDate": "2021-10-29T00:00:00",
                    "formType": "IRANNOTICE",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521311635/d246143dirannotice.htm"
                },
                {
                    "name": "Annual Report",
                    "accessionNumber": "0000320193-21-000105",
                    "filingDate": "2021-10-29T00:00:00",
                    "period": "2021-09-25T00:00:00",
                    "formType": "10-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/aapl-20210925.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-21-000104",
                    "filingDate": "2021-10-28T00:00:00",
                    "period": "2021-10-28T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019321000104/aapl-20211028.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-21-237787",
                    "filingDate": "2021-08-05T00:00:00",
                    "period": "2021-07-29T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521237787/d199884d8k.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-21-231584",
                    "filingDate": "2021-07-30T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521231584/d175814d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-21-229470",
                    "filingDate": "2021-07-30T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521229470/d202672dfwp.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-21-228285",
                    "filingDate": "2021-07-29T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521228285/d175814d424b2.htm"
                },
                {
                    "name": "IRANNOTICE Report",
                    "accessionNumber": "0001193125-21-225983",
                    "filingDate": "2021-07-28T00:00:00",
                    "formType": "IRANNOTICE",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521225983/d198818dirannotice.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0000320193-21-000065",
                    "filingDate": "2021-07-28T00:00:00",
                    "period": "2021-06-26T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019321000065/aapl-20210626.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-21-000063",
                    "filingDate": "2021-07-27T00:00:00",
                    "period": "2021-07-27T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019321000063/aapl-20210727.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0000320193-21-000056",
                    "filingDate": "2021-04-29T00:00:00",
                    "period": "2021-03-27T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019321000056/aapl-20210327.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-21-000055",
                    "filingDate": "2021-04-28T00:00:00",
                    "period": "2021-04-28T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019321000055/aapl-20210428.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-21-054710",
                    "filingDate": "2021-02-24T00:00:00",
                    "period": "2021-02-23T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521054710/d101693d8k.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0001214659-21-002046",
                    "filingDate": "2021-02-18T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000121465921002046/r217211px14a6g.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0001193125-21-044816",
                    "filingDate": "2021-02-16T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521044816/d107461dsc13ga.htm"
                },
                {
                    "name": "FORM SD Report",
                    "accessionNumber": "0001193125-21-036337",
                    "filingDate": "2021-02-10T00:00:00",
                    "formType": "SD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521036337/d119389dsd.htm"
                },
                {
                    "name": "SCHEDULE 13G/A Report",
                    "accessionNumber": "0001104659-21-017199",
                    "filingDate": "2021-02-10T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000110465921017199/tv0010-appleinc.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-21-032394",
                    "filingDate": "2021-02-08T00:00:00",
                    "period": "2021-02-01T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521032394/d70217d8k.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0000834237-21-007542",
                    "filingDate": "2021-02-05T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000083423721007542/us0378331005_020421.txt"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-21-025910",
                    "filingDate": "2021-02-02T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521025910/d66851d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-21-024892",
                    "filingDate": "2021-02-02T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521024892/d70069dfwp.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-21-023836",
                    "filingDate": "2021-02-01T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521023836/d66851d424b2.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0000320193-21-000010",
                    "filingDate": "2021-01-28T00:00:00",
                    "period": "2020-12-26T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019321000010/aapl-20201226.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-21-000009",
                    "filingDate": "2021-01-27T00:00:00",
                    "period": "2021-01-27T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019321000009/aapl-20210127.htm"
                },
                {
                    "name": "DEFINITIVE ADDITIONAL MATERIALS Report",
                    "accessionNumber": "0001193125-21-001989",
                    "filingDate": "2021-01-05T00:00:00",
                    "formType": "DEFA14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521001989/d767776ddefa14a.htm"
                },
                {
                    "name": "DEFINITIVE PROXY STATEMENT Report",
                    "accessionNumber": "0001193125-21-001987",
                    "filingDate": "2021-01-05T00:00:00",
                    "period": "2021-02-23T00:00:00",
                    "formType": "DEF 14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521001987/d767770ddef14a.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-21-001982",
                    "filingDate": "2021-01-05T00:00:00",
                    "period": "2020-12-29T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312521001982/d29637d8k.htm"
                },
                {
                    "name": "Annual Report",
                    "accessionNumber": "0000320193-20-000096",
                    "filingDate": "2020-10-30T00:00:00",
                    "period": "2020-09-26T00:00:00",
                    "formType": "10-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019320000096/aapl-20200926.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-20-000094",
                    "filingDate": "2020-10-29T00:00:00",
                    "period": "2020-10-29T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019320000094/aapl-20201029.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-20-225672",
                    "filingDate": "2020-08-20T00:00:00",
                    "period": "2020-08-13T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520225672/d937363d8k.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-20-220410",
                    "filingDate": "2020-08-14T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520220410/d23503d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-20-219289",
                    "filingDate": "2020-08-13T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520219289/d82525dfwp.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-20-218350",
                    "filingDate": "2020-08-13T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520218350/d23503d424b2.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-20-213158",
                    "filingDate": "2020-08-07T00:00:00",
                    "period": "2020-08-03T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520213158/d49399d8k.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0000320193-20-000062",
                    "filingDate": "2020-07-31T00:00:00",
                    "period": "2020-06-27T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019320000062/aapl-20200627.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-20-000060",
                    "filingDate": "2020-07-30T00:00:00",
                    "period": "2020-07-30T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019320000060/aapl-20200730.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-20-139112",
                    "filingDate": "2020-05-11T00:00:00",
                    "period": "2020-05-04T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520139112/d926511d8k.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-20-133777",
                    "filingDate": "2020-05-05T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520133777/d926392d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-20-132661",
                    "filingDate": "2020-05-05T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520132661/d926508dfwp.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-20-131780",
                    "filingDate": "2020-05-04T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520131780/d926392d424b2.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0000320193-20-000052",
                    "filingDate": "2020-05-01T00:00:00",
                    "period": "2020-03-28T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019320000052/a10-qq220203282020.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-20-000050",
                    "filingDate": "2020-04-30T00:00:00",
                    "period": "2020-04-30T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019320000050/a8-kq220203282020.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-20-050884",
                    "filingDate": "2020-02-27T00:00:00",
                    "period": "2020-02-26T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520050884/d865740d8k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-20-039203",
                    "filingDate": "2020-02-18T00:00:00",
                    "period": "2020-02-17T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520039203/d845033d8k.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0001193125-20-038381",
                    "filingDate": "2020-02-14T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520038381/d852265dsc13ga.htm"
                },
                {
                    "name": "SCHEDULE 13G/A Report",
                    "accessionNumber": "0001104659-20-018528",
                    "filingDate": "2020-02-12T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000110465920018528/tv01779-appleinc.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0000834237-20-008795",
                    "filingDate": "2020-02-10T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000083423720008795/us0378331005_020720.txt"
                },
                {
                    "name": "FORM SD Report",
                    "accessionNumber": "0001193125-20-026822",
                    "filingDate": "2020-02-06T00:00:00",
                    "formType": "SD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520026822/d877299dsd.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0000320193-20-000010",
                    "filingDate": "2020-01-29T00:00:00",
                    "period": "2019-12-28T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019320000010/a10-qq1202012282019.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-20-000008",
                    "filingDate": "2020-01-28T00:00:00",
                    "period": "2020-01-28T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019320000008/a8-kq1202012282019.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0001214659-20-000610",
                    "filingDate": "2020-01-27T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000121465920000610/j127200px14a6g.htm"
                },
                {
                    "name": "NOTICE OF EXEMPT SOLICITATION Report",
                    "accessionNumber": "0001387131-20-000386",
                    "filingDate": "2020-01-22T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000138713120000386/aapl-px14a6g_022620.htm"
                },
                {
                    "name": "DEFINITIVE ADDITIONAL MATERIALS Report",
                    "accessionNumber": "0001193125-20-001452",
                    "filingDate": "2020-01-03T00:00:00",
                    "formType": "DEFA14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520001452/d799146ddefa14a.htm"
                },
                {
                    "name": "DEFINITIVE PROXY STATEMENT Report",
                    "accessionNumber": "0001193125-20-001450",
                    "filingDate": "2020-01-03T00:00:00",
                    "period": "2020-02-26T00:00:00",
                    "formType": "DEF 14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312520001450/d799303ddef14a.htm"
                },
                {
                    "name": "CERT Report",
                    "accessionNumber": "0001354457-19-000604",
                    "filingDate": "2019-11-15T00:00:00",
                    "formType": "CERT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000135445719000604/8A_Cert_AAPL.pdf"
                },
                {
                    "name": "8-A12B Report",
                    "accessionNumber": "0001193125-19-292825",
                    "filingDate": "2019-11-15T00:00:00",
                    "formType": "8-A12B",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519292825/d827578d8a12b.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-19-292676",
                    "filingDate": "2019-11-15T00:00:00",
                    "period": "2019-11-07T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519292676/d828969d8k.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-19-288412",
                    "filingDate": "2019-11-08T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519288412/d804226d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-19-287351",
                    "filingDate": "2019-11-07T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519287351/d826022dfwp.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-19-286514",
                    "filingDate": "2019-11-07T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519286514/d804226d424b2.htm"
                },
                {
                    "name": "S-8 POS Report",
                    "accessionNumber": "0001193125-19-280516",
                    "filingDate": "2019-10-31T00:00:00",
                    "formType": "S-8 POS",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519280516/d800564ds8pos.htm"
                },
                {
                    "name": "Annual Report",
                    "accessionNumber": "0000320193-19-000119",
                    "filingDate": "2019-10-31T00:00:00",
                    "period": "2019-09-28T00:00:00",
                    "formType": "10-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019319000119/a10-k20199282019.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-19-000117",
                    "filingDate": "2019-10-30T00:00:00",
                    "period": "2019-10-30T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019319000117/a8-kq420199282019.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-19-000093",
                    "filingDate": "2019-09-13T00:00:00",
                    "period": "2019-09-10T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019319000093/a8-kseptember201991019.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-19-242975",
                    "filingDate": "2019-09-11T00:00:00",
                    "period": "2019-09-04T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519242975/d777124d8k.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-19-238922",
                    "filingDate": "2019-09-05T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519238922/d751814d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-19-237993",
                    "filingDate": "2019-09-05T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519237993/d777130dfwp.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-19-237090",
                    "filingDate": "2019-09-04T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519237090/d751814d424b2.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0000320193-19-000076",
                    "filingDate": "2019-07-31T00:00:00",
                    "period": "2019-06-29T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019319000076/a10-qq320196292019.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-19-000073",
                    "filingDate": "2019-07-30T00:00:00",
                    "period": "2019-07-30T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019319000073/a8-kq320196292019.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0000320193-19-000066",
                    "filingDate": "2019-05-01T00:00:00",
                    "period": "2019-03-30T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019319000066/a10-qq220193302019.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-19-000063",
                    "filingDate": "2019-04-30T00:00:00",
                    "period": "2019-04-30T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019319000063/a8-kq220193302019.htm"
                },
                {
                    "name": "FORM 3/A Report",
                    "accessionNumber": "0000320193-19-000058",
                    "filingDate": "2019-04-17T00:00:00",
                    "period": "2019-02-05T00:00:00",
                    "formType": "3/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019319000058/xslF345X02/wf-form3a_155554028715520.xml"
                },
                {
                    "name": "CERT Report",
                    "accessionNumber": "0001354457-19-000130",
                    "filingDate": "2019-03-14T00:00:00",
                    "formType": "CERT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000135445719000130/AAPL_Cert.pdf"
                },
                {
                    "name": "25 Report",
                    "accessionNumber": "0001193125-19-074874",
                    "filingDate": "2019-03-14T00:00:00",
                    "formType": "25",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519074874/d719398d25.htm"
                },
                {
                    "name": "8-A12B Report",
                    "accessionNumber": "0001193125-19-074868",
                    "filingDate": "2019-03-14T00:00:00",
                    "formType": "8-A12B",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519074868/d720211d8a12b.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-19-000032",
                    "filingDate": "2019-03-04T00:00:00",
                    "period": "2019-03-01T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019319000032/copyofreference8-kform8xkq.htm"
                },
                {
                    "name": "FORM SD Report",
                    "accessionNumber": "0001193125-19-041571",
                    "filingDate": "2019-02-15T00:00:00",
                    "formType": "SD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519041571/d694085dsd.htm"
                },
                {
                    "name": "Beneficial Ownership Report",
                    "accessionNumber": "0001193125-19-041014",
                    "filingDate": "2019-02-14T00:00:00",
                    "formType": "SC 13G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519041014/d667611dsc13g.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0000932471-19-004418",
                    "filingDate": "2019-02-11T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000093247119004418/appleinc.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-19-000026",
                    "filingDate": "2019-02-06T00:00:00",
                    "period": "2019-02-05T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019319000026/a8-kfebruary2019252019.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0001214659-19-000797",
                    "filingDate": "2019-02-05T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000121465919000797/j24190px14a6g.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0000215457-19-003343",
                    "filingDate": "2019-02-04T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000021545719003343/us0378331005_020419.txt"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0000320193-19-000010",
                    "filingDate": "2019-01-30T00:00:00",
                    "period": "2018-12-29T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019319000010/a10-qq1201912292018.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-19-000007",
                    "filingDate": "2019-01-29T00:00:00",
                    "period": "2019-01-29T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019319000007/a8-kq1201912292018.htm"
                },
                {
                    "name": "DEFINITIVE ADDITIONAL MATERIALS Report",
                    "accessionNumber": "0001193125-19-004678",
                    "filingDate": "2019-01-08T00:00:00",
                    "formType": "DEFA14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519004678/d668059ddefa14a.htm"
                },
                {
                    "name": "DEFINITIVE PROXY STATEMENT Report",
                    "accessionNumber": "0001193125-19-004664",
                    "filingDate": "2019-01-08T00:00:00",
                    "period": "2019-03-01T00:00:00",
                    "formType": "DEF 14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312519004664/d667873ddef14a.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-19-000002",
                    "filingDate": "2019-01-02T00:00:00",
                    "period": "2019-01-02T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019319000002/a8-kjanuary2019122019.htm"
                },
                {
                    "name": "S-3ASR Report",
                    "accessionNumber": "0001193125-18-317844",
                    "filingDate": "2018-11-05T00:00:00",
                    "formType": "S-3ASR",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312518317844/d644900ds3asr.htm"
                },
                {
                    "name": "Annual Report",
                    "accessionNumber": "0000320193-18-000145",
                    "filingDate": "2018-11-05T00:00:00",
                    "period": "2018-09-29T00:00:00",
                    "formType": "10-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019318000145/a10-k20189292018.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-18-000142",
                    "filingDate": "2018-11-01T00:00:00",
                    "period": "2018-11-01T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019318000142/a8-kq420189292018.htm"
                },
                {
                    "name": "S-8 Report",
                    "accessionNumber": "0001193125-18-256354",
                    "filingDate": "2018-08-23T00:00:00",
                    "formType": "S-8",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312518256354/d609898ds8.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0000320193-18-000100",
                    "filingDate": "2018-08-01T00:00:00",
                    "period": "2018-06-30T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019318000100/a10-qq320186302018.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-18-000098",
                    "filingDate": "2018-07-31T00:00:00",
                    "period": "2018-07-31T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019318000098/a8-kq320186302018.htm"
                },
                {
                    "name": "AMENDMENT NO. 1 TO FORM 8-K Report",
                    "accessionNumber": "0001193125-18-154948",
                    "filingDate": "2018-05-08T00:00:00",
                    "period": "2018-04-30T00:00:00",
                    "formType": "8-K/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312518154948/d563832d8ka.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-18-154515",
                    "filingDate": "2018-05-07T00:00:00",
                    "period": "2018-04-30T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312518154515/d563832d8k.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0000320193-18-000070",
                    "filingDate": "2018-05-02T00:00:00",
                    "period": "2018-03-31T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019318000070/a10-qq220183312018.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-18-000067",
                    "filingDate": "2018-05-01T00:00:00",
                    "period": "2018-05-01T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019318000067/a8-kq220183312018.htm"
                },
                {
                    "name": "FORM SD Report",
                    "accessionNumber": "0001193125-18-073716",
                    "filingDate": "2018-03-07T00:00:00",
                    "formType": "SD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312518073716/d538673dsd.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-18-045761",
                    "filingDate": "2018-02-14T00:00:00",
                    "period": "2018-02-13T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312518045761/d374908d8k.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0000932471-18-004625",
                    "filingDate": "2018-02-12T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000093247118004625/appleinc.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0000320193-18-000007",
                    "filingDate": "2018-02-02T00:00:00",
                    "period": "2017-12-30T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019318000007/a10-qq1201812302017.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-18-000005",
                    "filingDate": "2018-02-01T00:00:00",
                    "period": "2018-02-01T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019318000005/a8-kq1201812302017.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0000215457-18-003762",
                    "filingDate": "2018-01-29T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000021545718003762/us0378331005_012918.txt"
                },
                {
                    "name": "DEFINITIVE ADDITIONAL MATERIALS Report",
                    "accessionNumber": "0001193125-17-380132",
                    "filingDate": "2017-12-27T00:00:00",
                    "formType": "DEFA14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517380132/d396272ddefa14a.htm"
                },
                {
                    "name": "DEFINITIVE PROXY STATEMENT Report",
                    "accessionNumber": "0001193125-17-380130",
                    "filingDate": "2017-12-27T00:00:00",
                    "period": "2018-02-13T00:00:00",
                    "formType": "DEF 14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517380130/d400278ddef14a.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-17-341015",
                    "filingDate": "2017-11-13T00:00:00",
                    "period": "2017-11-06T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517341015/d478060d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424(B)(2) Report",
                    "accessionNumber": "0001193125-17-335805",
                    "filingDate": "2017-11-07T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517335805/d475365d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-17-334724",
                    "filingDate": "2017-11-07T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517334724/d480547dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424(B)(2) Report",
                    "accessionNumber": "0001193125-17-333582",
                    "filingDate": "2017-11-06T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517333582/d475365d424b2.htm"
                },
                {
                    "name": "Annual Report",
                    "accessionNumber": "0000320193-17-000070",
                    "filingDate": "2017-11-03T00:00:00",
                    "period": "2017-09-30T00:00:00",
                    "formType": "10-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019317000070/a10-k20179302017.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-17-000067",
                    "filingDate": "2017-11-02T00:00:00",
                    "period": "2017-11-02T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019317000067/a8-kq420179302017.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-17-308859",
                    "filingDate": "2017-10-12T00:00:00",
                    "period": "2017-10-06T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517308859/d386231d8k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-17-282809",
                    "filingDate": "2017-09-12T00:00:00",
                    "period": "2017-09-05T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517282809/d434478d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424(B)(2) Report",
                    "accessionNumber": "0001193125-17-277897",
                    "filingDate": "2017-09-06T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517277897/d453793d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-17-276961",
                    "filingDate": "2017-09-06T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517276961/d451794dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424(B)(2) Report",
                    "accessionNumber": "0001193125-17-276117",
                    "filingDate": "2017-09-05T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517276117/d453793d424b2.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-17-262261",
                    "filingDate": "2017-08-18T00:00:00",
                    "period": "2017-08-15T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517262261/d593893d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424(B)(2) Report",
                    "accessionNumber": "0001193125-17-258933",
                    "filingDate": "2017-08-16T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517258933/d433785d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-17-258729",
                    "filingDate": "2017-08-15T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517258729/d612765dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424(B)2 Report",
                    "accessionNumber": "0001193125-17-258040",
                    "filingDate": "2017-08-15T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517258040/d433785d424b2.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0000320193-17-000009",
                    "filingDate": "2017-08-02T00:00:00",
                    "period": "2017-07-01T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019317000009/a10-qq32017712017.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0000320193-17-000006",
                    "filingDate": "2017-08-01T00:00:00",
                    "period": "2017-08-01T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019317000006/a8-kq32017712017.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-17-208226",
                    "filingDate": "2017-06-20T00:00:00",
                    "period": "2017-06-13T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517208226/d413980d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424(B)2 Report",
                    "accessionNumber": "0001193125-17-203548",
                    "filingDate": "2017-06-14T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517203548/d412075d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-17-202772",
                    "filingDate": "2017-06-14T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517202772/d413957dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424(B)2 Report",
                    "accessionNumber": "0001193125-17-201958",
                    "filingDate": "2017-06-13T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517201958/d412075d424b2.htm"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-17-006550",
                    "filingDate": "2017-05-25T00:00:00",
                    "formType": "CERTNYS",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999717006550/9999999997-17-006550.paper"
                },
                {
                    "name": "FORM 8-A12B Report",
                    "accessionNumber": "0001193125-17-181871",
                    "filingDate": "2017-05-24T00:00:00",
                    "formType": "8-A12B",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517181871/d375104d8a12b.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-17-181867",
                    "filingDate": "2017-05-24T00:00:00",
                    "period": "2017-05-17T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517181867/d583637d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424(B)2 Report",
                    "accessionNumber": "0001193125-17-175330",
                    "filingDate": "2017-05-18T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517175330/d394059d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-17-173678",
                    "filingDate": "2017-05-17T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517173678/d400069dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424(B)2 Report",
                    "accessionNumber": "0001193125-17-172693",
                    "filingDate": "2017-05-17T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517172693/d394059d424b2.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-17-167400",
                    "filingDate": "2017-05-11T00:00:00",
                    "period": "2017-05-04T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517167400/d388721d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-17-160948",
                    "filingDate": "2017-05-05T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517160948/d352568d424b2.htm"
                },
                {
                    "name": "FORM SD Report",
                    "accessionNumber": "0001193125-17-159397",
                    "filingDate": "2017-05-05T00:00:00",
                    "formType": "SD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517159397/d383904dsd.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-17-159324",
                    "filingDate": "2017-05-05T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517159324/d392409dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-17-157385",
                    "filingDate": "2017-05-04T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517157385/d352568d424b2.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0001628280-17-004790",
                    "filingDate": "2017-05-03T00:00:00",
                    "period": "2017-04-01T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000162828017004790/a10-qq22017412017.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001628280-17-004663",
                    "filingDate": "2017-05-02T00:00:00",
                    "period": "2017-05-02T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000162828017004663/a8-kq22017412017.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-17-069853",
                    "filingDate": "2017-03-03T00:00:00",
                    "period": "2017-02-14T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517069853/d348450d8k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-17-064019",
                    "filingDate": "2017-03-01T00:00:00",
                    "period": "2017-02-28T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517064019/d342218d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-17-044564",
                    "filingDate": "2017-02-15T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517044564/d338508d424b2.htm"
                },
                {
                    "name": "FWP Report",
                    "accessionNumber": "0001193125-17-042083",
                    "filingDate": "2017-02-14T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517042083/d296425dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-17-041233",
                    "filingDate": "2017-02-14T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517041233/d338508d424b2.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-17-036283",
                    "filingDate": "2017-02-09T00:00:00",
                    "period": "2017-02-02T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517036283/d340350d8k.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0000932471-17-000777",
                    "filingDate": "2017-02-09T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000093247117000777/appleinc.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-17-030832",
                    "filingDate": "2017-02-03T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517030832/d293866d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-17-029548",
                    "filingDate": "2017-02-03T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517029548/d264957dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-17-028315",
                    "filingDate": "2017-02-02T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517028315/d293866d424b2.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0001628280-17-000717",
                    "filingDate": "2017-02-01T00:00:00",
                    "period": "2016-12-31T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000162828017000717/a10-qq1201712312016.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001628280-17-000663",
                    "filingDate": "2017-01-31T00:00:00",
                    "period": "2017-01-31T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000162828017000663/a8-kq1201712312016.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0001214659-17-000547",
                    "filingDate": "2017-01-31T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000121465917000547/l130173px14a6g.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0000215457-17-001275",
                    "filingDate": "2017-01-19T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000021545717001275/apple.inc.txt"
                },
                {
                    "name": "DEFINITIVE ADDITIONAL MATERIALS Report",
                    "accessionNumber": "0001193125-17-003764",
                    "filingDate": "2017-01-06T00:00:00",
                    "formType": "DEFA14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517003764/d307349ddefa14a.htm"
                },
                {
                    "name": "DEFINITIVE PROXY STATEMENT Report",
                    "accessionNumber": "0001193125-17-003753",
                    "filingDate": "2017-01-06T00:00:00",
                    "period": "2017-02-28T00:00:00",
                    "formType": "DEF 14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312517003753/d257185ddef14a.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001628280-16-022047",
                    "filingDate": "2016-12-15T00:00:00",
                    "period": "2016-12-13T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000162828016022047/form8-k121316.htm"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-17-000002",
                    "filingDate": "2016-12-05T00:00:00",
                    "period": "2016-10-07T00:00:00",
                    "formType": "NO ACT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999717000002/9999999997-17-000002.paper"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-17-000809",
                    "filingDate": "2016-10-27T00:00:00",
                    "period": "2016-10-07T00:00:00",
                    "formType": "NO ACT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999717000809/9999999997-17-000809.paper"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-16-026607",
                    "filingDate": "2016-10-26T00:00:00",
                    "period": "2016-10-07T00:00:00",
                    "formType": "NO ACT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999716026607/9999999997-16-026607.paper"
                },
                {
                    "name": "Annual Report",
                    "accessionNumber": "0001628280-16-020309",
                    "filingDate": "2016-10-26T00:00:00",
                    "period": "2016-09-24T00:00:00",
                    "formType": "10-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000162828016020309/a201610-k9242016.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001628280-16-020258",
                    "filingDate": "2016-10-25T00:00:00",
                    "period": "2016-10-25T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000162828016020258/a8-kq420169242016.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-16-672044",
                    "filingDate": "2016-08-04T00:00:00",
                    "period": "2016-07-28T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516672044/d234980d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-16-664603",
                    "filingDate": "2016-07-29T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516664603/d219391d424b2.htm"
                },
                {
                    "name": "FWP Report",
                    "accessionNumber": "0001193125-16-662761",
                    "filingDate": "2016-07-29T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516662761/d234184dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-16-661201",
                    "filingDate": "2016-07-28T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516661201/d219391d424b2.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0001628280-16-017809",
                    "filingDate": "2016-07-27T00:00:00",
                    "period": "2016-06-25T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000162828016017809/a10-qq320166252016.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001628280-16-017762",
                    "filingDate": "2016-07-26T00:00:00",
                    "period": "2016-07-26T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000162828016017762/a8-kq320166252016.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-16-628957",
                    "filingDate": "2016-06-22T00:00:00",
                    "period": "2016-06-07T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516628957/d209946d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-16-616649",
                    "filingDate": "2016-06-08T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516616649/d170613d424b2.htm"
                },
                {
                    "name": "FWP Report",
                    "accessionNumber": "0001193125-16-615362",
                    "filingDate": "2016-06-07T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516615362/d205760dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-16-614374",
                    "filingDate": "2016-06-07T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516614374/d170613d424b2.htm"
                },
                {
                    "name": "S-3ASR Report",
                    "accessionNumber": "0001193125-16-564177",
                    "filingDate": "2016-04-28T00:00:00",
                    "formType": "S-3ASR",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516564177/d148887ds3asr.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0001193125-16-559625",
                    "filingDate": "2016-04-27T00:00:00",
                    "period": "2016-03-26T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516559625/d165350d10q.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-16-556520",
                    "filingDate": "2016-04-26T00:00:00",
                    "period": "2016-04-26T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516556520/d325078d8k.htm"
                },
                {
                    "name": "FORM SD Report",
                    "accessionNumber": "0001193125-16-523320",
                    "filingDate": "2016-03-30T00:00:00",
                    "formType": "SD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516523320/d168894dsd.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-16-516891",
                    "filingDate": "2016-03-24T00:00:00",
                    "period": "2016-03-17T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516516891/d161597d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-16-510499",
                    "filingDate": "2016-03-18T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516510499/d160217d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-16-509001",
                    "filingDate": "2016-03-18T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516509001/d168347dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-16-507590",
                    "filingDate": "2016-03-17T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516507590/d160217d424b2.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-16-488223",
                    "filingDate": "2016-03-01T00:00:00",
                    "period": "2016-02-26T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516488223/d150918d8k.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-16-473562",
                    "filingDate": "2016-02-23T00:00:00",
                    "period": "2016-02-16T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516473562/d143184d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-16-467194",
                    "filingDate": "2016-02-17T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516467194/d60003d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-16-466166",
                    "filingDate": "2016-02-17T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516466166/d136832dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-16-463982",
                    "filingDate": "2016-02-16T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516463982/d60003d424b2.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0000932471-16-011528",
                    "filingDate": "2016-02-10T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000093247116011528/appleinc.htm"
                },
                {
                    "name": "FORM 10-Q Report",
                    "accessionNumber": "0001193125-16-439878",
                    "filingDate": "2016-01-27T00:00:00",
                    "period": "2015-12-26T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516439878/d66145d10q.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-16-438421",
                    "filingDate": "2016-01-26T00:00:00",
                    "period": "2016-01-26T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516438421/d22806d8k.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0000215457-16-002043",
                    "filingDate": "2016-01-25T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000021545716002043/apple.inc.2015.txt"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0001214659-16-008862",
                    "filingDate": "2016-01-14T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000121465916008862/m112160px14a6g.htm"
                },
                {
                    "name": "DEFINITIVE ADDITIONAL MATERIALS Report",
                    "accessionNumber": "0001193125-16-422534",
                    "filingDate": "2016-01-06T00:00:00",
                    "formType": "DEFA14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516422534/d10999ddefa14a.htm"
                },
                {
                    "name": "Proxy Statement Report",
                    "accessionNumber": "0001193125-16-422528",
                    "filingDate": "2016-01-06T00:00:00",
                    "period": "2016-02-26T00:00:00",
                    "formType": "DEF 14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312516422528/d79474ddef14a.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-15-410853",
                    "filingDate": "2015-12-22T00:00:00",
                    "period": "2015-12-21T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515410853/d55543d8k.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-15-406279",
                    "filingDate": "2015-12-17T00:00:00",
                    "period": "2015-12-16T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515406279/d107635d8k.htm"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-15-015765",
                    "filingDate": "2015-12-14T00:00:00",
                    "period": "2015-10-16T00:00:00",
                    "formType": "NO ACT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999715015765/9999999997-15-015765.paper"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-15-016011",
                    "filingDate": "2015-12-11T00:00:00",
                    "period": "2015-10-19T00:00:00",
                    "formType": "NO ACT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999715016011/9999999997-15-016011.paper"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-15-014868",
                    "filingDate": "2015-11-16T00:00:00",
                    "period": "2015-11-11T00:00:00",
                    "formType": "NO ACT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999715014868/9999999997-15-014868.paper"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-15-014867",
                    "filingDate": "2015-11-16T00:00:00",
                    "period": "2015-09-25T00:00:00",
                    "formType": "NO ACT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999715014867/9999999997-15-014867.paper"
                },
                {
                    "name": "FORM 10-K Report",
                    "accessionNumber": "0001193125-15-356351",
                    "filingDate": "2015-10-28T00:00:00",
                    "period": "2015-09-26T00:00:00",
                    "formType": "10-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515356351/d17062d10k.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-15-354756",
                    "filingDate": "2015-10-27T00:00:00",
                    "period": "2015-10-27T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515354756/d74332d8k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-15-336615",
                    "filingDate": "2015-10-02T00:00:00",
                    "period": "2015-10-01T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515336615/d10101d8k.htm"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-15-013472",
                    "filingDate": "2015-09-18T00:00:00",
                    "formType": "CERTNYS",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999715013472/9999999997-15-013472.paper"
                },
                {
                    "name": "FORM 8-A12B Report",
                    "accessionNumber": "0001193125-15-322479",
                    "filingDate": "2015-09-17T00:00:00",
                    "formType": "8-A12B",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515322479/d88188d8a12b.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-15-322466",
                    "filingDate": "2015-09-17T00:00:00",
                    "period": "2015-09-10T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515322466/d31615d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-15-318535",
                    "filingDate": "2015-09-11T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515318535/d13049d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-15-317144",
                    "filingDate": "2015-09-10T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515317144/d92507dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-15-316498",
                    "filingDate": "2015-09-10T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515316498/d13049d424b2.htm"
                },
                {
                    "name": "UPLOAD Report",
                    "accessionNumber": "0000000000-15-044866",
                    "filingDate": "2015-09-09T00:00:00",
                    "formType": "UPLOAD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000000000015044866/filename1.pdf"
                },
                {
                    "name": "CORRESP Report",
                    "accessionNumber": "0001193125-15-307923",
                    "filingDate": "2015-08-31T00:00:00",
                    "formType": "CORRESP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515307923/filename1.htm"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-15-012341",
                    "filingDate": "2015-08-03T00:00:00",
                    "formType": "CERTNYS",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999715012341/9999999997-15-012341.paper"
                },
                {
                    "name": "FORM 8-A12B Report",
                    "accessionNumber": "0001193125-15-273818",
                    "filingDate": "2015-08-03T00:00:00",
                    "formType": "8-A12B",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515273818/d32826d8a12b.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-15-273023",
                    "filingDate": "2015-07-31T00:00:00",
                    "period": "2015-07-24T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515273023/d12789d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-15-264078",
                    "filingDate": "2015-07-27T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515264078/d12679d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-15-262731",
                    "filingDate": "2015-07-24T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515262731/d95725dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-15-261843",
                    "filingDate": "2015-07-24T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515261843/d12679d424b2.htm"
                },
                {
                    "name": "FORM 10-Q Report",
                    "accessionNumber": "0001193125-15-259935",
                    "filingDate": "2015-07-22T00:00:00",
                    "period": "2015-06-27T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515259935/d927922d10q.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-15-258464",
                    "filingDate": "2015-07-21T00:00:00",
                    "period": "2015-07-21T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515258464/d927923d8k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-15-219298",
                    "filingDate": "2015-06-10T00:00:00",
                    "period": "2015-06-03T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515219298/d938654d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-15-213423",
                    "filingDate": "2015-06-04T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515213423/d933467d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-15-212514",
                    "filingDate": "2015-06-04T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515212514/d933467dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-15-207526",
                    "filingDate": "2015-06-01T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515207526/d933467d424b2.htm"
                },
                {
                    "name": "UPLOAD Report",
                    "accessionNumber": "0000000000-15-027161",
                    "filingDate": "2015-05-19T00:00:00",
                    "formType": "UPLOAD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000000000015027161/filename1.pdf"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-15-186064",
                    "filingDate": "2015-05-13T00:00:00",
                    "period": "2015-05-06T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515186064/d923398d8k.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-15-177428",
                    "filingDate": "2015-05-07T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515177428/d889792d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-15-175208",
                    "filingDate": "2015-05-07T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515175208/d889792dfwp.htm"
                },
                {
                    "name": "FILED PURSUANT TO RULE 424B2 Report",
                    "accessionNumber": "0001193125-15-173308",
                    "filingDate": "2015-05-06T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515173308/d889792d424b2.htm"
                },
                {
                    "name": "S-8 Report",
                    "accessionNumber": "0001193125-15-153187",
                    "filingDate": "2015-04-28T00:00:00",
                    "formType": "S-8",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515153187/d915435ds8.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0001193125-15-153166",
                    "filingDate": "2015-04-28T00:00:00",
                    "period": "2015-03-28T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515153166/d892246d10q.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-15-149607",
                    "filingDate": "2015-04-27T00:00:00",
                    "period": "2015-04-27T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515149607/d914157d8k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-15-149590",
                    "filingDate": "2015-04-27T00:00:00",
                    "period": "2015-04-27T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515149590/d901296d8k.htm"
                },
                {
                    "name": "CORRESP Report",
                    "accessionNumber": "0001193125-15-115893",
                    "filingDate": "2015-04-01T00:00:00",
                    "formType": "CORRESP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515115893/filename1.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001104659-15-019336",
                    "filingDate": "2015-03-13T00:00:00",
                    "period": "2015-03-10T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000110465915019336/a15-5624_18k.htm"
                },
                {
                    "name": "UPLOAD Report",
                    "accessionNumber": "0000000000-15-013496",
                    "filingDate": "2015-03-04T00:00:00",
                    "formType": "UPLOAD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000000000015013496/filename1.pdf"
                },
                {
                    "name": "SD Report",
                    "accessionNumber": "0001193125-15-045292",
                    "filingDate": "2015-02-12T00:00:00",
                    "formType": "SD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515045292/d864750dsd.htm"
                },
                {
                    "name": "Beneficial Ownership Report",
                    "accessionNumber": "0000932471-15-003679",
                    "filingDate": "2015-02-10T00:00:00",
                    "formType": "SC 13G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000093247115003679/appleinc.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-15-039270",
                    "filingDate": "2015-02-09T00:00:00",
                    "period": "2015-02-02T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515039270/d868302d8k.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-15-031599",
                    "filingDate": "2015-02-03T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515031599/d861669d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-15-030106",
                    "filingDate": "2015-02-03T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515030106/d864529dfwp.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0001086364-15-001457",
                    "filingDate": "2015-02-02T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000108636415001457/apple.inc.txt"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-15-028777",
                    "filingDate": "2015-02-02T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515028777/d861669d424b2.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-15-023732",
                    "filingDate": "2015-01-28T00:00:00",
                    "period": "2015-01-28T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515023732/d835617d8k.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0001193125-15-023697",
                    "filingDate": "2015-01-28T00:00:00",
                    "period": "2014-12-27T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515023697/d835533d10q.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-15-021857",
                    "filingDate": "2015-01-27T00:00:00",
                    "period": "2015-01-27T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515021857/d835619d8k.htm"
                },
                {
                    "name": "DEFA14A Report",
                    "accessionNumber": "0001193125-15-017614",
                    "filingDate": "2015-01-22T00:00:00",
                    "formType": "DEFA14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515017614/d851928ddefa14a.htm"
                },
                {
                    "name": "DEFINITIVE PROXY STATEMENT Report",
                    "accessionNumber": "0001193125-15-017607",
                    "filingDate": "2015-01-22T00:00:00",
                    "period": "2015-03-10T00:00:00",
                    "formType": "DEF 14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312515017607/d774604ddef14a.htm"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-15-000140",
                    "filingDate": "2014-12-30T00:00:00",
                    "period": "2014-11-17T00:00:00",
                    "formType": "NO ACT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999715000140/9999999997-15-000140.paper"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-15-000139",
                    "filingDate": "2014-12-29T00:00:00",
                    "period": "2014-10-31T00:00:00",
                    "formType": "NO ACT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999715000139/9999999997-15-000139.paper"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-14-016001",
                    "filingDate": "2014-12-11T00:00:00",
                    "period": "2014-10-31T00:00:00",
                    "formType": "NO ACT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999714016001/9999999997-14-016001.paper"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-14-015701",
                    "filingDate": "2014-12-04T00:00:00",
                    "period": "2014-10-31T00:00:00",
                    "formType": "NO ACT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999714015701/9999999997-14-015701.paper"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-14-015004",
                    "filingDate": "2014-11-13T00:00:00",
                    "formType": "CERTNYS",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999714015004/9999999997-14-015004.paper"
                },
                {
                    "name": "8-A12B Report",
                    "accessionNumber": "0001193125-14-409218",
                    "filingDate": "2014-11-12T00:00:00",
                    "formType": "8-A12B",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514409218/d818845d8a12b.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-14-406296",
                    "filingDate": "2014-11-10T00:00:00",
                    "period": "2014-11-04T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514406296/d816414d8k.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-14-398779",
                    "filingDate": "2014-11-05T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514398779/d812009d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-14-395979",
                    "filingDate": "2014-11-04T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514395979/d817191dfwp.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-14-394996",
                    "filingDate": "2014-11-04T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514394996/d812009d424b2.htm"
                },
                {
                    "name": "Annual Report",
                    "accessionNumber": "0001193125-14-383437",
                    "filingDate": "2014-10-27T00:00:00",
                    "period": "2014-09-27T00:00:00",
                    "formType": "10-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514383437/d783162d10k.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-14-376361",
                    "filingDate": "2014-10-20T00:00:00",
                    "period": "2014-10-20T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514376361/d806538d8k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-14-277193",
                    "filingDate": "2014-07-23T00:00:00",
                    "period": "2014-07-23T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514277193/d757212d8k.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0001193125-14-277160",
                    "filingDate": "2014-07-23T00:00:00",
                    "period": "2014-06-28T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514277160/d740164d10q.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-14-275598",
                    "filingDate": "2014-07-22T00:00:00",
                    "period": "2014-07-22T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514275598/d760213d8k.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-14-271698",
                    "filingDate": "2014-07-17T00:00:00",
                    "period": "2014-07-15T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514271698/d758295d8k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-14-228798",
                    "filingDate": "2014-06-06T00:00:00",
                    "period": "2014-06-06T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514228798/d739696d8k.htm"
                },
                {
                    "name": "CURRENT REPORT, ITEM 5.02 Report",
                    "accessionNumber": "0001181431-14-021923",
                    "filingDate": "2014-05-30T00:00:00",
                    "period": "2014-05-29T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000118143114021923/rrd410610.htm"
                },
                {
                    "name": "FORM SD Report",
                    "accessionNumber": "0001193125-14-217311",
                    "filingDate": "2014-05-29T00:00:00",
                    "formType": "SD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514217311/d729300dsd.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-14-184969",
                    "filingDate": "2014-05-06T00:00:00",
                    "period": "2014-04-29T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514184969/d721207d8k.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-14-172859",
                    "filingDate": "2014-04-30T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514172859/d717108d424b2.htm"
                },
                {
                    "name": "FREE WRITING PROSPECTUS Report",
                    "accessionNumber": "0001193125-14-168389",
                    "filingDate": "2014-04-30T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514168389/d720312dfwp.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-14-164929",
                    "filingDate": "2014-04-29T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514164929/d717108d424b2.htm"
                },
                {
                    "name": "S-8 Report",
                    "accessionNumber": "0001193125-14-160171",
                    "filingDate": "2014-04-25T00:00:00",
                    "formType": "S-8",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514160171/d715382ds8.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0001193125-14-157311",
                    "filingDate": "2014-04-24T00:00:00",
                    "period": "2014-03-29T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514157311/d694710d10q.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-14-154883",
                    "filingDate": "2014-04-23T00:00:00",
                    "period": "2014-04-23T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514154883/d715379d8k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-14-154871",
                    "filingDate": "2014-04-23T00:00:00",
                    "period": "2014-04-23T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514154871/d715148d8k.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-14-084697",
                    "filingDate": "2014-03-05T00:00:00",
                    "period": "2014-02-28T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514084697/d684095d8k.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0000928464-14-000013",
                    "filingDate": "2014-02-10T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000092846414000013/aaplpx14a6g021014.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0001214659-14-001019",
                    "filingDate": "2014-02-10T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000121465914001019/m210141px14a6g.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0000928464-14-000010",
                    "filingDate": "2014-02-07T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000092846414000010/aaplpx14a6gno2020714.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0000928464-14-000008",
                    "filingDate": "2014-02-07T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000092846414000008/aaplpx14a6g020714.htm"
                },
                {
                    "name": "S-8 Report",
                    "accessionNumber": "0001193125-14-031119",
                    "filingDate": "2014-01-31T00:00:00",
                    "formType": "S-8",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514031119/d664780ds8.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0001193125-14-024487",
                    "filingDate": "2014-01-28T00:00:00",
                    "period": "2013-12-28T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514024487/d644622d10q.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0000928464-14-000006",
                    "filingDate": "2014-01-28T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000092846414000006/aaplpx14a6g012814.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0001086364-14-000386",
                    "filingDate": "2014-01-28T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000108636414000386/apple.inc..txt"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-14-022238",
                    "filingDate": "2014-01-27T00:00:00",
                    "period": "2014-01-27T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514022238/d652772d8k.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0000928464-14-000003",
                    "filingDate": "2014-01-23T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000092846414000003/aaplpx14a6g012314.htm"
                },
                {
                    "name": "DEFINITIVE ADDITIONAL MATERIALS Report",
                    "accessionNumber": "0001193125-14-008086",
                    "filingDate": "2014-01-10T00:00:00",
                    "formType": "DEFA14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514008086/d656978ddefa14a.htm"
                },
                {
                    "name": "Proxy Statement Report",
                    "accessionNumber": "0001193125-14-008074",
                    "filingDate": "2014-01-10T00:00:00",
                    "period": "2014-02-28T00:00:00",
                    "formType": "DEF 14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312514008074/d648739ddef14a.htm"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-14-000591",
                    "filingDate": "2014-01-08T00:00:00",
                    "period": "2013-12-20T00:00:00",
                    "formType": "NO ACT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999714000591/9999999997-14-000591.paper"
                },
                {
                    "name": "PRELIMINARY PROXY STATEMENT Report",
                    "accessionNumber": "0001193125-13-486406",
                    "filingDate": "2013-12-27T00:00:00",
                    "period": "2014-02-28T00:00:00",
                    "formType": "PRE 14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513486406/d648739dpre14a.htm"
                },
                {
                    "name": "AUTO-GENERATED PAPER DOCUMENT Report",
                    "accessionNumber": "9999999997-14-000040",
                    "filingDate": "2013-12-17T00:00:00",
                    "period": "2013-10-18T00:00:00",
                    "formType": "NO ACT",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/999999999714000040/9999999997-14-000040.paper"
                },
                {
                    "name": "DFAN14A Report",
                    "accessionNumber": "0000928464-13-000275",
                    "filingDate": "2013-12-04T00:00:00",
                    "formType": "DFAN14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000092846413000275/aapldfan14a120413.htm"
                },
                {
                    "name": "FORM 10-K Report",
                    "accessionNumber": "0001193125-13-416534",
                    "filingDate": "2013-10-30T00:00:00",
                    "period": "2013-09-28T00:00:00",
                    "formType": "10-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513416534/d590790d10k.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-13-413498",
                    "filingDate": "2013-10-28T00:00:00",
                    "period": "2013-10-28T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513413498/d617270d8k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001181431-13-050140",
                    "filingDate": "2013-09-23T00:00:00",
                    "period": "2013-09-23T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000118143113050140/rrd391079.htm"
                },
                {
                    "name": "UPLOAD Report",
                    "accessionNumber": "0000000000-13-048900",
                    "filingDate": "2013-09-06T00:00:00",
                    "formType": "UPLOAD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000000000013048900/filename1.pdf"
                },
                {
                    "name": "ITEM 502 Report",
                    "accessionNumber": "0001181431-13-041847",
                    "filingDate": "2013-07-30T00:00:00",
                    "period": "2013-07-25T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000118143113041847/rrd386884.htm"
                },
                {
                    "name": "FORM 10-Q Report",
                    "accessionNumber": "0001193125-13-300670",
                    "filingDate": "2013-07-24T00:00:00",
                    "period": "2013-06-29T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513300670/d552802d10q.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-13-298914",
                    "filingDate": "2013-07-23T00:00:00",
                    "period": "2013-07-23T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513298914/d571814d8k.htm"
                },
                {
                    "name": "CORRESP Report",
                    "accessionNumber": "0001193125-13-297312",
                    "filingDate": "2013-07-22T00:00:00",
                    "formType": "CORRESP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513297312/filename1.htm"
                },
                {
                    "name": "UPLOAD Report",
                    "accessionNumber": "0000000000-13-037238",
                    "filingDate": "2013-07-09T00:00:00",
                    "formType": "UPLOAD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000000000013037238/filename1.pdf"
                },
                {
                    "name": "CORRESP Report",
                    "accessionNumber": "0001193125-13-269419",
                    "filingDate": "2013-06-24T00:00:00",
                    "formType": "CORRESP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513269419/filename1.htm"
                },
                {
                    "name": "13.06.21 SCHILLER FORM 4A Report",
                    "accessionNumber": "0001181431-13-036353",
                    "filingDate": "2013-06-21T00:00:00",
                    "period": "2013-06-21T00:00:00",
                    "formType": "4/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000118143113036353/xslF345X03/rrd384222.xml"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-13-267629",
                    "filingDate": "2013-06-21T00:00:00",
                    "period": "2013-06-21T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513267629/d556626d8k.htm"
                },
                {
                    "name": "UPLOAD Report",
                    "accessionNumber": "0000000000-13-032308",
                    "filingDate": "2013-06-13T00:00:00",
                    "formType": "UPLOAD",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000000000013032308/filename1.pdf"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-13-199324",
                    "filingDate": "2013-05-03T00:00:00",
                    "period": "2013-04-30T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513199324/d529124d8k.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-13-191849",
                    "filingDate": "2013-05-01T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513191849/d527270d424b2.htm"
                },
                {
                    "name": "FWP Report",
                    "accessionNumber": "0001193125-13-189053",
                    "filingDate": "2013-05-01T00:00:00",
                    "formType": "FWP",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513189053/d529903dfwp.htm"
                },
                {
                    "name": "424B2 Report",
                    "accessionNumber": "0001193125-13-184506",
                    "filingDate": "2013-04-30T00:00:00",
                    "formType": "424B2",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513184506/d527270d424b2.htm"
                },
                {
                    "name": "FORM S-3 Report",
                    "accessionNumber": "0001193125-13-179942",
                    "filingDate": "2013-04-29T00:00:00",
                    "formType": "S-3ASR",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513179942/d527270ds3asr.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-13-170623",
                    "filingDate": "2013-04-24T00:00:00",
                    "period": "2013-04-24T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513170623/d515445d8k.htm"
                },
                {
                    "name": "Quarterly Report",
                    "accessionNumber": "0001193125-13-168288",
                    "filingDate": "2013-04-24T00:00:00",
                    "period": "2013-03-30T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513168288/d501596d10q.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001193125-13-167469",
                    "filingDate": "2013-04-23T00:00:00",
                    "period": "2013-04-23T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513167469/d525706d8k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-13-167458",
                    "filingDate": "2013-04-23T00:00:00",
                    "period": "2013-04-23T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513167458/d525779d8k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-13-085842",
                    "filingDate": "2013-03-01T00:00:00",
                    "period": "2013-02-27T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513085842/d493940d8k.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0001011438-13-000187",
                    "filingDate": "2013-02-21T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000101143813000187/form_px14a6g-greenlight.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0001011438-13-000183",
                    "filingDate": "2013-02-21T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000101143813000183/form_px14a6g-greenlight.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0000315066-13-003020",
                    "filingDate": "2013-02-14T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000031506613003020/filing.txt"
                },
                {
                    "name": "DEFA14A Report",
                    "accessionNumber": "0001193125-13-052003",
                    "filingDate": "2013-02-12T00:00:00",
                    "formType": "DEFA14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513052003/d485445ddefa14a.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0001305227-13-000340",
                    "filingDate": "2013-02-08T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000130522713000340/apple.inc..txt"
                },
                {
                    "name": "DEFA14A Report",
                    "accessionNumber": "0001193125-13-043745",
                    "filingDate": "2013-02-07T00:00:00",
                    "formType": "DEFA14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513043745/d484476ddefa14a.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0001011438-13-000069",
                    "filingDate": "2013-02-07T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000101143813000069/form_px14a6g-apple.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0001171520-13-000075",
                    "filingDate": "2013-02-04T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000117152013000075/eps5041.htm"
                },
                {
                    "name": "FORM 10-Q Report",
                    "accessionNumber": "0001193125-13-022339",
                    "filingDate": "2013-01-24T00:00:00",
                    "period": "2012-12-29T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513022339/d453687d10q.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-13-020783",
                    "filingDate": "2013-01-23T00:00:00",
                    "period": "2013-01-23T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513020783/d453749d8k.htm"
                },
                {
                    "name": "DEFINITIVE ADDITIONAL MATERIALS Report",
                    "accessionNumber": "0001193125-13-005535",
                    "filingDate": "2013-01-07T00:00:00",
                    "formType": "DEFA14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513005535/d462403ddefa14a.htm"
                },
                {
                    "name": "DEFINITIVE PROXY STATEMENT Report",
                    "accessionNumber": "0001193125-13-005529",
                    "filingDate": "2013-01-07T00:00:00",
                    "period": "2013-02-27T00:00:00",
                    "formType": "DEF 14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312513005529/d450591ddef14a.htm"
                },
                {
                    "name": "PRELIMINARY PROXY STATEMENT Report",
                    "accessionNumber": "0001193125-12-515422",
                    "filingDate": "2012-12-27T00:00:00",
                    "period": "2013-02-27T00:00:00",
                    "formType": "PRE 14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512515422/d450591dpre14a.htm"
                },
                {
                    "name": "FORM S-8 Report",
                    "accessionNumber": "0001193125-12-446915",
                    "filingDate": "2012-11-01T00:00:00",
                    "formType": "S-8",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512446915/d430122ds8.htm"
                },
                {
                    "name": "FORM 10-K Report",
                    "accessionNumber": "0001193125-12-444068",
                    "filingDate": "2012-10-31T00:00:00",
                    "period": "2012-09-29T00:00:00",
                    "formType": "10-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512444068/d411355d10k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-12-435506",
                    "filingDate": "2012-10-25T00:00:00",
                    "period": "2012-10-25T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512435506/d429806d8k.htm"
                },
                {
                    "name": "FORM 10-Q Report",
                    "accessionNumber": "0001193125-12-314552",
                    "filingDate": "2012-07-25T00:00:00",
                    "period": "2012-06-30T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512314552/d365704d10q.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-12-312355",
                    "filingDate": "2012-07-24T00:00:00",
                    "period": "2012-07-24T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512312355/d383855d8k.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001181431-12-038301",
                    "filingDate": "2012-06-28T00:00:00",
                    "period": "2012-06-28T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000118143112038301/rrd349607.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001181431-12-032458",
                    "filingDate": "2012-05-24T00:00:00",
                    "period": "2012-05-24T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000118143112032458/rrd346000.htm"
                },
                {
                    "name": "FORM S-8 Report",
                    "accessionNumber": "0001193125-12-186315",
                    "filingDate": "2012-04-26T00:00:00",
                    "formType": "S-8",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512186315/d336683ds8.htm"
                },
                {
                    "name": "FORM 10-Q Report",
                    "accessionNumber": "0001193125-12-182321",
                    "filingDate": "2012-04-25T00:00:00",
                    "period": "2012-03-31T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512182321/d297069d10q.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-12-178928",
                    "filingDate": "2012-04-24T00:00:00",
                    "period": "2012-04-24T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512178928/d339184d8k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-12-081892",
                    "filingDate": "2012-02-27T00:00:00",
                    "period": "2012-02-23T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512081892/d307369d8k.htm"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0000315066-12-002390",
                    "filingDate": "2012-02-14T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000031506612002390/filing.txt"
                },
                {
                    "name": "Beneficial Ownership Amendment Report",
                    "accessionNumber": "0001086364-12-001937",
                    "filingDate": "2012-02-13T00:00:00",
                    "formType": "SC 13G/A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000108636412001937/apple.inc..txt"
                },
                {
                    "name": "CALPERS / APPLE INC. Report",
                    "accessionNumber": "0001171520-12-000087",
                    "filingDate": "2012-02-09T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000117152012000087/eps4528.htm"
                },
                {
                    "name": "PX14A6G Report",
                    "accessionNumber": "0001171520-12-000058",
                    "filingDate": "2012-01-27T00:00:00",
                    "formType": "PX14A6G",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000117152012000058/eps4514.htm"
                },
                {
                    "name": "REGISTRATION STATEMENT ON FORM S-8 Report",
                    "accessionNumber": "0001193125-12-025384",
                    "filingDate": "2012-01-26T00:00:00",
                    "formType": "S-8",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512025384/d285431ds8.htm"
                },
                {
                    "name": "FORM 10-Q Report",
                    "accessionNumber": "0001193125-12-023398",
                    "filingDate": "2012-01-25T00:00:00",
                    "period": "2011-12-31T00:00:00",
                    "formType": "10-Q",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512023398/d267587d10q.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-12-021833",
                    "filingDate": "2012-01-24T00:00:00",
                    "period": "2012-01-24T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512021833/d287503d8k.htm"
                },
                {
                    "name": "DEFINITIVE ADDITIONAL MATERIALS Report",
                    "accessionNumber": "0001193125-12-006713",
                    "filingDate": "2012-01-09T00:00:00",
                    "formType": "DEFA14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512006713/d275447ddefa14a.htm"
                },
                {
                    "name": "DEFINITIVE PROXY STATEMENT Report",
                    "accessionNumber": "0001193125-12-006704",
                    "filingDate": "2012-01-09T00:00:00",
                    "period": "2012-02-23T00:00:00",
                    "formType": "DEF 14A",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312512006704/d275281ddef14a.htm"
                },
                {
                    "name": "Material Event Report",
                    "accessionNumber": "0001181431-11-056354",
                    "filingDate": "2011-11-16T00:00:00",
                    "period": "2011-11-15T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000118143111056354/rrd325897.htm"
                },
                {
                    "name": "FORM 10-K Report",
                    "accessionNumber": "0001193125-11-282113",
                    "filingDate": "2011-10-26T00:00:00",
                    "period": "2011-09-24T00:00:00",
                    "formType": "10-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312511282113/d220209d10k.htm"
                },
                {
                    "name": "FORM 8-K Report",
                    "accessionNumber": "0001193125-11-273826",
                    "filingDate": "2011-10-18T00:00:00",
                    "period": "2011-10-18T00:00:00",
                    "formType": "8-K",
                    "url": "https://www.sec.gov/Archives/edgar/data/320193/000119312511273826/d244527d8k.htm"
                }
            ]
        },
        "type": "filings",
        "id": "c5c5199d-c51a-402d-a327-7ff6478cdb21"
    }
}

export const insiderTrades: InsiderTrades = {
    "meta": {
        "copyright": "Copyright 2021 Last10K.com All Rights Reserverd",
        "terms": [
            "https://dev.last10k.com/terms",
            "https://www.sec.gov/privacy.htm#security"
        ]
    },
    "data": {
        "attributes": {
            "status": 0,
            "count": 6,
            "result": [
                {
                    "CIK": "1035909",
                    "AccessionNumber": "0001213900-21-063797",
                    "FilingDate": "2021-12-07T00:00:00",
                    "AcceptanceDate": "2021-12-07T08:18:34",
                    "Filename": "ownership.xml",
                    "Ticker": "EEFT",
                    "CompanyName": "EURONET WORLDWIDE, INC.",
                    "SIC": 6099,
                    "Owner": "Brown Michael J",
                    "Relationship": "CEO & President",
                    "TransactionDate": "2021-12-03T00:00:00",
                    "TransactionType": "Option Exercise",
                    "Cost": 16.39,
                    "Shares": 100379,
                    "PositionValue": 1645212,
                    "SharesTotal": 1443589,
                    "IsTenPercentOwner": false,
                    "IsDirect": true
                },
                {
                    "CIK": "1193824",
                    "AccessionNumber": "0001213900-21-062346",
                    "FilingDate": "2021-11-29T00:00:00",
                    "AcceptanceDate": "2021-11-29T16:01:56",
                    "Filename": "ownership.xml",
                    "Ticker": "EEFT",
                    "CompanyName": "EURONET WORLDWIDE, INC.",
                    "SIC": 6099,
                    "Owner": "STRANDJORD M JEANNINE",
                    "Relationship": "Director",
                    "TransactionDate": "2021-11-26T00:00:00",
                    "TransactionType": "Buy",
                    "Cost": 107.95,
                    "Shares": 1000,
                    "PositionValue": 107950,
                    "SharesTotal": 49000,
                    "IsTenPercentOwner": false,
                    "IsDirect": true
                },
                {
                    "CIK": "1253709",
                    "AccessionNumber": "0001213900-21-060217",
                    "FilingDate": "2021-11-17T00:00:00",
                    "AcceptanceDate": "2021-11-17T10:49:01",
                    "Filename": "ownership.xml",
                    "Ticker": "EEFT",
                    "CompanyName": "EURONET WORLDWIDE, INC.",
                    "SIC": 6099,
                    "Owner": "WELLER RICK",
                    "Relationship": "EVP - Chief Financial Officer",
                    "TransactionDate": "2021-11-15T00:00:00",
                    "TransactionType": "Option Exercise",
                    "Cost": 16.39,
                    "Shares": 73139,
                    "PositionValue": 1198748,
                    "SharesTotal": 172156,
                    "IsTenPercentOwner": false,
                    "IsDirect": true
                },
                {
                    "CIK": "1035909",
                    "AccessionNumber": "0001213900-21-057012",
                    "FilingDate": "2021-11-05T00:00:00",
                    "AcceptanceDate": "2021-11-05T16:01:28",
                    "Filename": "ownership.xml",
                    "Ticker": "EEFT",
                    "CompanyName": "EURONET WORLDWIDE, INC.",
                    "SIC": 6099,
                    "Owner": "Brown Michael J",
                    "Relationship": "CEO & President",
                    "TransactionDate": "2021-11-03T00:00:00",
                    "TransactionType": "Option Exercise",
                    "Cost": 16.39,
                    "Shares": 21600,
                    "PositionValue": 354024,
                    "SharesTotal": 1343210,
                    "IsTenPercentOwner": false,
                    "IsDirect": true
                },
                {
                    "CIK": "1403084",
                    "AccessionNumber": "0001213900-21-043874",
                    "FilingDate": "2021-08-19T00:00:00",
                    "AcceptanceDate": "2021-08-19T16:02:22",
                    "Filename": "ownership.xml",
                    "Ticker": "EEFT",
                    "CompanyName": "EURONET WORLDWIDE, INC.",
                    "SIC": 6099,
                    "Owner": "Bianchi Juan",
                    "Relationship": "CEO, Money Transfer Division",
                    "TransactionDate": "2020-11-18T00:00:00",
                    "TransactionType": "Sale",
                    "Cost": 132.47,
                    "Shares": 4168,
                    "PositionValue": 552135,
                    "SharesTotal": 0,
                    "IsTenPercentOwner": false,
                    "IsDirect": true
                },
                {
                    "CIK": "1193824",
                    "AccessionNumber": "0001213900-21-032711",
                    "FilingDate": "2021-06-16T00:00:00",
                    "AcceptanceDate": "2021-06-16T16:07:17",
                    "Filename": "ownership.xml",
                    "Ticker": "EEFT",
                    "CompanyName": "EURONET WORLDWIDE, INC.",
                    "SIC": 6099,
                    "Owner": "STRANDJORD M JEANNINE",
                    "Relationship": "Director",
                    "TransactionDate": "2021-06-15T00:00:00",
                    "TransactionType": "Buy",
                    "Cost": 146.5,
                    "Shares": 1166,
                    "PositionValue": 170819,
                    "SharesTotal": 48000,
                    "IsTenPercentOwner": false,
                    "IsDirect": true
                }
            ]
        },
        "type": "insider-transactions",
        "id": "b7bb14c3-d895-4929-b94c-96c03c745ae4"
    }
}

export const operations: Operations = {
    "data": {
        "attributes": {
            "company": {
                "cik": "1018724",
                "name": "AMAZON COM INC",
                "ticker": "amzn"
            },
            "count": 19,
            "filing": {
                "accessionNumber": "0001018724-20-000004",
                "filingCount": 0,
                "filingDate": "2020-01-31T00:00:00",
                "name": "Consolidated Statements Of Operations",
                "period": "2019-12-31T00:00:00",
                "source": "10-K"
            },
            "result": {
                "CostOfGoodsAndServicesSold": 165536000000,
                "CostsAndExpenses": 265981000000,
                "EarningsPerShareBasic": 23.46,
                "EarningsPerShareDiluted": 23.01,
                "GeneralAndAdministrativeExpense": 5203000000,
                "IncomeLossFromContinuingOperationsBeforeIncomeTaxesMinorityInterestAndIncomeLossFromEquityMethodInvestments": 13976000000,
                "IncomeLossFromEquityMethodInvestments": -14000000,
                "IncomeTaxExpenseBenefit": -2374000000,
                "InterestExpense": -1600000000,
                "InvestmentIncomeInterest": 832000000,
                "MarketingExpense": 18878000000,
                "NetIncomeLoss": 11588000000,
                "NonoperatingIncomeExpense": -565000000,
                "OperatingIncomeLoss": 14541000000,
                "OtherCostAndExpenseOperating": 201000000,
                "OtherNonoperatingIncomeExpense": 203000000,
                "RevenueFromContractWithCustomerExcludingAssessedTax": 280522000000,
                "WeightedAverageNumberOfDilutedSharesOutstanding": 504000000,
                "WeightedAverageNumberOfSharesOutstandingBasic": 494000000
            },
            "status": 0
        },
        "id": "970506dc-2d4e-4b8e-85f3-b4cee30773d4",
        "type": "statement"
    },
    "meta": {
        "copyright": "Copyright 2020 Last10K.com All Rights Reserverd",
        "terms": "https://dev.last10k.com/terms"
    }
}

export const balanceSheet: BalanceSheet = {
    "data": {
        "attributes": {
            "company": {
                "cik": "789019",
                "name": "MICROSOFT CORP",
                "ticker": "msft"
            },
            "count": 33,
            "filing": {
                "accessionNumber": "0001564590-20-034944",
                "filingCount": 0,
                "filingDate": "2020-07-31T00:00:00",
                "name": "Balance Sheets",
                "period": "2020-06-30T00:00:00",
                "source": "10-K"
            },
            "result": {
                "AccountsPayableCurrent": 12530000000,
                "AccountsReceivableNetCurrent": 32011000000,
                "AccruedIncomeTaxesCurrent": 2130000000,
                "AccruedIncomeTaxesNoncurrent": 29432000000,
                "AccumulatedOtherComprehensiveIncomeLossNetOfTax": 3186000000,
                "Assets": 301311000000,
                "AssetsCurrent": 181915000000,
                "CashAndCashEquivalentsAtCarryingValue": 13576000000,
                "CashCashEquivalentsAndShortTermInvestments": 136527000000,
                "CommonStocksIncludingAdditionalPaidInCapital": 80552000000,
                "ContractWithCustomerLiabilityCurrent": 36000000000,
                "ContractWithCustomerLiabilityNoncurrent": 3180000000,
                "DeferredIncomeTaxLiabilitiesNet": 204000000,
                "EmployeeRelatedLiabilitiesCurrent": 7874000000,
                "FiniteLivedIntangibleAssetsNet": 7038000000,
                "Goodwill": 43351000000,
                "InventoryNet": 1895000000,
                "Liabilities": 183007000000,
                "LiabilitiesAndStockholdersEquity": 301311000000,
                "LiabilitiesCurrent": 72310000000,
                "LongTermDebtCurrent": 3749000000,
                "LongTermDebtNoncurrent": 59578000000,
                "LongTermInvestments": 2965000000,
                "OperatingLeaseLiabilityNoncurrent": 7671000000,
                "OperatingLeaseRightOfUseAsset": 8753000000,
                "OtherAssetsCurrent": 11482000000,
                "OtherAssetsNoncurrent": 13138000000,
                "OtherLiabilitiesCurrent": 10027000000,
                "OtherLiabilitiesNoncurrent": 10632000000,
                "PropertyPlantAndEquipmentNet": 44151000000,
                "RetainedEarningsAccumulatedDeficit": 34566000000,
                "ShortTermInvestments": 122951000000,
                "StockholdersEquity": 118304000000
            },
            "status": 0
        },
        "id": "16eedea7-625f-4e9d-80cd-654d46b7b4d5",
        "type": "statement"
    },
    "meta": {
        "copyright": "Copyright 2020 Last10K.com All Rights Reserverd",
        "terms": "https://dev.last10k.com/terms"
    }
}