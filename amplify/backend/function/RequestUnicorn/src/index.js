// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const randomBytes = require('crypto').randomBytes;

const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient();

const fleet = [
  {
    Name: 'Bucephalus',
    Color: 'Golden',
    Gender: 'Male',
  },
  {
    Name: 'Shadowfax',
    Color: 'White',
    Gender: 'Male',
  },
  {
    Name: 'Rocinante',
    Color: 'Yellow',
    Gender: 'Female',
  },
];

exports.handler = (event, context, callback) => {
  if (!event.requestContext.authorizer) {
    errorResponse('Authorization not configured', context.awsRequestId, callback);
    return;
  }

  const rideId = toUrlString(randomBytes(16));
  console.log('Received event (', rideId, '): ', event);
  
  // המשך הפונקציה כנראה ממשיך בהמשך הקובץ...
};