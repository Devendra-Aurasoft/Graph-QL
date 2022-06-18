
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import resolvers from "./Resolvers.js"
import typeDefs from './SchamaGql.js'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen(4100).then(({ url }) => {
    console.log(`Server Starting ${url}`);
})