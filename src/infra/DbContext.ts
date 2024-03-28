import IDbContext from '../core/InterfaceRepository/IDbContext'
const  { Pool } = require('pg');
require('dotenv').config();

export default class DbContextpgsql implements IDbContext {
    async getConnection(){
        const configUser={
            user: "postgres",
            host: "localhost",
            database: "app",
            password: process.env.DBPASS,
            port: 5432,
        }
        const pool=new Pool(configUser)
        const client = await pool.connect()
        return client
    }
}