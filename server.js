
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { users, quotes } from "./fakeData.js";

const typeDefs = gql`
type Query{
    users : [User]
    user(id:ID!): User
    quotes :[Quote]
    quote(by:ID!):[Quote]
}
type User{
    id:ID
    firstname :String
    lastname :String
    email : String
    password: String
    quotes:[Quote]
}
type Quote {
    name :String
    by:String
}
`
const resolvers = {
    Query: {
        users: () => users,
        user: (_, arg) => users.find(user => user.id == arg.id),
        quotes: () => quotes,
        quote: (_, arg) => quotes.filter(quote => quote.by == arg.by)
    },
    User: {
        quotes: (user) => quotes.filter(quote => quote.by == user.id)
    }
}


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