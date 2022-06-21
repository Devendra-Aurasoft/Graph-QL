
import { gql } from "apollo-server"
const typeDefs = gql`
type Query{
    users : [User]
    user(_id:ID!): User
    quotes :[Quote]
    quote(by:ID!):[Quote]
}
type User{
    _id:ID
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
type Token {
    token:String
}
type Mutation{
    CreateNewUser(newuser:UserInput!):User
    Userlogin(logindata:loginInput!):Token
    CreateQuote(name:String!):String
}
input UserInput {
    firstname:String !
    lastname:String !
    email:String !
    password:String !
}
input loginInput{
    email:String !
    password:String !
}
`
export default typeDefs;