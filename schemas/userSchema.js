var userSchema = AA.Mongo.Schema({
    name        :       String,
    updated_at  :       { type: Date, default: Date.now },
    age         :       { type: Number, min: 0, max: 120 },
    followers   :       [],
    following   :       [],
    following_ct:       Number,
    followers_ct:       Number,
    user_id     :       String
});

module.exports = userSchema;