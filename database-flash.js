import { randomUUID } from 'node:crypto';

export class DatabaseFlash{

    #users = new Map();

    list(search){
       return Array.from(this.#users.entries()).map((userArray)=>{
            const id = userArray[0];
            const data = userArray[1];


            return{
                id,
                ...data
            }
       }) 
         .filter((user)=>{
                return search ? user.name.includes(search) : true
          })
    }


    create(user){

        const userId = randomUUID();

        this.#users.set(userId, user);
    }


    update(id, user){

        this.#users.set(id, user);
    }


    delete(id){
        this.#users.delete(id);
    }


}