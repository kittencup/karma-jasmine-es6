import HelloWorld from '../src/HelloWorld.js';

let h = new HelloWorld();

describe("HelloWord Test", () => {

    it("getClassName Test", ()=> {
        expect(h.getClassName()).toBe('HelloWorld');
    });

});