var Relation = {};
var Joi = AA.Joi;

Relation.user_target_user = {
    user_id: Joi.string().regex(/[a-zA-Z0-9]{5,30}/).required(),
    client_id: Joi.string().regex(/[a-zA-Z0-9]{12,16}/).required(),
    target_id: Joi.array().required()
};

module.exports = Relation;