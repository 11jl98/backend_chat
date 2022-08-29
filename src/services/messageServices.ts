import { MessagesRepo } from '../repositories/messagesRepo'
import { MessageEntity } from '../entities/MessageEntity'

class MessageService {
    #repo: MessagesRepo;
    constructor(Repo: MessagesRepo) {
        this.#repo = Repo;
    }

    async save(body: MessageEntity){
        const message = new MessageEntity({...body});
        await this.#repo.save(message);
        return message;
    }

    async findById(id: string){
        return await this.#repo.findById(id);
    }

    async getCOnversation(id_to_user: string, id_from_user: string){
        return await this.#repo.getConversation(id_to_user, id_from_user);
    }
}

export { MessageService };