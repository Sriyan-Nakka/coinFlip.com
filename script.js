document.querySelector("#flipCoinButton").addEventListener("click", () => {
    coinFlipFunction();
});

function coinFlipFunction() {
    let randNum = Math.floor(Math.random() * 2) + 1;
    console.log(randNum);
    switch(randNum){
        case 1:
            document.querySelector("#tailCoin").style.display = "none";            
            document.querySelector("#result").textContent = "It is";
            setTimeout(() => {
            document.querySelector("#result").textContent = "It is.";
            setTimeout(() => {
                document.querySelector("#result").textContent = "It is..";
                setTimeout(() => {
                    document.querySelector("#result").textContent = "It is...";
                    setTimeout(() => {
                        document.querySelector("#result").textContent = "";
                        document.querySelector("#headCoin").style.display = "block";
                    }, 1510);    
                }, 1500);    
            }, 1000);    
            }, 500);
            break;
        case 2:
            document.querySelector("#headCoin").style.display = "none";            
            document.querySelector("#result").textContent = "It is";
            setTimeout(() => {
            document.querySelector("#result").textContent = "It is.";
            setTimeout(() => {
                document.querySelector("#result").textContent = "It is..";
                setTimeout(() => {
                    document.querySelector("#result").textContent = "It is...";
                    setTimeout(() => {
                        document.querySelector("#result").textContent = "";
                        document.querySelector("#tailCoin").style.display = "block";
                    }, 1510);    
                }, 1500);    
            }, 1000);    
            }, 500);
            break;
    }
}
