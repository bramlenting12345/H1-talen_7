var btn = document.createElement('button');
btn.style.margin = '10px';
btn.style.backgroundColor = 'white'
btn.innerHTML = 'uit ';
document.body.appendChild(btn);

// schijf hier tussen je code
status_knop = "uit" 

function lighswitch(){
    if (status_knop == "uit") {
        status_knop = "aan"
        btn.innerHTML = status_knop
        document.body.style.backgroundColor = "yellow"
        document.getElementById("schrijver").innerHTML = "Bram Lenting "
        document.getElementById("schrijver").style.color = "black"

    }
    else {
        status_knop = "uit"
        btn.innerHTML = status_knop
        document.body.style.backgroundColor = "black"
        document.getElementById("schrijver").innerHTML = "gemaakt door "
        document.getElementById("schrijver").style.color = "white"


    }
console.log(status_knop)    


}


btn.onclick = function() {lighswitch()
    
}


    
// schijf hier tussen je code

 