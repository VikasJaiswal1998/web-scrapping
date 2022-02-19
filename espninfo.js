// import * as cheerio from cheerio
const request = require('request');
// const cheerio  = request('cheerio') ;
const cheerio = require('cheerio');

// request('https://www.worldometers.info/coronavirus/',cb); 
// let url = 'https://www.cricbuzz.com/live-cricket-scores/40543/1st-test-south-africa-tour-of-new-zealand-2022';

request('https://www.espncricinfo.com/series/ranji-trophy-2021-22-1280196/delhi-vs-tamil-nadu-elite-group-h-1280422/live-cricket-score' , cb)

function cb (error, response, body)
{
  if(error)
  {
    console.log(error);
  }
  else{
    handlebody(body);
  }

}

function handlebody(html)   // we can use this function in cb
{
  // use cheerio for taking html ;
  let seltool =  cheerio.load(html);
  console.log(seltool);
}

console.log('after')

