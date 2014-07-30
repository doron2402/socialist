var follow = {};
follow.routes = {};

follow.routes.follow = {
    method: 'POST',
    path: '/api/{client_id}/users/{user_id}/follow',
    config: {
        handler: function (request, reply) {
            return reply({response: 'OK', result: request.params});
        },
        validate: {
            params: {
                client_id   : AA.Joi.string().min(12).max(16).required(),
                user_id     : AA.Joi.string().min(5).max(32).required()
            },
            payload: {
                target_id: AA.Joi.array().required(),

            }
        }
    }
};

follow.routes.unfollow = {
    method: 'DEL',
    path: '/api/{client_id}/users/{user_id}/unfollow',
    config: {
        handler: function (request, reply) {
            return reply({response: 'OK', result: request.params});
        },
        validate: {
            params: {
                client_id   : AA.Joi.string().min(12).max(16).required(),
                user_id     : AA.Joi.string().min(5).max(32).required()
            },
            payload: {
                target_id: AA.Joi.array().required(),

            }
        }
    }
};

follow.routes.check_relationship = {
    method: 'GET',
    path: '/api/{client_id}/users/{user_id}/relation/{target_id}',
    config: {
        handler: function (request, reply) {
            return reply({response: 'OK', result: request.params});
        },
        validate: {
            params: {
                client_id   : AA.Joi.string().min(12).max(16).required(),
                user_id     : AA.Joi.string().min(5).max(32).required(),
                target_id: AA.Joi.string().min(5).max(32).required()
            }
        }
    }
};

module.exports = follow;