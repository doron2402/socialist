var follow = {};
var _ = AA.lodash;
var joi = AA.Joi;
var valid = AA.Validation;
follow.routes = {};

follow.routes.follow = {
    method: 'POST',
    path: '/api/{client_id}/users/{user_id}/follow',
    config: {
        handler: function (request, reply) {
            var args = _.merge(request.params, request.payload);
            joi.validate(args, valid.Follow.user_target_user, function (err, validate_args) {
                if (err) {
                    return reply({ code: 'Fail', err: { code: err.name, details: err.details[0] } });
                }
                return AA.Controllers.follow.user_follow_target(validate_args, request, reply);
            });
        }
    }
};

follow.routes.unfollow = {
    method: 'DEL',
    path: '/api/{client_id}/users/{user_id}/unfollow',
    config: {
        handler: function (request, reply) {
            var args = _.merge(request.params, request.payload);
            joi.validate(args, valid.Follow.user_target_user, function (err, validate_args) {
                if (err) {
                    return reply({ code: 'Fail', err: { code: err.name, details: err.details[0] } });
                }
                return reply({response: 'OK', result: validate_args});
            });
        },
    }
};

follow.routes.check_relationship = {
    method: 'GET',
    path: '/api/{client_id}/users/{user_id}/relation/{target_id}',
    config: {
        handler: function (request, reply) {
            var args = _.merge(request.params, request.payload);
            joi.validate(args, valid.Follow.user_target_user, function (err, validate_args) {
                if (err) {
                    return reply({ code: 'Fail', err: { code: err.name, details: err.details[0] } });
                }
                return reply({response: 'OK', result: validate_args});
            });
        }
    }
};

module.exports = follow;