import { sql } from './db.js';


//sql`DROP TABLE IF EXISTS users;`.then(() => {
    //console.log('Tabela removida com sucesso');
//})


sql`
  CREATE TABLE users (
    id TEXT PRIMARY KEY,
    name TEXT,
    age INTEGER,
    genere TEXT
  );
`.then(() => {
    console.log('Tabela criada com sucesso');
})