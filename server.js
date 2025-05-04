import  fastify  from 'fastify';
import { DatabaseFlash } from './database-flash.js';
import { DatabasePostgres } from './database-postgres.js';

const server = fastify()

const database = new DatabasePostgres()



server.post('/user', async (request, reply) => {
    
    const {name, age, genere} = request.body

    await console.log(name, age, genere);

    database.create({
        name,
        age,
        genere,

    })

    return reply.status(201).send({
        message: 'Usuario criado com sucesso',
    })
})

server.get('/user', async (request) => {
    
    const search = request.query.search

    const users = await database.list(search);

    return users
})

server.put('/user/:id', async (request, replay) => {
    
    const userId = request.params.id
    const {name, age, genere} = request.body

    await database.update(userId, {

        name,
        age,
        genere,
    })

    return replay.status(204).send()

})

server.delete('/user/:id', async (request, replay) => {
    
    const userId = request.params.id
    await database.delete(userId)
    
    return replay.status(204).send()
})





server.listen({
    port: 3333,
})