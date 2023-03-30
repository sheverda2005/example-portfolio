const menu_burger_nav_items = document.querySelectorAll(".menu-burger-item")

menu_burger_nav_items.forEach(item => {
    item.addEventListener("click", ()=> {
        menu_burger_nav_items.forEach(item_previos => {
            if(item_previos.classList.contains("active")) {
                item_previos.classList.remove("active")
            }
        })
        item.classList.add("active")
        return;
    })
})


function menu_burger_scrollIntoView() {
    menu_burger_nav_items.forEach((item, index)=> {
        item.addEventListener("click", ()=> {
            site_element_array[index].scrollIntoView({behavior: "smooth"})
        } )
    } )
}

menu_burger_scrollIntoView()