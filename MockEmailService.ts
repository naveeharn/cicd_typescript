import { EmailService } from "./EmailService";

export class MockEmailService implements EmailService {
    sendEmail = jest.fn()
}