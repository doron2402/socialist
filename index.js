if (!global.AA) { global.AA = {}; }

//GET ENVIORMENT
var environment = 'dev';
if (process.argv['env']) {
    switch (process.argv['env'].toLowerCase()) {
        case 'stage':
            environment = 'stage';
            break;
        case 'prod':
            environment = 'prod';
            break;
        default:
            environment = 'dev';
            break;
    }
}


//Modules
var Hapi = require("hapi");
AA.Joi = require("joi");
AA.Mongo = require('mongoose');
AA.async = require('async');
AA._ = require('lodash');
//Settings
AA.Settings = require('./settings')({env: environment});

AA.MongoDB = AA.Mongo.connect(AA.Settings.MONGODB.URL);
AA.Routes = require('./routes');
AA.Schema = require('./schema');
AA.Models = require('./models');

AA.server = new Hapi.Server(AA.Settings.PORT, AA.Settings.HOST, AA.Settings.OPTIONS);

AA.server.route([
    AA.Routes.external.post_new_lead
]);
AA.server.start(function() {
    console.log("Hapi server started @", AA.server.info.uri);
});