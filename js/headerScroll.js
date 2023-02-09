let header = document.querySelector('header')

window.addEventListener("scroll", headerChange)

function headerChange(){
    if(window.pageYOffset > 0 && header.classList.contains("headerPageTop")){
        header.classList.remove("headerPageTop")
        header.classList.add("headerPageMoved")
    } else if(window.pageYOffset == 0 && header.classList.contains("headerPageMoved")){
        header.classList.remove("headerPageMoved")
        header.classList.add("headerPageTop")
    }
}