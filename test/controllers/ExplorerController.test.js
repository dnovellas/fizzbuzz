const ExplorerController = require("../../app/lib/controllers/ExplorerController");

describe("Test for Explorer Controller", ()=>{
    test("1. get Explorers By Mission", ()=>{                
        const explorersFilteredByMission = ExplorerController.getExplorersByMission("node");
        expect(explorersFilteredByMission).not.toBe(null); 
        expect(Object.keys(explorersFilteredByMission).length).toBeGreaterThan(0);              
    });

    test("2. get Explorers Amonut By Mission", ()=>{ 
        const amountOfExplorersByMission = ExplorerController.getExplorersAmonutByMission("node");
        expect(amountOfExplorersByMission).toBe(10);
    });

    test("3. get Explorers Usernames By Mission", ()=>{ 
        const explorersUserNamesByMission = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersUserNamesByMission).not.toBe(null);       
        expect(explorersUserNamesByMission).toContain("Woopa1");
    });

    test("4. Apply Validation in Number", ()=>{ 
        let trick = ExplorerController.applyValidationInNumber(1);
        expect(trick).toBe(1);

        trick = ExplorerController.applyValidationInNumber(3);
        expect(trick).toBe("FIZZ");

        trick = ExplorerController.applyValidationInNumber(5);
        expect(trick).toBe("BUZZ");

        trick = ExplorerController.applyValidationInNumber(15);
        expect(trick).toBe("FIZZBUZZ");

    });

    test("5. get Explorers By Stack", ()=>{                
        const explorersFilteredByStack = ExplorerController.getExplorersByStack("javascript");
        expect(explorersFilteredByStack).not.toBe(null); 
        expect(explorersFilteredByStack.length).toBeGreaterThan(0);
        expect(explorersFilteredByStack.length).toBe(11);              
    });
});