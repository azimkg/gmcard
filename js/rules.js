const gm = document.querySelector("#gm")
const user_conf = document.querySelector("#user_conf")
const rules_team = document.querySelector("#rules_team")
const possibilities = document.querySelector("#possibilities")
const about_sales = document.querySelector("#about_sales")
const about_contest = document.querySelector("#about_contest")
const about_tasks = document.querySelector("#about_tasks")
const about_p2p = document.querySelector("#about_p2p")
const black_list = document.querySelector("#black_list")
const about_barter = document.querySelector("#about_barter")
const about_things = document.querySelector("#about_things")
const about_crowdfunding = document.querySelector("#about_crowdfunding")

// inputs 
const textArea = document.querySelector("#editor")
const boldButton = document.getElementById('boldButton');
const italicButton = document.getElementById('italicButton');
const linkButton = document.getElementById('linkButton');

const quill = new Quill('#editor', {
    theme: "snow",
    placeholder: 'Введите текст...',
    readOnly: false,
    modules: {
        toolbar: [
            ['bold', 'italic'],
            ['link', 'image', 'video'],
        ]
    }
});

textArea.addEventListener('input', function () {
});

boldButton.addEventListener('click', () => {
    quill.format('bold', true);
    boldButton.classList.toggle("bg-gray-100")

});

italicButton.addEventListener('click', () => {
    quill.format('italic', true);
    italicButton.classList.toggle("bg-gray-100")
});

linkButton.addEventListener('click', () => {
    let url = link_inp.value
    if (url) {

        quill.format('link', url);
    }
});





