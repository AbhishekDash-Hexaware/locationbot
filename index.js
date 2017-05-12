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

//dependencies.
//=======================================HANDLER FUNCTION FOR AWS LAMBDA FOR CHANNEL DETECTION=====================================
//handler function for AWS Lambda
exports.handler = function(event, context, callback){

  console.log("1"+JSON.stringify(event));
  console.log("1"+JSON.stringify(context));

  // if(event.hasOwnProperty('session')) //session from Alexa Request JSON
  // {
  //   console.log("RequestFromAlexaSkillKit");
  //   //Trigger Alexa Function
  //   var alexa = Alexa.handler(event, context);
  //   alexa.registerHandlers(handlers); //handlers contain alexa-sdk function based intent logic
  //   alexa.execute();
  // }//FOR ALEXA SKILL

  if(event.hasOwnProperty('result'))//session from APIAI Webhook Request JSON
  {
    console.log("RequestFromAPI.AI");
    //Prepare API.AI Response
    console.log(event.originalRequest);
    
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




// var response={
//                 "speech": sym,
//                 "displayText": "sym",
//                 "data": {},
//                 "contextOut": [],
//                 "source": "DuckDuckGo"
//               };
//==============================================SERVER HOSTING CODE BLOCK====================================================
if (module === require.main) {
  // [START server]
  // Start the server
  let server = app.listen(process.env.PORT || 8080, function () {
    let port = server.address().port;
    console.log('App listening on port %s', port);
  });
  // [END server]
}
