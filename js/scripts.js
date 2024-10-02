


// property serach function 
const serachBox = document.querySelector("#search")
const searchArea = document.querySelector(".boxOne")
const searchResults = document.querySelector('.searchResults')

// suggestions box open 
 if(serachBox) {
  serachBox.addEventListener('focus',()=> {
    searchResults.style.display = "block"
})
serachBox.addEventListener('blur',()=> {
  searchResults.style.display = "none"
  clutter = ''
})
 }
 else {
  console.log("okk")
 }
// listing data 
const listings = [
  {
  
    id: 1,
    image: "../images/NH2NOD101/1.jpg",
    title: "NH²NOD101",
    city:'Sector 168 Expressway, Gautam Budh Nagar, Noida 201305, Uttar Pradesh ',location: "",
    pagelink : "../pg-in-noida/Nh2NOD101.html",
    bed: "150+",
    bath: "74+",
    sqft: 7200,
    price: "₹10000",
    oldPrice : "₹12000",
    ratting : "4.5",
    rattingStatus : "Excellent",
    ratedPeapleNumber : "143",
    cursurStatus : "pointer",
    forRent: false,
    tags: ["house", "office"],
    propertyType:'Houses',yearBuilding:2018,
    featured:true,
    lat: 40.7279707552121,
        long: -74.07152705896405,
    features:[
    "Air Conditioning",
      "Lawn",
      "TV Cable",
      "Dryer",
      //

  ],
  },
  {

    id: 2,
    image: "../images/Nh2NOD416/38.jpg",
    title: "Nh2NOD416",
    city:'Sector 81,Noida,Uttar Pradesh ',location: "Salarpur Village, Opposite Metro Sector 81 pillor number 176, Near - Family Hospital, Sector 81, Noida, Uttar Pradesh - 201304 ",
    pagelink : "../pg-in-noida/Nh2NOD416.html",
    bed: "15",
    bath: "4",
    sqft: 1200,
    price: "₹8500",
    oldPrice : "₹10000",
    ratting : "4.5",
    rattingStatus : "Excellent",
    ratedPeapleNumber : "103",
    cursurStatus : "pointer",
    forRent: false,
    tags: ["house", "office"],
    propertyType:'Houses',yearBuilding:2018,
    featured:true,
    lat: 40.7279707552121,
        long: -74.07152705896405,
    features:[
      "Air Conditioning",
      "Lawn",
      "TV Cable",
      "Dryer",
  ],
  },
  {

    id: 3,
    image: "../images/comingSoon.png",
    title: "NH²NOD425",
    city:'--',location: "",
    bed: "--",
    pagelink : "",
    bath: "--",
    sqft: "--",
    price: "--",
    oldPrice : "",
    ratting : "---",
    rattingStatus : "--",
    ratedPeapleNumber : "--",
    cursurStatus : "none",
    forRent: false,
    tags: ["house", "office"],
    propertyType:'Houses',yearBuilding:2018,
    featured:true,
    lat: 40.7279707552121,
        long: -74.07152705896405,
    features:[
     "--" 
      //

  ],
  },
  {

    id: 4,
    image: "../images/comingSoon.png",
    title: "NH²NOD438",
    city:'--',location: "",
    bed: "--",
    pagelink : "",
    bath: "--",
    sqft: "--",
    price: "--",
    oldPrice : "",
    ratting : "--",
    rattingStatus : "--",
    ratedPeapleNumber : "--",
    cursurStatus : "none",
    forRent: false,
    tags: ["house", "office"],
    propertyType:'Houses',yearBuilding:2018,
    featured:true,
    lat: 40.7279707552121,
        long: -74.07152705896405,
    features:[
     "--" 
      //

  ],
  },
];



// suggestions start 
let clutter = "";

function apiCallForListiingData() {
  let timerId;

  if(serachBox) {
    serachBox.addEventListener("input", (evt) => {
      clearTimeout(timerId);
      timerId = setTimeout(async () => {
        let inputCharcter = evt.target.value.trim().toUpperCase();
  
        // Filter the listings array based on the search value
        let filteredListings = listings.filter((e) => {
          return e.title.toUpperCase().startsWith(inputCharcter);
        });
  
        // Generate the clutter HTML
        clutter = filteredListings
          .map(
            (e) => `<li id="suggestion" class="p-3 d-flex justify-content-between my-3">
                      ${e.title} 
                      <i class="ri-arrow-right-up-line fs-3 ms-2"></i>
                    </li>`
          )
          .join("");
  
        // Update the search results
        searchResults.innerHTML = clutter;
      }, 300); // Debounce time set to 300ms
    });
  }
  else {
    console.log('ok')
  }
}

apiCallForListiingData();




// reviews 
const testimonials = [
  {
    id: 1,
    title: "Great PG's",
    quote:
      "I love to stay in their PG. So comfortable and well maintained",
    stars: 5,
    image: "/images/testimonials/testimonial-1.png",
    name: "Shubham Singh",
    company: "Noida",
  },
  {
    id: 2,
    title: "Proper Space",
    quote:
      "nh2stays is best for me. Thank you for your services. ",
    stars: 5,
    image: "/images/testimonials/testimonial-2.png",
    name: "Amit Sharma",
    company: "New Colony",
  },
  {
    id: 3,
    title: "Well maintained",
    quote:
      "These are well maintained",
    stars: 5,
    image: "/images/testimonials/testimonial-3.png",
    name: "Priya",
    company: "Delhi",
  },
  {
    id: 4,
    title: "Perfect stay ",
    quote:
      "Love to stay in your PG's",
    stars: 5,
    image: "/images/testimonials/testimonial-4.png",
    name: "Sahil",
    company: "New Delhi",
  },
];

listings.forEach(e=> {
  let li = document.createElement("li")
  li.innerHTML = `<a class="text-decoration-none text-dark" href="${e.pagelink}">
  <li id="suggestion" class="p-3 d-flex justify-content-between">
                      ${e.title} 
                      <i class="ri-arrow-right-up-line fs-3 ms-2"></i>
                    </li>
  <a/>`
      searchResults.append(li)
})


let clutter2 = testimonials.map(e => {
  return `
    <div class="col-md-3">
      <div class="card review-card mb-4 shadow-sm">
        <div class="card-body reviewCard">
          <div class="d-flex justify-content-between w-100"><h2 class="card-title">${e.title}</h2> <h5 class='fs-1'>”</h5></div>
          <p class="card-text ">${e.quote}</p>
          <p class="card-text"><span class="text-warning">★★★★★</span></p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="reviewer-info d-flex">
              <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" class="rounded-circle" alt="${e.name}" width="50" height="50">
              <div>
                <h6>${e.name}</h6>
                <p>${e.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}).join('');

document.querySelector(".allreviews").innerHTML = `
  <section class="reviews-section">
    <div class="row">
      ${clutter2}
    </div>
  </section>`;




  // navbar scroll 
  const scrollOn = ()=> {
    window.addEventListener("scroll",()=> {
      if(document.documentElement.scrollTop > '50') {
        document.querySelector(".navforscroll").style.top = '0'
      }
      else {
        document.querySelector(".navforscroll").style.top = '-100%'
      }

    })
  }
  scrollOn()





  const villasAddingfn = ()=> {
    let villasClutter = listings
    .map(e=> {
      return `<div class="col-md-3">
              <div class="card mb-4 shadow-sm p-2">
                
                <img src="${e.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h1 class="card-text fs-3">${e.title}</h1>
                  
                  <ul class="list-unstyled d-flex flex-column">
                    <li><strong><i class="fa-solid fa-bed"></i> ${e.bed}</strong> bed</li>
                    <li><strong><i class="fa-solid fa-restroom"></i>${e.bath}</strong> bath</li>
                    <li><strong><i class="fa-solid fa-chart-area"></i> ${e.sqft}</strong> sqft</li>
                  </ul>
                  <div class="d-flex align-items-center gap-2"> <div class="hotel-price fw-bold mt-2 fs-3 text-dark">${e.price}</div> <span class="hotel-old-price mt-2 fs-5">${e.oldPrice}</span></div>
                  <a href="${e.pagelink}" class="btn btn-outline-secondary w-100 bg-dark py-3 mt-3 text-white ${e.cursurStatus}">Book Now</a>
                </div>
              </div>
            </div>`
    }).join('')
    document.querySelector(".page2-row").innerHTML = villasClutter
  }
  villasAddingfn()