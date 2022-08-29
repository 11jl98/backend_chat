import { randomUUID } from "crypto"
import bcrypt from 'bcryptjs'

class UserEntity{
    id: string
    name_user: string
    avatar_url: string
    password: string

    constructor(body: Omit<UserEntity, 'id'>, id = randomUUID()){
        this.id = id
        this.name_user = body.name_user
        this.avatar_url = body.avatar_url
        this.password = bcrypt.hashSync(body.password, 8)
    }
}

export { UserEntity }