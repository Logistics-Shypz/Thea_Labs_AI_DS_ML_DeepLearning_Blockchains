/*
* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/
/*exports.helloHttp = function helloHttp (req, res) {
  response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working

  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response 
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
};
*/

/*
staging.newagent-6850b.appspot.com

gcloud beta functions deploy helloHttp --stage-bucket staging.newagent-6850b.appspot.com --trigger-http


https://us-central1-newagent-6850b.cloudfunctions.net/helloHttp
gcloud config set project newagent-6850b

*/


// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
const http = require('http');
const host = 'api.worldweatheronline.com';
const wwoApiKey = '[a79e433e5c844babae461951172710]';



function test(x){

	 return x;
}

exports.weatherWebhook = (req, res) => {
 
 let city = req.body['geo-city'];
 let date = '';
  if (req.body['date']) {
    date = req.body['date'];
    console.log('Date: ' + date);
  }

  

   test(city).then((output) => {
    // Return the results of the weather API to Dialogflow
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'speech': output, 'displayText': output }));
  }).catch((error) => {
    // If there is an error let the user know
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'speech': error, 'displayText': error }));
  });

 
};



