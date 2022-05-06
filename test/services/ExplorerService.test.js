const Reader = require('../../app/lib/utils/Reader')
const ExplorerService = require('../../app/lib/services/ExplorerService');

describe("Test for Explorer Service", ()=>{
  test("1. Read JSON", ()=>{    
    const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo     
    expect(explorers).not.toBe(null);        
  })
  test("2. Filter explorers", ()=>{
    const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo         
    expect(Object.keys(explorers).length).toBeGreaterThan(0);
    const explorersFilteredByMission = ExplorerService.filterByMission(explorers, 'node');
      expect(explorersFilteredByMission).not.toBe(null); 
      expect(explorersFilteredByMission.length).toBe(10); 
    const amountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, 'node');
      expect(amountOfExplorersByMission).toBe(10); 
    const explorersUserNamesByMission = ExplorerService.getExplorersUserNamesByMission(explorers, 'node');
      expect(explorersUserNamesByMission).not.toBe(null);
      expect(explorersUserNamesByMission).toContain("Woopa1");
      
  })
})