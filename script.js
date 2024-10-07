document.querySelector("#flipCoinButton").addEventListener("click", () => {
    coinFlipFunction();
});

function coinFlipFunction() {
    let randNum = Math.floor(Math.random() * 2) + 1;
    console.log(randNum);
    switch(randNum){
        case 1:
            document.querySelector("#headCoin").style.display = "block";
            document.querySelector("#tailCoin").style.display = "none";
            break;
        case 2:
            document.querySelector("#headCoin").style.display = "none";
            document.querySelector("#tailCoin").style.display = "block";
            break;
    }
}