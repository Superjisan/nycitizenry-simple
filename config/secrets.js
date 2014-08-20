/**
 * IMPORTANT * IMPORTANT * IMPORTANT * IMPORTANT * IMPORTANT * IMPORTANT *
 *
 * You should never commit this file to a public repository on GitHub!
 * All public code on GitHub can be searched, that means anyone can see your
 * uploaded secrets.js file.
 *
 * I did it for your convenience using "throw away" credentials so that
 * all features could work out of the box.
 *
 * Untrack secrets.js before pushing your code to public GitHub repository:
 *
 * git rm --cached config/secrets.js
 *
 * If you have already commited this file to GitHub with your keys, then
 * refer to https://help.github.com/articles/remove-sensitive-data
*/

module.exports = {

  db: process.env.MONGODB|| 'mongodb://localhost/nytcitizenry',

  sessionSecret: process.env.SESSION_SECRET || 'FranklinAndTheodoreRoosevelt',

  //to do: set the right NYT key here
  nyt: {
    key: process.env.NYT_KEY || '3c02e9b082f6cbdad519a28bbcf9438e:15:69568477'
  }


};
