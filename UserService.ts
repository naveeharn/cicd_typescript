import { EmailService } from "./EmailService";

export class UserService {
    private emailService: EmailService;
    constructor(emailService: EmailService) {
        this.emailService = emailService
    }
    createUser(user: {name: string, email: string}): void {
        console.log(`Creating user: ${user.name}`);
        this.emailService.sendEmail(user.email)
    }
}