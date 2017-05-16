import {JwtService} from './jwt.service';

describe('service: JwtService', () => {

    // setup variables we'll use for the test
    const phoneNumber = "1234566780";
    const accessToken = "asuppossedlyrandomstring";
    const refreshToken = "arefreshtokenhere";
    let service: JwtService

    beforeEach( () => {
        // create new instance of service (something angular usually does for us)
        service = new JwtService();
    });    

    /**
     * Testing getTelephoneNumber should be enough for JWT service as the other functions mirror it
     */

    it('#getTelephoneNumber should be undefined at first', () => {
        expect(service.getTelephoneNumber()).toEqual(undefined);
    })

    it('#getTelephoneNumber should equal the number it was set to', () => {
        service.saveTelephoneNumber(phoneNumber);
        expect(service.getTelephoneNumber() == phoneNumber).toBeTruthy();
    })
    
    it('#getTelephoneNumber should be update-able', () => {
        service.saveTelephoneNumber("some-rubbish");
        expect(service.getTelephoneNumber() == phoneNumber).toBeFalsy();
    })
})