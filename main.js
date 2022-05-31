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


//ARRAY THAT CONTAINS SMALL IMG
const imagesArray = ["./img/image-product-1-thumbnail.jpg", "./img/image-product-2-thumbnail.jpg", "./img/image-product-3-thumbnail.jpg", "./img/image-product-4-thumbnail.jpg"];

let imageContainer = document.querySelector(".slider__sneaker__images");

let bigImage = document.querySelector(".posterImage");


for (i=0; i<imagesArray; i++){
    let image = document.createElement("img");
    image.src = imagesArray[i];
    imageContainer.append(img);
    image.classList.add("img-thumbnail");
}

const image = document.querySelector(".img-thumbnail");
image.forEach((e) => {
    e.addEventListener("click", () => {
        bigImage.src = e.replace("-thumbnail", "");
    })
});