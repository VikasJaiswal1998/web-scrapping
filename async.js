//  sync way of doing 

const fs = require('fs')
// let data = fs.readFileSync('f1.txt')
// console.log('this is my data'+ data)

// async way of doing // exexute function with priority wise


// console.log('before') // taken less time 


// function cb(err , data) // take appreox 1 sec
// {
//     if(err)
//     {
//         console.log('error');
//     }
//     else{
//         console.log("this is my data "+data)
//     }
// }

// fs.readFile('f1.txt' , cb);

// console.log('after');


  