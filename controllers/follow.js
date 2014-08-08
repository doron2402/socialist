var FollowersController = {};

/*
    @param Object args - validate args
    @param String args.client_id
    @param String args.user_id
    @param String args.target_id
    @param Object request
    @param Object reply
*/
FollowersController.user_follow_target = function(args, request, reply) {
    console.log(AA.Neo4jGraph);
    //check if user_id exist

    //check if target_id exist

    //check relationship

    //set relationship

    return reply({code: 'OK', result: args});
};
module.exports = FollowersController;