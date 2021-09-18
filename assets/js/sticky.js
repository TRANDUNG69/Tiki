document.addEventListener("DOMContentLoaded", function(){
    let header_scroll = document.getElementById("header-scroll");
    let heigth = 2695;
    let sticky_content = document.getElementById("sticky-content");
    let search_auto = document.getElementById("search-auto");
    let bg_dark = document.getElementById("bg-dark");
    console.log(search_auto);
    window.addEventListener("scroll", function(){
        search_auto.style.display = "none";
        bg_dark.style.display = "none";
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