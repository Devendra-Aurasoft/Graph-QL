
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import resolvers from "./Resolvers.js"
import typeDefs from './SchamaGql.js'
import jwt from 'jsonwebtoken'
import './DataBase.js'
import './models/Quotes.js'
import './models/Users.js'
import { Secreate_key } from "./config.js";



// Middelwere function =============
const context = ({ req }) => {
    const { authorization } = req.headers
    if (authorization) {
        const { userID } = jwt.verify(authorization, Secreate_key)
        return { userID }
    }
}



// Create Server==================== 
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen(4100).then(({ url }) => {
    console.log(`Server Starting ${url}`);
})