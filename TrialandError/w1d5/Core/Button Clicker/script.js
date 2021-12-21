function clickLogin(element){
    element.innerText = "Logout";
}

var count = 0;

function clickLike(element){
    count++;
    element.innerText = count + " likes";
}
