import { NewUserModule } from './NewUser.module';

describe('NewUserModule', () => {
    let newUserModule: NewUserModule;

    beforeEach(() => {
        newUserModule = new NewUserModule();
    });

    it('should create an instance', () => {
        expect(NewUserModule).toBeTruthy();
    });
});
