// download request module and cheerio
// npm i module_name
// request module -> take request from web and give Response
//cheerio helps us to take meaningful data from the html;
// webscrapping is notthing but it is just a reverse engineering

const request = require('request');
const cheerio = require('cheerio');
console.log('before')

 function cb (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}

request('https://www.espncricinfo.com/series/ranji-trophy-2021-22-1280196/delhi-vs-tamil-nadu-elite-group-h-1280422/live-cricket-score',cb);


console.log('after')

// html dom meinagar same classes hogi to class ke selectors array form mein store hogi 





// request('https://www.worldometers.info/coronavirus/',cb); // take two paremeter
// console.log('b')

// function cb (error, response, body)
// {
//   if(error)
//   {
//     console.log(error);
//   }
//   else{
//     handlebody(body);
//   }

// }

// function handlebody(html)   // we can use this function in cb
// {
//   // use cheerio for taking html ;
//   let seltool =  cheerio.load(html);
//   console.log(seltool)

//   // let extractsel = seltool( '.maincounter-number span');  // sapan [a , b , c]
//   // let headings = seltool('#maincounter-wrap h1');
//   // // for(let  i = 0 ; i< extractsel.length ; i++)
//   // // {
//   // //   let data = seltool(extractsel[i]).text();
//   // //   console.log(data);
//   // // }
//   // let i = 0 , j =0 ;
//   // while(i < extractsel.length && j < headings.length)
//   // {
//   //   let data = seltool(extractsel[i]).text();
//   //   let hdata = seltool(headings[i]).text();
//   //   console.log(hdata + " " + data);
//   //   i++;
//   //   j++; 
//   // }
// }

// console.log('after')


