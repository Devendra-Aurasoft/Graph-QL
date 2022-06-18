
import { gql } from "apollo-server"
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

type Mutation{
    createnewuser(firstname:String!,lastname:String!,email:String!,password:String!):User
}


`
export default typeDefs;