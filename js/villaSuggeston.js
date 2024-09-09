const listings = [
  {
  
    id: 1,
    image: "../images/NH2NOD101/1.png",
    title: "NH²NOD101",
    city:'Sector 168 Expressway, Gautam Budh Nagar, Noida 201305, Uttar Pradesh ',location: "",
    pagelink : "../pg-in-noida/Nh2NOD101.html",
    bed: "150+",
    bath: "74+",
    sqft: 7200,
    price: "₹8000",
    oldPrice : "₹10000",
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
    price: "₹5000",
    oldPrice : "₹7000",
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
                <a href="${e.pagelink}" class="btn btn-outline-secondary w-100 bg-dark py-3 mt-3 ${e.cursurStatus}">For Rent</a>
              </div>
            </div>
          </div>`
  }).join('')
  document.querySelector(".page2-row").innerHTML = villasClutter
}
villasAddingfn()

