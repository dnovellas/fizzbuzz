const Reader = require("../../app/lib/utils/Reader");

describe("Test for Reader", ()=>{
    test("1. Reade an JSON File", ()=>{
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo 
        console.log("Testing!");   
        expect(explorers).not.toBe(null);    
        expect(Object.keys(explorers).length).toBeGreaterThan(0);    
    });
});