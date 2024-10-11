let nameInput = document.querySelector("#userInput");
let btn = document.querySelector(".nameBtn")
let heading = document.querySelector(".heading")
btn.addEventListener("click", function () {
    heading.innerHTML = nameInput.value;
})

let descripInput = document.querySelector("#userInput")
let descripBtn = document.querySelector(".descripBtn")
let para = document.querySelector(".para")

descripBtn.addEventListener("click", function () {

    para.innerHTML = descripInput.value
})

let picBtn = document.querySelector(".picBtn");
let image = document.querySelector("#image")
let emty = 0;

picBtn.addEventListener("click",function () {
if(emty == 0){
    image.setAttribute("src","https://img.freepik.com/premium-photo/anime-boy-man-avatar-ai-generative-art_225753-9821.jpg?w=740")
emty = 1;
}else if(emty == 1){
    image.setAttribute("src", "https://img.freepik.com/premium-photo/cute-asian-girl-kawaii-anime-avatar-ai-generative-art_225753-9820.jpg?w=740")
emty = 2;
}else if(emty == 2){
    image.setAttribute("src", "https://img.freepik.com/premium-photo/drawing-young-man-with-jacket-that-says-he-s-girl_662214-102725.jpg?w=740")
emty = 3;
}else if (emty === 3){
    image.setAttribute("src", "https://img.freepik.com/premium-photo/anime-boy-lofi-illustration-pastel-color_950633-1030.jpg?w=740")
    emty = 0;
}
})

let body = document.querySelector(".box")
let backBtn = document.querySelector(".backBtn");
let colors = ["red", "yellow","green", "salmon", "aqua", "brown","crimson","blueviolet","chocolate","lightcoral","lightseagreen","red", "yellow","green", "salmon", "aqua", "brown","crimson","blueviolet","chocolate","lightcoral","lightseagreen" ]
let count = 0;
backBtn.addEventListener("click", function(){

body.style.backgroundColor = colors[count];
count++;
})

let resetBtn = document.querySelector(".resetBtn")

resetBtn.addEventListener("click", function(){
    heading.innerHTML = "Ahmed Raza"
    para.innerHTML = "web developer"
    body.style.backgroundColor = "pink"
    image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfo_cpyHnv2rWxB8RT9vjBIHh0Q2P3Lm9z9Ngv1_KmiQEyRSpwh3mfBuVYIte6iDoI2mg&usqp=CAU")
})


// let nameBtn = document.querySelector(".nameBtn")
// let heading = document.querySelector(".heading")
// nameBtn.addEventListener("click", function(){

// heading.innerHTML = nameInput;

// })



