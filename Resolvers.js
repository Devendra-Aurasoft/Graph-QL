import { users, quotes } from "./fakeData.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import { Secreate_key } from "./config.js";
import userModel from './models/Users.js'
import QuoteModel from './models/Quotes.js'
import mongoose from "mongoose";
const resolvers = {
    Query: {
        users:async () =>await userModel.find({}),
        user:async (_, {_id}) =>await userModel.findOne({_id}) ,// users.find(user => user._id == arg._id),
        quotes:async () =>await QuoteModel.find({}),
        quote:async (_, {by}) =>await  QuoteModel.find({by}) // quotes.filter(quote => quote.by == arg.by)
    },
    User: {
        quotes:async (user) =>await QuoteModel.find({by:user._id})  // quotes.filter(quote => quote.by == user._id)
    },
    Mutation: {

        // ===================================
        // ==========CreateNewUser============
        // ===================================
        CreateNewUser: async (_, { newuser }) => {
            const user = await userModel.findOne({ email: newuser.email })
            if (user) {
                console.log("user already exiest with that email");
                throw new Error("user already exiest with that email")
            }
            else {
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(newuser.password, salt)
                const createUser = new userModel({
                    ...newuser,
                    password: hashPassword
                })
                return await createUser.save()
            }
        },

        // ===================================
        // ==========Userlogin================
        // ===================================
        Userlogin: async (_, { logindata }) => {
            const user = await userModel.findOne({ email: logindata.email })
            if (user) {
                const password = await bcrypt.compareSync(logindata.password, user.password)
                if (password) {
                    const token = jwt.sign({ userID: user._id }, Secreate_key)
                    return { token }
                }
                throw new Error("Login with wrong credential")
            }
            throw new Error("user not  exiest with that email please SignUp First")
        },

        // ===================================
        // ==========CreateQuote==============
        // ===================================
        CreateQuote: async (_, { name }, { userID }) => {
            console.log(userID);
            if (userID) {
                const newQuote = new QuoteModel({
                    name,
                    by: userID
                })
                await newQuote.save()
                return ("Quotes is Create")
            }
            throw new Error("Please login first")
        }
    }

}
export default resolvers;