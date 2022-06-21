
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import resolvers from "./Resolvers.js"
import typeDefs from './SchamaGql.js'
import jwt from 'jsonwebtoken'
import './DataBase.js'
import './models/Quotes.js'
import './models/Users.js'
import { Secreate_key } from "./config.js";
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
        const { authorization } = req.headers
        if (authorization) {
            console.log(authorization);
            const {userID} = jwt.verify(authorization, Secreate_key)
            console.log(userID);
           return {userID}
        }
    },
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen(4100).then(({ url }) => {
    console.log(`Server Starting ${url}`);
})