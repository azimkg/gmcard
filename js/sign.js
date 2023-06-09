const gender_1 = document.querySelector("#gender1")
const gender_2 = document.querySelector("#gender2")
const gender_3 = document.querySelector("#gender3")
const man = document.querySelector("#man")
const woman = document.querySelector("#woman")
const other = document.querySelector("#other")
const success = document.querySelector("#success")
const med_success = document.querySelector("#med_success")
const failed = document.querySelector("#failed")
const password = document.querySelector("#password")
const show_password = document.querySelector("#show_password")

// Валидация пароля
const regexSuccess = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{1,}$/
const regMed = /^[a-zA-Z0-9]{1,}$/
const failedReg1 = /^\d{1,}$/
const failedReg2 = /^[a-z]{1,}$/

password.addEventListener("input", () => {
    if (regexSuccess.test(password.value)) {
        success.classList.remove("hidden")
        med_success.classList.add("hidden")
        failed.classList.add("hidden")
    }
    if (regMed.test(password.value)) {
        success.classList.add("hidden")
        med_success.classList.remove("hidden")
        failed.classList.add("hidden")
    }
    if (failedReg1.test(password.value) || failedReg2.test(password.value)) {
        success.classList.add("hidden")
        med_success.classList.add("hidden")
        failed.classList.remove("hidden")
    }
    if (password.valu == "") {
        success.classList.add("hidden")
        med_success.classList.add("hidden")
        failed.classList.add("hidden")
    }
})
show_password.addEventListener("click", () => {
    if (password.type === "text") {
        password.type = "password";
    } else {
        password.type = "text";
    }
})

gender_1.addEventListener("click", () => {
    gender_1.checked = true
    gender_2.checked = false
    gender_3.checked = false
})

gender_2.addEventListener("click", () => {
    gender_1.checked = false
    gender_2.checked = true
    gender_3.checked = false
})

gender_3.addEventListener("click", () => {
    gender_1.checked = false
    gender_2.checked = false
    gender_3.checked = true
})

man.addEventListener("click", () => {
    gender_1.checked = true
    gender_2.checked = false
    gender_3.checked = false
})

woman.addEventListener("click", () => {
    gender_1.checked = false
    gender_2.checked = true
    gender_3.checked = false
})

other.addEventListener("click", () => {
    gender_1.checked = false
    gender_2.checked = false
    gender_3.checked = true
})

