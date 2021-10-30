import show from "./rollImg.js";

let toTop = document.getElementById("back_top");
if(window.pageYOffset > 200){
    toTop.style.display = "block";
}else{
    toTop.style.display = "none";
}
show.method();
console.log("haha");
console.log(toTop);
toTop.onclick = function(){
    console.log("created!!!");
    let interval = setInterval(() => {
        if(document.documentElement.scrollTop >= 10){
            document.documentElement.scrollTop = document.documentElement.scrollTop - 40;
        }else{
            document.documentElement.scrollTop = 0;
            clearInterval(interval);
        }
    }, 10);
}
window.onscroll = function(){
        let toTop = document.getElementById("back_top");
        if(window.pageYOffset > 200){
            toTop.style.display = "block";
        }else{
            toTop.style.display = "none";
        }
}
