const formBtns = document.querySelectorAll(".formOpen")
const form = document.querySelector(".formContainer")
const closeForm = document.querySelector("#formClose")


Array.from(formBtns).forEach(e=> {
  e.addEventListener("click", ()=> {
      form.classList.remove("dnone")
      form.classList.add("visible")
  })
})
closeForm.addEventListener("click",()=> {
  form.classList.add("dnone") 
      form.classList.remove("visible")
})

// setTimeout(() => {
//   form.classList.remove("dnone")
//          form.classList.add("visible")
// }, 30000);  
