# Terrace F. Crypto Tooling

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

## Backend

Since we're using Python for the data processing, prediction, and computation, it makes sense to run a Flask backend. We'll be using a python virtual environment in order to not mess up your global python config and packages. Download the appropriate [miniconda](https://docs.conda.io/en/latest/miniconda.html) version for your machine, it shouldn't take long.

Initailize your local venv with the following commands:

```bash
cd flask
conda env create -f environment.yml
```

Then launch the app by running it with your python3:

```bash
# from inside /flask
python3 app.py
```

Navigate to [`localhost:5000/api/`](localhost:5000/api/) to see the api index. We'll be serving all backend data from `/api/*`

## Frontend

React is the most widely deployed JavaScript front end framework, boasting countless community-built libraries and useful dev tools. Our front end is contained within the `/client` directory. Prep and launch it by running:

```bash
cd client
npm install .
npm start
```

Your browser should open, showing the localhost dev version of the app at port `3000`. If not, navigate manually to [`localhost:3000`](localhost:3000).

#### Colorscheme

The Terrace F. Crypto token sign uses the following hex colors:

- **Green**: `#008037`
- **Yellow**: `#FFDE59`

Using the website [coolors.co](https://coolors.co/), I found other colors to complement our green and yellow.

- _Princeton_ Orange: `#E77728`
- Soft Black: `#262626`
- Soft White: `#F7F6F3`
- Blue: `#087CA7`

Find the colors side-by-side [here](https://coolors.co/008037-ffde59-262626-f7f6f3-e77728-087ca7). My thought is to have

- the blue for global background
- the black / white as element backgrounds
- white / black for text
- candlesticks as green and orange
- yellow for callouts and accents

We can get fancy later down the line and alternate dark/light CSS colorschemes with a button. Until then, I'd like to use the dark colorscheme as our default.
