function getComputerChoice(){
    let randomNumber = Math.random();
    if(randomNumber < 1/3){
        return 'Rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        return 'Paper';
    }
    else return 'Scissors';

    }
