import { randomUUID } from 'node:crypto';
import { sql } from './db.js';

export class DatabasePostgres{

    #users = new Map();

  async list(search){

        let users

    if (search) {
        users = await sql`SELECT * FROM users WHERE name ILIKE ${'%' + search + '%'}`;
    } else {
        users = await sql`SELECT * FROM users`;
    }


        return users;
    }


   async create(user){
        const userId = randomUUID();

        const {name, age, genere} = user

        await sql`INSERT INTO users (id, name, age, genere) VALUES (${userId}, ${user.name}, ${user.age}, ${user.genere})`;
    }


    async update(id, user){
        const {name, age, genere} = user

        await sql`UPDATE users SET name = ${name}, age = ${age}, genere = ${genere} WHERE id = ${id}`
    }


    async delete(id){
        await sql`DELETE FROM users WHERE id = ${id}`

    }


}