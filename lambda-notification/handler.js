'use strict';

var config = require('./config');
var client = require('twilio')(config.accountSid, config.authToken);

module.exports.hello = (event, context, callback) => {

    if( !event.queryStringParameters || !event.queryStringParameters.name ) {
        callback(null, {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
            },
            body: JSON.stringify({success: false, message: 'invalid parameters'})
        });
        return;
    }

    var message = "Hey, \"" + event.queryStringParameters.name + "\" says they're " + event.queryStringParameters.state;

    if( event.queryStringParameters.msg ){
        message = message + ". They also said: \"" + event.queryStringParameters.msg + "\".";
    }

    client.messages.create({
        body: message,
        to: config.sendTo,
        from: config.sendFrom
    }, (err,data) => {
        callback(null, {
            statusCode: err ? 500 : 200,
            headers: {
                "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
            },
            body: JSON.stringify({
                'success': err ? false : true,
                'message': err ? err : 'sent!'
            })
        });
    });
};