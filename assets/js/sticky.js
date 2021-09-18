document.addEventListener("DOMContentLoaded", function(){
    let header_scroll = document.getElementById("header-scroll");
    let heigth = 2695;
    let sticky_content = document.getElementById("sticky-content");
    window.addEventListener("scroll", function(){
        if(window.pageYOffset >= heigth){
            header_scroll.classList.add("sticky");
            sticky_content.classList.add("mt-150")
        }   
        else{
            header_scroll.classList.remove("sticky");
            sticky_content.classList.remove("mt-150");
        }
    })
}, false)