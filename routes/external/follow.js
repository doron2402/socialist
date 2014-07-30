var follow = {};
follow.routes = {};

follow.routes.follow = {
    method: 'POST',
    path: '/api/users/{user_id}/follow',
    config: {
        handler: function (request, reply) {
            console.log(request);
            return reply({response: 'OK', result: request.params});
        },
        validate: {
            params: {
                user_id: AA.Joi.string().min(5).max(32).required()
            },
            payload: {
                target_id: AA.Joi.array().required()
            }
        }
    }
};

follow.unfollow = {

};

follow.check_relationship = {

};

follow.check_if_follow = {

};

follow.check_if_follow = {

};

module.exports = follow;