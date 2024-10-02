  
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
  
  // villas adding fn in villa page 
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
      price: "₹8500",
      oldPrice : "₹11000",
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
      return `<a class="text-decoration-none text-dark" href="${e.pagelink}"><div class="col-md-12 hotel-card">
              <div class="row no-gutters align-items-center">
                  <div class="col-md-4">
                      <img src="${e.image}" alt="${e.image}" class="hotel-img">
                  </div>  
                  <div class="col-md-8">
                      <div class="hotel-info">
                          <div class="hotel-title fs-3"> ${e.title}</div>
                          <div class="hotel-location fs-5">${e.city}</div>
                           <div class="d-flex align-items-center my-2 gap-1"><span class="badge bg-success p-2">${e.ratting}★</span><div class="hotel-rating">(${e.ratedPeapleNumber} Rattings) - ${e.rattingStatus}</div></div>
                           <div class=" bg-danger badge m-0 p-2">Featurs</div>
                           <div class="faccalties"><ul class='p-0'>${e.features}</ul></div>
                          <ul class="list-unstyled d-flex flex-column">
                    <li><strong><i class="fa-solid fa-bed"></i> ${e.bed}</strong> bed</li>
                    <li><strong><i class="fa-solid fa-restroom"></i> ${e.bath}</strong> bath</li>
                    <li><strong><i class="fa-solid fa-chart-area"></i> ${e.sqft}</strong> sqft</li>
                  </ul> 
                          <div class="w-100 d-flex justify-content-between">
                          <div class="d-flex align-items-center gap-2">
                          <div class="hotel-price fw-bold mt-2 fs-3 text-dark">${e.price}</div>
                          <span class="hotel-old-price mt-2 fs-5">${e.oldPrice}</span>
                          </div>
                            <button class="btn btn-primary book-now-btn ${e.cursurStatus}">Book Now</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div></a>`
    }).join('')
    document.querySelector(".hetelsrow").innerHTML = villasClutter
  }
  villasAddingfn()
{/* <div class="faccalties">${e.featured ? 'Featured' : ''}</div> */}


