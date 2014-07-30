var Settings = function(args) {
    console.log(args);
    var json_data = require('./' + args.env + '.json');
    console.log(json_data);
    return json_data;
};

module.exports = Settings;