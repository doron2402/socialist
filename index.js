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
AA.Hapi = require("hapi");
AA.Joi = require("joi");
AA.Mongo = require('mongoose');
AA.Neo4j = require('node-neo4j');
AA.async = require('async');
AA._ = require('lodash');
//Settings
AA.Settings = require('./settings')({env: environment});
AA.MongoDB  = AA.Mongo.connect(AA.Settings.MONGODB.URL);
AA.Neo4j    = new AA.Neo4j(A.Settings.NEO4J.URL);

AA.Routes = require('./routes');
AA.Schema = require('./schemas');
AA.Models = require('./models');

AA.server = new AA.Hapi.Server(AA.Settings.PORT, AA.Settings.HOST);

AA.server.route([
    AA.Routes.external.follow.routes.follow
]);

AA.server.start(function() {
    console.log("Hapi server started @", AA.server.info.uri);
});