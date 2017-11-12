const cheerio = require('cheerio');
const termList = require('./terms.js');
const fs = require('fs');
const request = require('request');

request('https://www.wikipedia.org/wiki/Javascript', (err, res, body)=>{
  //if err throw err;
  //console.log(res);
  //console.log(body);

  $ = cheerio.load(body);
  console.log($('div.mw-parser-output > p').first())
});

//loop over terms.js
//use request to poll wikipedia page
//use cheerio.load to init token
//use .first to grab first <p> tag after the header
//store data into a array of objects
