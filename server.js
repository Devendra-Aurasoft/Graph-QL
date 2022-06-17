
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { users, quotes } from "./fakeData.js";

const typeDefs = gql`
type Query{
    users : [User]
    quotes :[Quote]
}
type User{
    id:ID
    firstname :String
    lastname :String
    email : String
    password: String
}
type Quote {
    name :String
    by:String
}
`
const resolvers = {
    Query :{
        users :()=>users,
        quotes :()=>quotes
    }
}


const server =new ApolloServer({
    typeDefs,
    resolvers,
    plugins : [
       ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen(4100).then(({url})=>{
    console.log(`Server Starting ${url}`);
})