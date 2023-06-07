import { MockEmailService } from "./MockEmailService";
import { UserService } from "./UserService";

export class MockUserService extends UserService {
    constructor() {
        super(new MockEmailService())
    }
}