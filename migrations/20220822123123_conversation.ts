import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('messages', (table)=>{
        table.uuid('id').primary()
        table.string('id_to_user').notNullable().references('id').inTable('users')
        table.string('id_from_user').notNullable().references('id').inTable('users')
        table.string('message').notNullable()
        table.dateTime('data_hora').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('messages')
}

