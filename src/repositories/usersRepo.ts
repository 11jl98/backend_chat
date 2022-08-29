import {Knex} from "knex";
import { UserEntity } from "../entities/UserEntity";

class UserRepo{
    #database: Knex;
    #tableName: string;
    constructor(database: Knex){
        this.#database = database;
        this.#tableName = 'users';
    }

    async save(body: UserEntity){
        await this.#database(this.#tableName).insert(body)
    }
    async findById(id: string){
        return await this.#database(this.#tableName).where({id}).first()
    }
    async getUsers(){
        return await this.#database(this.#tableName).select(['name_user', 'avatar_url', 'id'])
    }

    async findByName(name){
        return await this.#database.table(this.#tableName)
        .select('*')
        .where('name_user', '=', name)
        .first()
    }
}

export { UserRepo };