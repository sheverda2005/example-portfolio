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



nav_item_list_link[0].addEventListener("click", ()=> {
    portfolio.scrollIntoView({behavior: "smooth"})
})

nav_item_list_link[1].addEventListener("click", ()=> {
    about_me.scrollIntoView({behavior: "smooth"})
})

nav_item_list_link[2].addEventListener("click", ()=> {
    my_service.scrollIntoView({behavior: "smooth"})
})

nav_item_list_link[3].addEventListener("click", ()=> {
    my_skill.scrollIntoView({behavior: "smooth"})
})

nav_item_list_link[4].addEventListener("click", ()=> {
    my_story.scrollIntoView({behavior: "smooth"})
})

nav_item_list_link[5].addEventListener("click", ()=> {
    latest_post.scrollIntoView({behavior: "smooth"})
})

nav_item_list_link[6].addEventListener("click", ()=> {
    contact_info.scrollIntoView({behavior: "smooth"})
})


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

