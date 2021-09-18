document.addEventListener("DOMContentLoaded", function(){
    let header_scroll = document.getElementById("header-scroll");
    console.log(header_scroll);
    let home_infinity_tab_content = document.getElementById("home_infinity_tab_content");
    let heigth = home_infinity_tab_content.offsetTop + 330;
    console.log(heigth);
    window.addEventListener("scroll", function(){
        if(window.pageYOffset >= heigth){
            header_scroll.classList.add("sticky");
        }
        else{
            header_scroll.classList.remove("sticky");
        }
    })
}, false)