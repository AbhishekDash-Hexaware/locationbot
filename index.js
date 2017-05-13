//===================================================DEPENDENCIES DECLARATION=====================================================

'use strict';
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let https= require('https');
var port = process.env.PORT || 3000;
var Alexa = require('alexa-sdk');
var sessionHandlers=require('./src/alexa.js');
var request=require('request');
var address;
//dependencies.
//=======================================HANDLER FUNCTION FOR AWS LAMBDA FOR CHANNEL DETECTION=====================================
//handler function for AWS Lambda
exports.handler = function(event, context, callback){

  console.log("1"+JSON.stringify(event));
  console.log("1"+JSON.stringify(context));


  if(event.hasOwnProperty('result'))//session from APIAI Webhook Request JSON
  {
  	if (event.result.action=="input.welcome"){
    console.log("got here to find address");
    // consle.log(JSON.parse(event).result.action)
    var facebookResponse={
               	  "speech": "",
                    "displayText": "",
                    "data": {
                      "facebook": {
                                "text":"please share your location",
                                "quick_replies":[
								  {
								    "content_type":"location",
								  }
								]
                            }
                    },
                    "contextOut": [],
                    "source": "DuckDuckGo"
                  };
    context.succeed(facebookResponse);


    // console.log(event.originalRequest.data.postback.data);
    // var lat =event.originalRequest.data.postback.data.lat;
    // var long =event.originalRequest.data.postback.data.long;
    // var coordinate= (lat+","+long).toString();

// 	var options = { method: 'POST',
//   	url: 'https://maps.googleapis.com/maps/api/geocode/json',
//   	qs: 
//    { latlng: coordinate,
//      key: 'AIzaSyCyDHNIxXBmoO8EHoJJK8gAfR5rO55BTX4' },
//   	headers: 
//    { 'postman-token': '4f2daca8-4b06-1328-0317-a40b9ea7a2ac',
//      'cache-control': 'no-cache',
//      'app-id': '95e202a2',
//      'app-key': '562f45d3d9c8a9e2871825a93bb34807',
//      'content-type': 'application/json' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   	console.log(JSON.parse(body).results[0].formatted_address);
//   	address=JSON.parse(body).results[0].formatted_address;
//   	var facebookResponse={
//                	  "speech": "",
//                     "displayText": "",
//                     "data": {
//                       "facebook": {
//                                 "text":address
//                             }
//                     },
//                     "contextOut": [],
//                     "source": "DuckDuckGo"
//                   };
//   	context.succeed(facebookResponse);
//   	console.log("sent")
// });
}
    
    }//FOR API.AI CONTEXTS

else
  {
      console.log("Unknown Source");
  }//FOR UNKNOWN SOURCES
};
//===============================================ALEXA SKILL INTENT CONTAINER================================================
//ALEXA SKILLS CONTAINER
//var handlers contain all alexa intents sdk style.
var handlers = sessionHandlers;
//=================================================API.AI CONTEXTS CONTAINER=================================================

//==============================================SERVER HOSTING CODE BLOCK====================================================
