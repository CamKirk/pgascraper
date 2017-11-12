const cheerio = require('cheerio');
const termList = require('./terms.js');
const fs = require('fs');
const request = require('request');

let scrapedArray = [];



termList.terms.forEach((term)=>{
  request('https://www.wikipedia.org/wiki/' + term, (err, res, body)=>{
    if (err) throw err;

    $ = cheerio.load(body);
    //console.log($('div.mw-parser-output > p').first().html())
    const definition = $('div.mw-parser-output > p').first().text();
    const output = {[term] : definition};
    scrapedArray.push(output);
    if (scrapedArray.length == termList.terms.length){
      fs.appendFile('results.json', JSON.stringify(scrapedArray,null,'\t'), (err)=>{
      console.log('appended file');
    })
    }
  });
});





//loop over terms.js
//use request to poll wikipedia page
//use cheerio.load to init token
//use .first to grab first <p> tag after the header
//store data into a array of objects
