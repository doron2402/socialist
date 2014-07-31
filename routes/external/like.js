var like = {};
var _ = AA.lodash;
var joi = AA.Joi;
var valid = AA.Validation;
like.routes = {};

like.routes.user_like_item_id = {
    method: 'POST',
    path: '/api/{client_id}/users/{user_id}/like/{item_id}',
    config: {
        handler: function (request, reply) {
            var args = _.merge(request.params, request.payload);
            joi.validate(args, valid.Like.user_target_user, function (err, value) {
                if (err) {
                    return reply({ code: 'Fail', err: { code: err.name, details: err.details[0] } });
                }
                return reply({response: 'OK', result: args});
            });
        }
    }
};

like.routes.check_if_like = {
    method: 'GET',
    path: '/api/{client_id}/users/{user_id}/like/{item_id}',
    config: {
        handler: function (request, reply) {
            var args = _.merge(request.params, request.payload);
            joi.validate(args, valid.Like.user_like_item, function (err, value) {
                if (err) {
                    return reply({ code: 'Fail', err: { code: err.name, details: err.details[0] } });
                }
                return reply({response: 'OK', result: args});
            });
        }
    }
};

like.routes.get_all_likes = {
    method: 'GET',
    path: '/api/{client_id}/users/{user_id}/like/all',
    config: {
        handler: function (request, reply) {
            var args = _.merge(request.params, request.payload);
            joi.validate(args, valid.Like.user_like_all, function (err, value) {
                if (err) {
                    return reply({ code: 'Fail', err: { code: err.name, details: err.details[0] } });
                }
                return reply({response: 'OK', result: args});
            });
        }
    }
};


module.exports = like;