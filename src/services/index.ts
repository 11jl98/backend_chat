import { database } from '../utils/config/database';

//services
import { UserService } from "./userService";
import { MessageService } from './messageServices';

//repo
import { UserRepo } from "../repositories/usersRepo";
import { MessagesRepo } from "../repositories/messagesRepo";

//route


const userRepo = new UserRepo(database);

const messageRepo = new MessagesRepo(database);

const userService = new UserService(userRepo);
const messageService = new MessageService(messageRepo);

export { userService, messageService };