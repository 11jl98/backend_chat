import {Knex} from "knex";
import { MessageEntity } from "../entities/MessageEntity";

class MessagesRepo{
    #database: Knex;
    #tableName: string;
    constructor(database: Knex){
        this.#database = database;
        this.#tableName = 'messages';
    }

    async save(body: MessageEntity){
        await this.#database(this.#tableName).insert(body);
    }
    async findById(id: string): Promise<MessageEntity[]>{
        return await  this.#database(this.#tableName).select(['messages.id_from_user', 'messages.id', 'users.name_user', 'users.avatar_url', 'messages.message'])
        .where('id_to_user', '=', id)
        .leftJoin('users', 'messages.id_from_user', '=', 'users.id')
        .groupBy('messages.id_from_user')
    }
    async getConversation(id_to_user: string, id_from_user: string): Promise<MessageEntity[]>{
        return await this.#database(this.#tableName).select(['*']).where('id_to_user', '=', id_to_user)
        .andWhere('id_from_user', '=', id_from_user)
        .orWhere('id_to_user', '=', id_from_user)
        .andWhere('id_from_user', '=', id_to_user)
        .leftJoin('users', 'messages.id_to_user', '=', 'users.id')
        .orderBy('messages.data_hora', 'asc')
    }
}

export { MessagesRepo };