import { io } from "./serverHttp";
import { messageService, userService } from './services/index'
import { MessageEntity } from './entities/MessageEntity'
import bcrypt from 'bcryptjs'
io.on("connection", socket => {
    socket.on('on_new_message', async (data: MessageEntity) => {
             await messageService.save(data);
    })

    socket.on('get_messages', async (data)=>{
        const messages = await messageService.findById(data.id);
        socket.emit('get_emit_messages', messages)

    })
    socket.on('get_user', async () => {
        const users = await userService.getUser();
        socket.emit('get_emit_user', users)

    })

    socket.on('get_conversation', async (data) => {
        const conversation = await messageService.getCOnversation(data.id_to_user, data.id_from_user)
        socket.emit('get_emit_conversation', conversation)
    })

    socket.on('auth',async (data) => {
        const { name_user, password } = data
        const user = await userService.findByName(name_user as string)

        if(!user)  socket.emit('auth_emit', {message: "Usuario não encontrado"})

        // const isValidPassword = await bcrypt.compareSync(password, user.password)
        // if(!isValidPassword) socket.emit('auth_emit', {message: "Senha invalida"})

        socket.emit('auth_emit', { id: user.id }) 
    })
})