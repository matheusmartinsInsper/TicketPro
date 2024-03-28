import { Client } from 'pg';
export default interface DbContextFactory{
    getConnection():Promise<Client>;
}