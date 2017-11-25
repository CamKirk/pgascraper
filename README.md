# pgascraper

pgascraper is a first-pass scraper used for the pga project with @lmcneel and @hamza765. It uses the cheerio npm package to scrape wikipedia for terms and their definitions by looking at the first `<p>` tag in the page, and sanitizes the keyword for parenthesis and underscores. In addition, it also sanitizes the definition for the box tags used for references on wikipedia. Note that some terms did not get a full definition. Entry point is server.js, simply clone and `npm i`
