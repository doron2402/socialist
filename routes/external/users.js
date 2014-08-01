var users = {};
var _ = AA.lodash;

users.create_user = {
    method: 'POST',
    path: '/api/{client_id}/users/create',
    config: {
        handler: function (request, reply) {
            var args = _.merge(request.params, request.payload);
            joi.validate(args, valid.User.create_user, function (err, value) {
                if (err) {
                    return reply({ code: 'Fail', err: { code: err.name, details: err.details[0] } });
                }
                return reply({response: 'OK', result: args});
            });
        }
    }
};
users.update_user = {
    method: 'PUT',
    path: '/api/{client_id}/users/{user_id}/update',
    config: {
        handler: function (request, reply) {
            var args = _.merge(request.params, request.payload);
            joi.validate(args, valid.User.user_update, function (err, value) {
                if (err) {
                    return reply({ code: 'Fail', err: { code: err.name, details: err.details[0] } });
                }
                return reply({response: 'OK', result: args});
            });
        }
    }
};

users.get_user = {
    method: 'GET',
    path: '/api/{client_id}/users/{user_id}',
    config: {
        handler: function (request, reply) {
            var args = _.merge(request.params, request.payload);
            joi.validate(args, valid.User.user_get, function (err, value) {
                if (err) {
                    return reply({ code: 'Fail', err: { code: err.name, details: err.details[0] } });
                }
                return reply({response: 'OK', result: args});
            });
        }
    }
};

/*
    GET users data pass an array of users id as a query param or payload users_ids: []
*/
users.get_users = {
    method: 'GET',
    path: '/api/{client_id}/users/{users_ids}',
    config: {
        handler: function (request, reply) {
            var args = _.merge(request.params, request.payload);
            joi.validate(args, valid.User.users_get, function (err, value) {
                if (err) {
                    return reply({ code: 'Fail', err: { code: err.name, details: err.details[0] } });
                }
                return reply({response: 'OK', result: args});
            });
        }
    }
};

module.exports = users;