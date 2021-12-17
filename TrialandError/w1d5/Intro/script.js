console.log("hey it's me!")

var count = 0
// var counter = document.querySelector("#counter");
var counter = document.getElementById("counter")

function clickHeader(element){
    count++;
    element.innerText = "clicked " + count + "times";
}

function hoverHeader(){
    // element.innerText = "don't click me";
}

function increaseCount(){
    ++count;
    // console.log(count);
    counter.innerText = count + "times";
    counter.style.fontSize = count + "px";
}