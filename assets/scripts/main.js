submenu = document.getElementById("submenu");
list_submenu = document.querySelector(".nav-link--submenu");
size_menu = 195;
open_menu = document.getElementById("open-menu");
close_menu = document.getElementById("close-menu");

document.getElementById("menu").addEventListener("click", function () {
    document.querySelector(".header__nav-list").classList.toggle("open");
    open_menu.style.display = (open_menu.style.display === "none") ? "block" : "none";
    close_menu.style.display = (close_menu.style.display === "none") ? "block" : "none";
});
   
if(window.innerWidth-size_menu <= 960){
    submenu.addEventListener("click",  function () {
        list_submenu.classList.toggle("open");
    });
}else{
    console.log("entrou no else")
    submenu.addEventListener("mouseover", function () {
        list_submenu.classList.add("open");
    });
    
    list_submenu.addEventListener("mouseleave", function () {
        list_submenu.classList.remove("open");
    });
}