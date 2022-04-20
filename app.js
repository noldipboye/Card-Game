function button1() {

   text()
}

function button2() {

    text2()
    compare()
}

function button3() {

    window.location.reload();
}

function getCard() {
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4)
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src=Cards/" + r + suitArray[randomSuit] + ".jpg>")
    document.getElementById("card").style.display = "flex"
    document.getElementById("card").style.justifyContent = "center"
    return r
}

function computerCards() {
    var v = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4)
    document.getElementById("card2").insertAdjacentHTML("beforeend", "<img src=Cards/" + v + suitArray[randomSuit] + ".jpg>")
    document.getElementById("card2").style.display = "flex"
    document.getElementById("card2").style.justifyContent = "center"

    return v
}

math = 0



function limiter() {

    if (math <= 21) {
    m = getCard()

    math = (m + math)
    }

    return math
    
}

math2 = 0

function limiter2() {

    do {
        n = computerCards()

        math2 = (n + math2)

    }while(math2 <= 16)

return math2
    
}

function text() {
    let a = limiter()
    document.getElementById("yourNumber").innerHTML = "Your total is " + a + "."
    document.getElementById("yourNumber").style.display = "flex"
    document.getElementById("yourNumber").style.justifyContent = "center"

}

function text2() {
    
    
      
    let b = limiter2()
    document.getElementById("yourNumber2").innerHTML = "The Computer's total is " + b + "."
    document.getElementById("yourNumber2").style.display = "flex"
    document.getElementById("yourNumber2").style.justifyContent = "center"
   

}

function compare() {
    
    if (math > 21 && math2 > 21) {
        document.getElementById("compare").innerHTML = "Both lose."
    }
      
    if (math > math2 && math2 < 21 && math > 21) {
        document.getElementById("compare").innerHTML = "Computer wins!"
    }
      
    if (math2 > math && math < 21 && math2 > 21) {
        document.getElementById("compare").innerHTML = "You win!"
    }
      
    if (math > math2 && math2 < 21 && math < 21) {
        document.getElementById("compare").innerHTML = "Computer win"
    }
      
    if (math2 > math && math < 21 && math2 < 21) {
        document.getElementById("compare").innerHTML = "You win"
    }
    if (math == 21 && math2 != 21) {
        document.getElementById("compare").innerHTML = "You win!"
    }
    
    if (math2 == 21 && math != 21) {
        document.getElementById("compare").innerHTML = "Computer wins"
    }
    
    if (math > math2 && math <= 21) {
        document.getElementById("compare").innerHTML = "You win"
    }
    
    if (math2 > math && math2 <= 21) {
        document.getElementById("compare").innerHTML = "Computer wins"
    }  
    
    document.getElementById("compare").style.display = "flex"
    document.getElementById("compare").style.justifyContent = "center"
    document.getElementById("compare").style.backgroundImage = URL(images/confetti.jpeg)


}






// Limiter



