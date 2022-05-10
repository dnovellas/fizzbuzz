const ExplorerController = require("./controllers/ExplorerController");
// Usando objeto express
const express = require("express");
// App de express
const app = express();
app.use(express.json());
// Puerto en que vamos a ver la app: locahost:3000
const port = 3000;

// path inicial, responderá a la url localhost:3000
app.get("/", (request, response)=>{
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response)=>{
    const mission = request.params.mission;
    const explorersInMIssion = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMIssion);
});

app.get("/v1/explorers/stack/:stack", (request, response)=>{
    const mission = request.params.stack;
    const explorersInMIssion = ExplorerController.getExplorersByStack(mission);
    response.json(explorersInMIssion);
});

app.get("/v1/explorers/ammount/:mission", (request, response)=>{
    const mission = request.params.mission;
    const ammountExplorersInMIssion = ExplorerController.getExplorersAmonutByMission(mission);    
    response.json({mission: request.params.mission, quantity: ammountExplorersInMIssion});
});

app.get("/v1/explorers/usernames/:mission", (request, response)=>{
    const mission = request.params.mission;
    const ExplorersInMIssion = ExplorerController.getExplorersUsernamesByMission(mission);    
    response.json({mission: request.params.mission, explorers: ExplorersInMIssion});
});

// FIZZBUZZ
app.get("/v1/fizzbuzz/:score", (request, response)=>{
    const score = request.params.score;
    const trick = ExplorerController.applyValidationInNumber(score);
    response.json({score: request.params.score, trick: trick});
});

//Con esto se inicializa la app
app.listen(port, ()=> {
    console.log(`FizzBuzz API in localhost:${port}`);
});
