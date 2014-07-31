#!/bin/env node

/**
 *   This script will create fake users in mongodb collection
**/
var env = 'dev';
if (process.argv['env']) {
    env = process.argv.toLowerCase();
}
var Settings = require('../../settings')({env: env});
var mongodb = require('mongoose');
var db = mongodb.connect(Settings.MONGODB.URL);
var user_schema = require('../../schemas').user;
var user_model = mongodb.model('User', user_schema);
var users = [
{username: 'doron1', email: 'doron1@segaldoron.com', age: 20},
{username: 'doron2', email: 'doron2@segaldoron.com', age: 30},
{username: 'doron3', email: 'doron3@segaldoron.com', age: 40},
{username: 'doron4', email: 'doron4@segaldoron.com', age: 50},
{username: 'doron5', email: 'doron5@segaldoron.com', age: 60},
{username: 'doron6', email: 'doron6@segaldoron.com', age: 23},
{username: 'doron7', email: 'doron7@segaldoron.com', age: 34},
{username: 'doron8', email: 'doron8@segaldoron.com', age: 54}
];
var count = 0;
users.forEach(function(user) {
    var tmp_user = new user_model(user);
    tmp_user.save(function (err, res) {
        if (err) return console.error(err);
        count++;
        console.log('Processing user: ' + count);
        console.log(res);
        console.log('_________________________________________________________________');
    });
});