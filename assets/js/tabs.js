const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs_item = $$(".tab");
const tabs_content = $$(".tab-content");
tabs_item.forEach((element, index) => {
    const tab_content = tabs_content[index];
    element.onclick = function () {
        $(".tab.active").classList.remove("active");
        $(".tab-content.active").classList.remove("active");
        this.classList.add("active");
        tab_content.classList.add("active");
    };
});