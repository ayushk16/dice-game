function changeImg(n){
    var str = "";
    switch (n) {
        case 1:
            str = "images/2dice1.png";
            break;
        case 2:
            str = "images/2dice2.png";
            break;
        case 3:
            str = "images/2dice3.png";
            break;
        case 4:
            str = "images/2dice4.png";
            break;
        case 5:
            str = "images/2dice5.png";
            break;
        case 6:
            str = "images/2dice6.png";
        default:
            break;
    }
    return str;
}
function winner(p){
    if(p===1){
        document.querySelector("h1").innerHTML = "Player 1 wins";
    }else{
        document.querySelector("h1").innerHTML = "Player 2 wins";
    }
}
function fecthImage(n1 , n2){
    document.querySelector("#player1 img").setAttribute("src" , changeImg(num1));

    document.querySelector("#player2 img").setAttribute("src" , changeImg(num2));
    if(n1>n2){
        winner(1);
    }
    else if(n2>n1){
        winner(2);
    }
    else{
        document.querySelector("h1").innerHTML = "Refresh its a draw !!";
    }
}


var num1 = Math.floor(6*Math.random()+1);
console.log(num1);
var num2 = Math.floor(6*Math.random()+1);
console.log(num2);
fecthImage(num1,num2);