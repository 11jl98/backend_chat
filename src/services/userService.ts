import { UserRepo } from '../repositories/usersRepo'
import { UserEntity } from '../entities/UserEntity'
class UserService {
    #repo: UserRepo;
    constructor(Repo: UserRepo) {
        this.#repo = Repo;
    }

    async save(body:UserEntity){
        const user = new UserEntity({...body});
        await this.#repo.save(user);
        return user.id;
    }

    async findById(id:string){
        return await this.#repo.findById(id);
    }

    async findByName(email : string){
        const user = await this.#repo.findByName(email)
        return user
    }
    
    async getUser(){
        return await this.#repo.getUsers();
    }
}

export { UserService };