import { EmailService } from "./EmailService";
import { UserService } from "./UserService";

const email: EmailService = new EmailService()
// console.log(email.sendEmail('naveeharn@hotmail.com'));

const user = {name:'naveeharn', email:'naveeharn@hotmail.com'}
const userService: UserService = new UserService(email)
userService.createUser(user)