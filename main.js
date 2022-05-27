console.log("NodeMaking App Ready");
let back = document.getElementById("back");

let card = [
  {
    name: "Nitin",
    img: "https://images.unsplash.com/photo-1653423368756-6bdc7958330b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
    text: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
  },
  {
    name: "Nirwan",
    img: "https://images.unsplash.com/photo-1653478986501-61b22a3362ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
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
 
