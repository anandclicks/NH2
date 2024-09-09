const toggleBtn = document.querySelectorAll(".navbar-toggler-icon")
const toggleNav = document.querySelector("#navbarMenu")
let a=0
Array.from(toggleBtn).forEach(e=> {
  e.addEventListener("click",()=> {
    if(a==0) {
      toggleNav.style.display = "flex"
      document.querySelector("body").style.overflow = "hidden"
      a=1
    }
    else {
      toggleNav.style.display = 'none'
      document.querySelector("body").style.overflow = "auto"
      a=0
    }
  })
})





// add property fn code 
const addPropertyBtn = document.querySelectorAll(".addProperty")
const addPropertyForm = document.querySelector(".addPropertyForm")
const closeAddPropertyFormBtn = document.querySelector(".closeAddPropertyForm")

Array.from(addPropertyBtn).forEach(e=> {
  e.addEventListener("click",()=> {
    addPropertyForm.style.marginRight = "0%"
  })
})

closeAddPropertyFormBtn.addEventListener('click',()=> {
   addPropertyForm.style.marginRight = "-100%"
})