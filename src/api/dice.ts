
    // singleRoll() will return the result of a single 6-sided die roll
    function singleRoll(min: number = 1, max: number = 7): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // roll() will return an object of the 616 dice pool
    function roll(): any {
        return {
            dieOne: singleRoll(),
            marvelDie: singleRoll(),
            dieTwo: singleRoll(),
        }
    }

    export {
        singleRoll,
        roll,
    }