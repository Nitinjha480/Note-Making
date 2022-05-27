console.log("NodeMaking App Ready");
let back = document.getElementById("back");

let card = [
  {
    name: "Nitin",
    img: "https://pps.whatsapp.net/v/t61.24694-24/260936846_3083304428578396_5737823181543530376_n.jpg?ccb=11-4&oh=01_AVz-mLJ8qo93UstxDTjF3Tb1jlGc3HPhu_O7dkMrOwdzKw&oe=629C482A",
    text: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
  },
  {
    name: "Nirwan",
    img: "https://pps.whatsapp.net/v/t61.24694-24/233338005_549168603257413_6515484552320171010_n.jpg?ccb=11-4&oh=4c4e557a9eb8e4499356295ee2b98dfd&oe=629D302D",
    text: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
  },
]

function add() {
  let title = document.getElementById("title").value;
  let note = document.getElementById("note").value;
  var file = document.querySelector('#image').files[0];
  var reader = new FileReader();
if(file){
reader.readAsDataURL(file);
reader.onload = function (e) {card.push({ name: title, text: `${note}`, img: reader.result })}
}else{
card.push({ name: title, text: `${note}`})
}
  let cards = document.getElementById("cards");
  cards.innerHTML = "";
  card.forEach(function (element, index) {
    let cards = document.getElementById("cards");
    let load = document.getElementById("load-img");
    let img = `<img class="lg:h-48 md:h-36 w-fit object-cover object-center" src=${element["img"]} alt="blog">`;
    let div1 = document.createElement('div');
    div1.classList.add("lg:w-1/2");
    div1.classList.add("sm:w-1/2");
    div1.classList.add("p-4");
    let div2 = document.createElement('div');
    if (element["img"]) {
      div2.innerHTML = `
<div class="px-4 py-5 z-10 border-4 border-green-200 bg-green-100" id="load-img" ondblclick="pop(${index})">
        <img class="lg:h-48 md:h-36 w-fit object-cover object-center" src=${element["img"]} alt="blog">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mt-3">Note</h2>
            <h1 class="tracking-wides text-indigo-500 title-font text-lg font-medium  mb-1">${element["name"]}</h1>
          <p class="leading-relaxed">${element["text"]}</p>
       </div>`;
    } else {
      div2.innerHTML = `
<div class="px-4 py-5 z-10 border-4 border-green-200 bg-green-100" id="load-img" ondblclick="pop(${index})">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mt-3">Note</h2>
            <h1 class="tracking-wides text-indigo-500 title-font text-lg font-medium  mb-1">${element["name"]}</h1>
          <p class="leading-relaxed">${element["text"]}</p>
       </div>`;
    }
    div1.append(div2);
    cards.append(div1);

  });
}

card.forEach(function (element, index) {
  let cards = document.getElementById("cards");
  let load = document.getElementById("load-img");
  let img = `<img class="lg:h-48 md:h-36 w-fit object-cover object-center" src=${element["img"]} alt="blog">`;
  let div1 = document.createElement('div');
  div1.classList.add("lg:w-1/2");
  div1.classList.add("sm:w-1/2");
  div1.classList.add("p-4");
  let div2 = document.createElement('div');
  if (element["img"]) {
    div2.innerHTML = `
<div class="px-4 py-5 z-10 border-4 border-green-200 bg-green-100" id="load-img" ondblclick="pop(${index})">
        <img class="lg:h-48 md:h-36 w-fit object-cover object-center" src=${element["img"]} alt="blog">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mt-3">Note</h2>
            <h1 class="tracking-wides text-indigo-500 title-font text-lg font-medium  mb-1">${element["name"]}</h1>
          <p class="leading-relaxed">${element["text"]}</p>
       </div>`;
  } else {
    div2.innerHTML = `
<div class="px-4 py-5 z-10 border-4 border-green-200 bg-green-100" id="load-img" ondblclick="pop(${index})">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mt-3">Note</h2>
            <h1 class="tracking-wides text-indigo-500 title-font text-lg font-medium  mb-1">${element["name"]}</h1>
          <p class="leading-relaxed">${element["text"]}</p>
       </div>`;
  }
  div1.append(div2);
  cards.append(div1);

});

function fun(params) {
  let search = document.getElementById("search").value;
  card.forEach(function (item, index) {
    if (item['name'] === search) {
      let cards = document.getElementById("cards");
      cards.innerHTML = "";
      let div1 = document.createElement('div');
      div1.classList.add("lg:w-1/2");
      div1.classList.add("sm:w-1/2");
      div1.classList.add("p-4");
      let div2 = document.createElement('div');
      if (card[index]["img"]) {
        div2.innerHTML = `
<div class="px-4 py-5 z-10 border-4 border-green-200 bg-green-100" id="load-img" ondblclick="pop(${index})">
        <img class="lg:h-48 md:h-36 w-fit object-cover object-center" src=${card[index]["img"]} alt="blog">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mt-3">Note</h2>
            <h1 class="tracking-wides text-indigo-500 title-font text-lg font-medium  mb-1">${card[index]["name"]}</h1>
          <p class="leading-relaxed">${card[index]["text"]}</p>
       </div>`;
      } else {
        div2.innerHTML = `
<div class="px-4 py-5 z-10 border-4 border-green-200 bg-green-100" id="load-img" ondblclick="pop(${index})">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mt-3">Note</h2>
            <h1 class="tracking-wides text-indigo-500 title-font text-lg font-medium  mb-1">${card[index]["name"]}</h1>
          <p class="leading-relaxed">${card[index]["text"]}</p>
       </div>`;
      }
      div1.append(div2);
      cards.append(div1);
  
}
  });
}

back.addEventListener('click', function () {
let cards = document.getElementById("cards");
      cards.innerHTML = "";
   card.forEach((element, index) => {
  let load = document.getElementById("load-img");
  let img = `<img class="lg:h-48 md:h-36 w-fit object-cover object-center" src=${element["img"]} alt="blog">`;
  let div1 = document.createElement('div');
  div1.classList.add("lg:w-1/2");
  div1.classList.add("sm:w-1/2");
  div1.classList.add("p-4");
  let div2 = document.createElement('div');
  if (element["img"]) {
    div2.innerHTML = `
<div class="px-4 py-5 z-10 border-4 border-green-200 bg-green-100" id="load-img" ondblclick="pop(${index}))">
        <img class="lg:h-48 md:h-36 w-fit object-cover object-center" src=${element["img"]} alt="blog">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mt-3">Note</h2>
            <h1 class="tracking-wides text-indigo-500 title-font text-lg font-medium  mb-1">${element["name"]}</h1>
          <p class="leading-relaxed">${element["text"]}</p>
       </div>`;
  } else {
    div2.innerHTML = `
<div class="px-4 py-5 z-10 border-4 border-green-200 bg-green-100" id="load-img" ondblclick="pop(${index})">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mt-3">Note</h2>
            <h1 class="tracking-wides text-indigo-500 title-font text-lg font-medium  mb-1">${element["name"]}</h1>
          <p class="leading-relaxed">${element["text"]}</p>
       </div>`;
  }
  div1.append(div2);
  cards.append(div1);

});

})

function pop(name){
 console.log(name)
 card.splice(name, 1);
 let cards = document.getElementById("cards");
      cards.innerHTML = "";
   card.forEach((element, index) => {
  let load = document.getElementById("load-img");
  let img = `<img class="lg:h-48 md:h-36 w-fit object-cover object-center" src=${element["img"]} alt="blog">`;
  let div1 = document.createElement('div');
  div1.classList.add("lg:w-1/2");
  div1.classList.add("sm:w-1/2");
  div1.classList.add("p-4");
  let div2 = document.createElement('div');
  if (element["img"]) {
    div2.innerHTML = `
<div class="px-4 py-5 z-10 border-4 border-green-200 bg-green-100" id="load-img" ondblclick="pop(${index}))">
        <img class="lg:h-48 md:h-36 w-fit object-cover object-center" src=${element["img"]} alt="blog">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mt-3">Note</h2>
            <h1 class="tracking-wides text-indigo-500 title-font text-lg font-medium  mb-1">${element["name"]}</h1>
          <p class="leading-relaxed">${element["text"]}</p>
       </div>`;
  } else {
    div2.innerHTML = `
<div class="px-4 py-5 z-10 border-4 border-green-200 bg-green-100" id="load-img" ondblclick="pop(${index})">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mt-3">Note</h2>
            <h1 class="tracking-wides text-indigo-500 title-font text-lg font-medium  mb-1">${element["name"]}</h1>
          <p class="leading-relaxed">${element["text"]}</p>
       </div>`;
  }
  div1.append(div2);
  cards.append(div1);

});
}
 