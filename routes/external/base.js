var base = {};
var _ = AA.lodash;

base.check_if_node_exist = function(args, cb) {
    if (!_.has(args, 'node_id')) {
        cb('err!', null);
    }

};

base.check_if_node_relation_exist = function(args, cb) {
    if (!_.has(args, 'node_id') || !_.has(args, 'relation')) {
        cb('err!', null);
    }

};

module.exports = base;