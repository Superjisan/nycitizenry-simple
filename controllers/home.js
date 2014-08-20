/**
 * GET /
 * Home page.
 */

var apiKeys = require('./apiKeys');
var NYTDistricts = require('nytdistricts');
var nytAPIkey = apiKeys.nytAPIkey;
var nytdistricts = new NYTDistricts(nytAPIkey);

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.whichDistrict = function(req,res){
    //get the latlong
    var lattitude = req.body.lat;
    var longitude = req.body.long;

    nytdistricts.getCityCouncilDistrict(lattitude,longitude, function(err,data){
      if(err) throw err;
      console.log('my City Council district: ', data);
      res.json(200, data);
    });

};
