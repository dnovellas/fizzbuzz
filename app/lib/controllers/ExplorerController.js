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

    static getExplorersByStack(stack){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByStack = ExplorerService.filterByStack(explorers, stack);
        return explorersByStack;
    }

    static applyValidationInNumber(number){        
        const trick = FizzbuzzService.applyValidationInNumber(number);
        return trick;
    }
}

module.exports = Controller;