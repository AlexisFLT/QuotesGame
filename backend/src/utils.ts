import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Movie } from './entity/Movie';

dotenv.config();
if(!process.env.PASSWORD_DB){
    console.log("Y'A RIEN");
}

const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: 'MoviesQuotesGame',
    synchronize: true,
    entities: [User, Movie],
});

export default dataSource;