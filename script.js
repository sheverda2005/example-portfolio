const nav_item_list_link = document.querySelectorAll(".nav-item-link")
const all_progress = document.querySelectorAll(".need-to-know-progress")
const scale_information = document.querySelectorAll(".need-to-know-scale-information")
const progress_bar_my_progress = document.querySelectorAll(".need-to-know-scale-progress-bar-my-progress")
const scale_items = document.querySelector(".need-to-know-scale-items")
const services_item_all = document.querySelectorAll(".my-service-services-item")
const services_items = document.querySelector(".my-service-services-items")
const my_story_content = document.querySelector(".my-story-content")
const my_story_content_item = document.querySelectorAll(".my-story-content-item")
const latest_posts_content = document.querySelector(".latest-posts-content")

const portfolio = document.querySelector(".portfolio")
const my_service = document.querySelector(".my-service")
const about_me = document.querySelector(".about-me")
const my_skill = document.querySelector(".my-skill")
const my_story = document.querySelector(".my-story")
const latest_post = document.querySelector(".latest-post")
const contact_info = document.querySelector(".contact-info")

const menu_burger = document.querySelector(".menu-burger")
const menu_burger_items = document.querySelector(".menu-burger-items")

let site_element_array = [portfolio, about_me, my_service, my_skill, my_story, latest_post, contact_info]

function nav_item_link_scrollIntoView() {
    nav_item_list_link.forEach((item, index)=> {
        item.addEventListener("click", ()=> {
            site_element_array[index].scrollIntoView({behavior: "smooth"})
        } )
    } )
}

nav_item_link_scrollIntoView()


nav_item_list_link.forEach(nav_item_link => {
    nav_item_link.addEventListener('click', ()=> {
        nav_item_list_link.forEach(item => {
            if ( item.classList.contains("active") ) {
                item.classList.remove("active")
            }
        })
        nav_item_link.classList.add("active")
    })
})

function progress_bar_animation() {
    all_progress.forEach((progress, index) => {
        scale_information[index].style.width = progress.getAttribute("data-progress") + "%"
        progress_bar_my_progress[index].style.width = progress.getAttribute("data-progress") + "%"
    })
}


function progress_bar_animation_handler() {
    const scale_items_position = scale_items.offsetTop;
    window.addEventListener('scroll', function() {
        let scrollPosition = window.pageYOffset + window.innerHeight - 180;
        if (scrollPosition >= scale_items_position) {
            progress_bar_animation()
            window.removeEventListener('scroll', progress_bar_animation_handler)
            return;
        }
    });
}

progress_bar_animation_handler()


 function services_items_animation_handler() {
    const services_items_position = services_items.offsetTop;
    window.addEventListener('scroll',   function() {
        let scrollPosition = window.pageYOffset + window.innerHeight - 180;
        if (scrollPosition >= services_items_position) {
            services_item_all.forEach(item => {
                item.classList.add("scrolled")
            })
            window.removeEventListener("scroll", services_items_animation_handler)
            return
        }
    });
}

services_items_animation_handler()


function my_story_content_animation_handler() {
    const my_story_content_position = my_story_content.offsetTop;
    window.addEventListener('scroll',   function() {
        let scrollPosition = window.pageYOffset + window.innerHeight - 180;
        if (scrollPosition >= my_story_content_position) {
            my_story_content_item.forEach(item => {
                item.classList.add("scrolled")
            })
            window.removeEventListener("scroll", my_story_content_animation_handler)
            return
        }
    });
}

my_story_content_animation_handler()


function latest_posts_content_animation_handler() {
    const latest_posts_content_position = latest_posts_content.offsetTop;
    window.addEventListener('scroll',   function() {
        let scrollPosition = window.pageYOffset + window.innerHeight - 180;
        if (scrollPosition >= latest_posts_content_position) {
            latest_posts_content.classList.add("scrolled")
            window.removeEventListener("scroll", latest_posts_content_animation_handler)
            return
        }
    });
}

latest_posts_content_animation_handler()




function nav_bar_scroll_handler() {
    const about_me_position = about_me.offsetTop;
    const my_service_position = my_service.offsetTop;
    const my_skill_posiiton = my_skill.offsetTop;
    const my_story_position = my_story.offsetTop;
    const latest_post_position = latest_post.offsetTop;
    const contact_info_posiiton = contact_info.offsetTop;
    window.addEventListener('scroll',   function() {
        let scrollPosition = window.pageYOffset + window.innerHeight - 180;
        if (scrollPosition >= about_me_position) {
            nav_item_list_link[0].classList.remove("active")
            nav_item_list_link[1].classList.add("active")
        }
        if (scrollPosition <= about_me_position) {
            nav_item_list_link[0].classList.add("active")
            nav_item_list_link[1].classList.remove("active")
        }
        if (scrollPosition >= my_service_position) {
            nav_item_list_link[1].classList.remove("active")
            nav_item_list_link[2].classList.add("active")            
        }
        if (scrollPosition <= my_service_position && !(scrollPosition <= about_me_position)) {
            nav_item_list_link[1].classList.add("active")
            nav_item_list_link[2].classList.remove("active")            
        }
        if (scrollPosition >= my_skill_posiiton) {
            nav_item_list_link[2].classList.remove("active")
            nav_item_list_link[3].classList.add("active")  
        }
        if (scrollPosition <= my_skill_posiiton && !(scrollPosition <= my_service_position) ) {
            nav_item_list_link[2].classList.add("active")
            nav_item_list_link[3].classList.remove("active")  
        }
        if (scrollPosition >= my_story_position) {
            nav_item_list_link[3].classList.remove("active")
            nav_item_list_link[4].classList.add("active")  
        }
        if (scrollPosition <= my_story_position && !(scrollPosition <= my_skill_posiiton)) {
            nav_item_list_link[3].classList.add("active")
            nav_item_list_link[4].classList.remove("active")  
        }
        if (scrollPosition >= latest_post_position) {
            nav_item_list_link[4].classList.remove("active")
            nav_item_list_link[5].classList.add("active")  
        }
        if (scrollPosition <= latest_post_position && !(scrollPosition <= my_story_position)) {
            nav_item_list_link[4].classList.add("active")
            nav_item_list_link[5].classList.remove("active")  
        }
        if (scrollPosition >= contact_info_posiiton) {
            nav_item_list_link[5].classList.remove("active")
            nav_item_list_link[6].classList.add("active")  
        }
        if (scrollPosition <= contact_info_posiiton && !(scrollPosition <= latest_post_position)) {
            nav_item_list_link[5].classList.add("active")
            nav_item_list_link[6].classList.remove("active")  
        }
    });
}

nav_bar_scroll_handler()



menu_burger.addEventListener("click", ()=> {
    menu_burger.classList.toggle("active")
    menu_burger_items.classList.toggle("active")
    menu_burger_nav_items.forEach(item => {
        if (item.classList.contains("active")) {
            item.classList.remove("active")
        }
    })
})

