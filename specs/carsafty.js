import { expect } from 'chai';

describe('verify car safty page', () => {
    it('page load', () => {        
        expect(browser).toHaveTitle('A million more');
    })
})