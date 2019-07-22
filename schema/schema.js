const graphql = require('graphql'),
      _       = require('lodash');

const {
    //Object instructs GraphQL about presence of user in application
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

// hard-coded array of users, delete later
const users = [
    { id: '23', name: 'Bill', age: '23'},
    { id: '45', name: 'Sam', age: '27'}
];

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    } 
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //Look for user with given id
        user: {
            type: UserType,
            // Find id, then return ^UserType^
            args: { id: { type: GraphQLString } },
            // resolve() makes call to database and finds user of given id
            resolve(parentValue, args) {
                return _.find(users, { id: args.id })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});