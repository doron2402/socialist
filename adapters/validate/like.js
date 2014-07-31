var Like = {};
var Joi = AA.Joi;

Like.user_like_item = {
    user_id: Joi.string().regex(/[a-zA-Z0-9]{5,30}/).required(),
    client_id: Joi.string().regex(/[a-zA-Z0-9]{12,16}/).required(),
    item_id: Joi.string().regex(/[a-zA-Z0-9]{8,32}/).required().required()
};

Like.user_like_all = {
    user_id: Joi.string().regex(/[a-zA-Z0-9]{5,30}/).required(),
    client_id: Joi.string().regex(/[a-zA-Z0-9]{12,16}/).required()
};

module.exports = Like;