import { users, quotes } from "./fakeData.js";
import { randomBytes } from "crypto";
const resolvers = {
    Query: {
        users: () => users,
        user: (_, arg) => users.find(user => user.id == arg.id),
        quotes: () => quotes,
        quote: (_, arg) => quotes.filter(quote => quote.by == arg.by)
    },
    User: {
        quotes: (user) => quotes.filter(quote => quote.by == user.id)
    },
    Mutation:{
        CreateNewUser:(_,{newuser})=>{
            const id = randomBytes(5).toString('hex')
            users.push({
                id ,
                ...newuser
            })
            return users.find(user=>user.id==id)
        }
    }

}
export default resolvers;