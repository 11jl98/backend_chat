import { randomUUID } from "crypto"

class MessageEntity{
    id: string
    id_to_user: string
    id_from_user: string
    message: string
    data_hora: Date

    constructor(body: Omit<MessageEntity, 'id'>, data_hora = new Date(), id = randomUUID()){
        this.id = id
        this.id_to_user = body.id_to_user
        this.id_from_user = body.id_from_user
        this.message = body.message
        this.data_hora = data_hora
    }
}

export { MessageEntity }