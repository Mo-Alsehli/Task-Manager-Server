import dotenv from "dotenv";
import { userInfo } from "os";
import {Pool} from 'pg';

dotenv.config();

// Getting Our Connection Data From .env File.
const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD
} = process.env;

const client = new Pool({
    host:POSTGRES_HOST,
    database:POSTGRES_DB,
    user:POSTGRES_USER,
    password:POSTGRES_PASSWORD
});

export default client;