// 2번 window.onload = function(){

    var menuBtn = document.querySelector(".menuBtn");
    var sidenav = document.querySelector(".sidenav");

    menuBtn.addEventListener("click",function(){
        var w = sidenav.style.width;

        // if(w == "0px" || ""){
        //     sidenav.style.width = "200px";
        // }else{
        //     sidenav.style.width = "0px";
        // }
        
        if(window.innerWidth <= 767){ //모바일사이즈
            if(w == "0px"){
                sidenav.style.width = "100%";
            }else{
                sidenav.style.width = "0px";
            }
        }else{ //브라우저 사이즈
            if(w == "0px"){
                sidenav.style.width = "200px";
            }else{
                sidenav.style.width = "0px";
            }
        }
        
    });
// }

