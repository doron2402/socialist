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
    var tmp_args = {USER: args.user_id, CLIENT: args.client_id};
    var node = AA.NEO4JGraph.createNode(tmp_args);     // instantaneous, but...
    node.save(function (err, node) {    // ...this is what actually persists.
        if (err) {
            return reply({code: 'err', result: 'Error setting node'});
        } else {
            console.log('Node saved to database with id:', node.id);
            return reply({code: 'OK', result: args});
        }
    });


    //check if user_id exist

    //check if target_id exist

    //check relationship

    //set relationship


};
module.exports = FollowersController;