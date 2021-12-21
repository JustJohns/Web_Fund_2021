function clickLogin(element){
    element.innerText = "Logout";
}

var count = 0;

function clickLike(element){
    count++;
    element.innerText = count + " likes";
}

var count = 0

var btnRe = button.getElementById("btnR").removeAttribute("onclick");

if(btnRe.onclick == true){
    this.onclick = null;
}