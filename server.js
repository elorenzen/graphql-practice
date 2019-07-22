const express = require('express'),
        expressGraphQL = require('express-graphql'),
        schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}!`);
})