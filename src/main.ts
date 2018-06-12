import {Marketnames} from "./marketnames";
import {Ticker} from "./ticker";
const Poloniex = require('poloniex-api-node');
const poloniex = new Poloniex();
const test = blub('arsch');

poloniex.subscribe('ticker');

poloniex.on('message', (channelName: any, data: Ticker, seq: any) => {
    if (channelName === 'ticker')
        if (data.currencyPair === Marketnames.ETH)
            console.log("ETH price: " + data.last + " BTC.");
});

poloniex.on('open', () => {
    console.log(`Poloniex WebSocket connection open`);
});

poloniex.on('close', (reason: any, details: any) => {
    console.log(`Poloniex WebSocket connection disconnected`);
});

poloniex.on('error', (error: any) => {
    console.log(`An error has occured`);
});

poloniex.openWebSocket({ version: 2 });