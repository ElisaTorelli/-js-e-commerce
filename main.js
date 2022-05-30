// DECLARE VARIABLES
let remove = document.getElementById("minus-sign");
let add = document.getElementById("plus-sign");
let number = document.getElementById("num");

// DECREASE NUMBER ON CLICK
remove.addEventListener("click", ()=>{
    number.value --
})

// INCREASE NUMBER ON CLICK
add.addEventListener("click", ()=>{
    number.value ++
})

// DECLARE VARIABLES
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

let smallImage1 = document.getElementById("small__img__1");
let smallImage2 = document.getElementById("small__img__2");
let smallImage3 = document.getElementById("small__img__3");
let smallImage4 = document.getElementById("small__img__4");


// ACTION WHEN CLICKING ON SMALL IMAGE
smallImage1.addEventListener("click", ()=>{
    document.querySelector(".main__img:not(.display__none)").classList.add("display__none");
    img1.classList.remove("display__none");
});

smallImage2.addEventListener("click", ()=>{
    document.querySelector(".main__img:not(.display__none)").classList.add("display__none");
    img2.classList.remove("display__none");
});

smallImage3.addEventListener("click", ()=>{
    document.querySelector(".main__img:not(.display__none)").classList.add("display__none");
    img3.classList.remove("display__none");
});

smallImage4.addEventListener("click", ()=>{
    document.querySelector(".main__img:not(.display__none)").classList.add("display__none");
    img4.classList.remove("display__none");
});