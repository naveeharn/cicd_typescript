interface Currency {
    symbol: string;
    values: string;
    timestamp: string;
}

const mock_data = {
    "symbol": "USD",
    "values": "100",
    "timestamp": "2023-05-24T12:00:00Z"
};

let currency: Currency = JSON.parse(JSON.stringify(mock_data))
console.log(currency);

console.log(Object.values(mock_data));
