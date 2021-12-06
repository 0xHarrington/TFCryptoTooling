# investment-tooling
Collection of models and functions to help inform a retail user's Web 3 investments.

## Market Indicators

The main first project I want to develop is a suite of aggregated market data. This can be served in a (permissioned) chart-based front-end dashboard like [Blockware's](https://intelligence.blockwaresolutions.com/), or simply as a CLI.

### Data

Leveraging the [CCXT](https://github.com/ccxt/ccxt) library, we will be able to have an aggregated feed of...

- Funding rates
- Open Interest
- Options IV Curves

We can also incorporate a simple web scraper to grab the Crypto Fear and Greed index data from [Alternative](https://alternative.me/crypto/fear-and-greed-index/) for

- Bitcoin
- Ethereum

Over the longer term (and with a modest regular investment), I'd like to also incorporate the [Santiment](https://app.santiment.net/) APIs for

- Social Volume
- Social Sentiment


