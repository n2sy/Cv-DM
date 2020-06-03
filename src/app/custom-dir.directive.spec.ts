import { AuthService } from "./auth.service";

let service;
describe('AuthService', () => {
    beforeEach(() => {service = new AuthService();
        });
    afterEach(() => {
        localStorage.removeItem('user');
         });
    it('should be created', () => {
        expect(service).toBeTruthy();
        });
    it('it should return true if there is a user in the localStorage ', () => {
        localStorage.setItem('user', 'nidhal');
        expect(service.isAuthentified()).toBeTruthy();
        });
    it('it should return false if there is not a user in the localStorage ', () => {
        expect(service.isAuthentified()).toBeFalsy();
        });
    }
);


   