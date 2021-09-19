function openPage(pageName, elmnt) {
    let tab_content = document.getElementsByClassName("tab-content");
    let tab = document.getElementsByClassName("tab");
    let i;
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.visibility = "hidden";
    }
    // elmnt.classList.add("border");
    document.getElementById(pageName).style.visibility = "visible";
}
