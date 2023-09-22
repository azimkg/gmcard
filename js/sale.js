const gal1 = document.querySelector("#gal1")
const galD1 = document.querySelector("#galD1")
const gal2 = document.querySelector("#gal2")
const galD2 = document.querySelector("#galD2")
const gal3 = document.querySelector("#gal3")
const galD3 = document.querySelector("#galD3")
const gal4 = document.querySelector("#gal4")
const galD4 = document.querySelector("#galD4")
const gal5 = document.querySelector("#gal5")
const galD5 = document.querySelector("#galD5")

// Блоки для адресов
const address1Block = document.querySelector("#address1Block")
const showAd1 = document.querySelector("#showAd1")
const address1 = document.querySelector("#address1")
const address2Block = document.querySelector("#address2Block")
const showAd2 = document.querySelector("#showAd2")
const address2 = document.querySelector("#address2")
const address3Block = document.querySelector("#address3Block")
const showAd3 = document.querySelector("#showAd3")
const address3 = document.querySelector("#address3")
const address4Block = document.querySelector("#address4Block")
const showAd4 = document.querySelector("#showAd4")
const address4 = document.querySelector("#address4")

// Кнопка для показа дополнительных фоток
const showGalBlock = document.querySelector("#showGalBlock")
const galBlock = document.querySelector("#galBlock")
const border_line = document.querySelector("#border_line")
const galUp = document.querySelector("#galUp")



Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

// конец
showGalBlock?.addEventListener("click", () => {
    galBlock.classList.toggle("hidden")
    border_line.classList.toggle("hidden")
    galUp.classList.toggle("rotate-180")
})


gal1.addEventListener("mouseenter", () => {
    galD1.classList.remove("hidden")
})
gal1.addEventListener("mouseleave", () => {
    galD1.classList.add("hidden")
})

gal2.addEventListener("mouseenter", () => {
    galD2.classList.remove("hidden")
})
gal2.addEventListener("mouseleave", () => {
    galD2.classList.add("hidden")
})

gal3.addEventListener("mouseenter", () => {
    galD3.classList.remove("hidden")
})
gal3.addEventListener("mouseleave", () => {
    galD3.classList.add("hidden")
})

gal4.addEventListener("mouseenter", () => {
    galD4.classList.remove("hidden")
})
gal4.addEventListener("mouseleave", () => {
    galD4.classList.add("hidden")
})

gal5.addEventListener("mouseenter", () => {
    galD5.classList.remove("hidden")
})
gal5.addEventListener("mouseleave", () => {
    galD5.classList.add("hidden")
})


// Блоки для адресов
address1.addEventListener("click", () => {
    showAd1.classList.toggle("rotate-180")
    address1Block.classList.toggle("hidden")
})

address2.addEventListener("click", () => {
    showAd2.classList.toggle("rotate-180")
    address2Block.classList.toggle("hidden")
})

address3.addEventListener("click", () => {
    showAd3.classList.toggle("rotate-180")
    address3Block.classList.toggle("hidden")
})

address4.addEventListener("click", () => {
    showAd4.classList.toggle("rotate-180")
    address4Block.classList.toggle("hidden")
})
