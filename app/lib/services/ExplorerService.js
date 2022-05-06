class ExplorerService{
  static filterByMission(explorers, mission){
    const filteredByMission = explorers.filter((explorer)=>(explorer.mission == mission))
    return filteredByMission;
  }

  static getAmountOfExplorersByMission(explorers, mission){
    const filteredByMission = explorers.filter((explorer)=>(explorer.mission == mission))
    return filteredByMission.length;    
  }

  static getExplorersUserNamesByMission(explorers, mission){
    const filteredByMission = explorers.filter((explorer)=>(explorer.mission == mission))
    const explorersNames = filteredByMission.map((explorer)=>(explorer.name))
    return explorersNames;
  }
}

module.exports = ExplorerService;