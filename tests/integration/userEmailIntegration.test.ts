import { MockEmailService } from "../../MockEmailService"
import { UserService } from "../../UserService"

describe('User Email Integration', ()=>{
    // let emailService: EmailService
    let emailService: MockEmailService
    let userService: UserService

    beforeEach(() => {
        // emailService = new EmailService()
        emailService = new MockEmailService()
        userService = new UserService(emailService)
    }, 5000)

    it('should send an email when a user is created', ()=>{
        const user = {name:'John Doe', email:'john@doe.com'}
        userService.createUser(user)
        expect(emailService.sendEmail).toHaveBeenCalledWith(user.email)
    })
})