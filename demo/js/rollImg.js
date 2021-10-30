export default{
    method(){
        let nav = document.getElementById("nav1");
        let ul = document.getElementById("ul1");
        if(ul === null){
            return;
        }
        let speed = 1;
        let interval = setInterval(() => {
            if(ul.style.left <= -1000 +'px'){
                ul.style.left = "0px";
            }else{
                ul.style.left = ul.offsetLeft - speed +'px';
            }
        }, 50);
    }
}
