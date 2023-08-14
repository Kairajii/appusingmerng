import express from 'express';
import dotenv from 'dotenv';
import {graphqlHTTP} from 'express-graphql';
import {buildSchema} from 'graphql';
import schema from './schema/schema.js';
import cors from 'cors'
import connectDB from './config/db.js';
dotenv.config();
const PORT = process.env.PORT || 5000



const app = express();

//Database Connection
connectDB();

app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV === 'development',
}))

app.listen(PORT,()=>{
    console.log(`Server is running on the PORT: ${PORT}`)
})

