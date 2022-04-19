function button1() {


   console.log(text())
   
    
}

function button2() {

    

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
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src=Cards/" + r + suitArray[randomSuit] + ".jpg>")
    document.getElementById("card").style.display = "flex"
    document.getElementById("card").style.justifyContent = "center"
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

function text() {
    let a = limiter()
    document.getElementById("yourNumber").innerHTML = "Your total is " + a + "."
    document.getElementById("yourNumber").style.display = "flex"
    document.getElementById("yourNumber").style.justifyContent = "center"



}

// Limiter



