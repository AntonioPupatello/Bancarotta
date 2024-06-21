export type CurrencyConfig = {
    id: string;
    name: string;
    flag: string;
    symbol: string;
}

export type RateValue = CurrencyConfig & { 
    value: number;
};

export interface RatesResponse {
    result:                string;
    provider:              string;
    documentation:         string;
    terms_of_use:          string;
    time_last_update_unix: number;
    time_last_update_utc:  string;
    time_next_update_unix: number;
    time_next_update_utc:  string;
    time_eol_unix:         number;
    base_code:             string;
    rates:                 { [key: string]: number };
}


export const currencyConfig: CurrencyConfig[] = [
    {
        id: "EUR", 
        name: "euro",
        flag: "🇪🇺",
        symbol: "€"
    },
    {
        id: "USD",
        name: "dollar",
        flag: "🇺🇸",
        symbol: "$"
    },
    {
        id: "GBP",
        name: "pound",
        flag: "🇬🇧",
        symbol: "£"
    }, 
    {
        id: "JPY",
        name: "yen",
        flag: "🇯🇵",
        symbol: "¥"
    },
    {
        id: "CNY",
        name: "yuan",
        flag: "🇨🇳",
        symbol: "¥"
    },
    {
        id: "INR",
        name: "rupee",
        flag: "🇮🇳",
        symbol: "₹"
    },
    {
        id: "AUD",
        name: "dollar",
        flag: "🇦🇺",
        symbol: "$"
    },
    {
        id: "CAD",
        name: "dollar",
        flag: "🇨🇦",
        symbol: "$"
    },
    {
        id: "CHF",
        name: "franc",
        flag: "🇨🇭",
        symbol: "Fr"
    },
    {
        id: "SEK",
        name: "krona",
        flag: "🇸🇪",
        symbol: "kr"
    },
    {
        id: "NZD",
        name: "dollar",
        flag: "🇳🇿",
        symbol: "$"
    },
    {
        id: "KRW",
        name: "won",
        flag: "🇰🇷",
        symbol: "₩"
    },
    {
        id: "SGD",
        name: "dollar",
        flag: "🇸🇬",
        symbol: "$"
    },
    {
        id: "NOK",
        name: "krone",
        flag: "🇳🇴",
        symbol: "kr"
    },
    {
        id: "MXN",
        name: "peso",
        flag: "🇲🇽",
        symbol: "$"
    },
    {
        id: "HKD",
        name: "dollar",
        flag: "🇭🇰",
        symbol: "$"
    },
    {
        id: "TRY",
        name: "lira",
        flag: "🇹🇷",
        symbol: "₺"
    },
    {
        id: "RUB",
        name: "ruble",
        flag: "🇷🇺",
        symbol: "₽"
    },
    {
        id: "ZAR",
        name: "rand",
        flag: "🇿🇦",
        symbol: "R"
    },
    {
        id: "BRL",
        name: "real",
        flag: "🇧🇷",
        symbol: "R$"
    }
]