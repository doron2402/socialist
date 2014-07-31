var Mongo = require('mongoose');
var userSchema = Mongo.Schema({
    name        :       String,
    username    :       String,
    user_id     :       String,
    email       :       String,
    phone       :       String,
    updated_at  :       { type: Date, default: Date.now },
    age         :       { type: Number, min: 0, max: 120 },
    followers   :       [],
    following   :       [],
    following_ct:       Number,
    followers_ct:       Number,
    country     :       String,
    state       :       String,
    city        :       String,
    address     :       String
});

module.exports = userSchema;