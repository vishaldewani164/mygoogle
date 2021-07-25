function atp(){
    
    var apps = document.getElementsByClassName("apps")[0];
    var acc = document.getElementsByClassName("account")[0];
    if (apps.style.display == "flex"){
        apps.style.display = "none";
        console.log("hi");
    }
    else{
        apps.style.display = "flex";
        acc.style.display = "none";
    }
}
function conta(){
    var acc = document.getElementsByClassName("account")[0];
    var apps = document.getElementsByClassName("apps")[0];
    apps.style.display = "none";
    acc.style.display = "none";
}

function ttt(){
    var acc = document.getElementsByClassName("account")[0];
    var apps = document.getElementsByClassName("apps")[0];
    if (acc.style.display == "flex"){
        acc.style.display = "none";
        console.log("hi");
    }
    else{
        acc.style.display = "flex";
        apps.style.display = "none";
    }
}