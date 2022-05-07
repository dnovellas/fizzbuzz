const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");

class Controller{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersNamesByMission = ExplorerService.getExplorersUserNamesByMission(explorers, mission);
        return explorersNamesByMission;
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const amountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return amountOfExplorersByMission;
    }
}

module.exports = Controller;