const iconcross = document.querySelector(".iconcross")
const form = document.querySelector("form")

iconcross.addEventListener("click", popup)


function popup(){
    form.classList.add("form-visibility")
    }

    const kruis =document.querySelector(".kruis")

    kruis.addEventListener("click",shoutdown)
    
    function shoutdown(){
    form.classList.remove("form-visibility")
    }
// js enabled (beschikbaar)

document.body.classList.add('js-enabled')