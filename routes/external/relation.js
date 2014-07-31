var relation = {};
var _ = AA.lodash;
var joi = AA.Joi;
var valid = AA.Validation;
relation.routes = {};
/*
    REQUEST
        @user_id    (String ID)
        @target_id  (String ID)
        @client_id  (String ID)
    RESPONSE
        Object with the common attributes for the two users
*/
relation.routes.get_users_relation = {
    method: 'GET',
    path: '/api/{client_id}/users/relationship',
    config: {
        handler: function (request, reply) {
            var args = _.merge(request.params, request.payload);
            joi.validate(args, valid.Follow.user_target_user, function (err, value) {
                if (err) {
                    return reply({ code: 'Fail', err: { code: err.name, details: err.details[0] } });
                }
                return reply({response: 'OK', result: args});
            });
        }
    }
};

/*
    REQUEST
        @user_id    (String ID)
        @target_id  (String ID)
        @client_id  (String ID)
        @relation_x (KEY VALUE) - Ex' like: {artist_id: '', artist_name: ''}
    RESPONSE
        OK or Fail
*/
relation.routes.set_users_relation = {
    method: 'POST',
    path: '/api/{client_id}/users/relationship',
    config: {
        handler: function (request, reply) {
            var args = _.merge(request.params, request.payload);
            joi.validate(args, valid.Follow.user_target_user, function (err, value) {
                if (err) {
                    return reply({ code: 'Fail', err: { code: err.name, details: err.details[0] } });
                }
                return reply({response: 'OK', result: args});
            });
        }
    }
};

module.exports = relation;