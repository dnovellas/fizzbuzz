class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }else if(explorer.score%5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }else if(explorer.score%3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    static applyValidationInNumber(number){
        const score = number;
        
        if(score%5 === 0 && score%3 === 0){
            const trick = "FIZZBUZZ";
            return trick;
        }else if(score%5 === 0){
            const trick = "BUZZ";
            return trick;
        }else if(score%3 === 0){
            const trick = "FIZZ";
            return trick;
        }else{
            const trick = score;
            return trick;
        }
    }
}

module.exports = FizzbuzzService;