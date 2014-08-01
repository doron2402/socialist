var User = {};
var Joi = AA.Joi;
User.create = {
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
    birthdate: Joi.date().min('1-1-1974').optional(),
    email: Joi.string().email().required(),
    phone: Joi.number().required(),
    first_name: Joi.string().regex(/[a-zA-Z]{2,32}/).required(),
    last_name: Joi.string().regex(/[a-zA-Z]{2,32}/).required(),
    middle_name: Joi.string().regex(/[a-zA-Z]{2,32}/).optional()
};

User.user_get = {
    user_id: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
    client_id: Joi.string().regex(/[a-zA-Z0-9]{8,16}/).required()
};

User.get_by_username = {
    username: Joi.string().alphanum().min(3).max(30).required()
};

User.users_get = {
    users_ids: Joi.array(),
    client_id: Joi.string().regex(/[a-zA-Z0-9]{8,16}/).required()
};

User.create_user = {
    client_id: Joi.string().regex(/[a-zA-Z0-9]{8,16}/).required()
};

User.user_update = {
    user_id: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
    client_id: Joi.string().regex(/[a-zA-Z0-9]{8,16}/).required()
};

User.delete_by_id = {
    user_id: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
};

module.exports = User;