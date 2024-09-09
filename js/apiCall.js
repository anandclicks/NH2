const queryForm = document.querySelectorAll("#queryForm");

queryForm.forEach(e=> {
  e.addEventListener("submit", async (evt) => {
    evt.preventDefault();

    const name = e.querySelector("#name").value;
    const mobileNumber = e.querySelector("#mobileNumber").value;
    const propertyName = e.querySelector("#propertyName").value;
    const roomSharing = e.querySelector("#roomSharing").value;

    let userInfo = {
        name,
        mobileNumber,
        propertyName,
        roomSharing
    };

    document.querySelector(".loadingpage").style.display = "flex";
    document.querySelector(".send").style.display = "flex";
      setTimeout(() => {
                document.querySelector(".loadingpage").style.display = "none";
                document.querySelector(".send").style.display = "none";

                // Reset form fields (example function calls)
               form.classList.add("dnone") 
      form.classList.remove("visible")
            }, 2000);

    try {
        const response = await fetch("https://updated-nh2-backend.onrender.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        });

      
    } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error: display an error message or retry logic
    }
});

})