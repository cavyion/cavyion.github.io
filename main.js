function myFunction(){
    console.warn("hello")
}





//      #button-events

function button_Clicked(buttonID){
    var link = document.getElementById(buttonID).dataset.link 
    window.open(link)
}

function button_Hovered(buttonID){

    document.getElementById(buttonID).textContent = "I'm on: " + buttonID + "!"
// document.getElementById(buttonID).dataset.extra


}

function button_HoverEnded(buttonID){
    document.getElementById(buttonID).textContent = buttonID

}
//      --//    --//