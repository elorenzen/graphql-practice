const express = require('express'),
        expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true
}));

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}!`);
})