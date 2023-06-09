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
const textArea = document.querySelector("#myTextarea")

    // user_conf.addEventListener("click", () => {
    //     user_conf.classList.add("activate")
    // })
    ;

function executeCommand(command) {
    document.execCommand(command, true, null);
}

function saveFile() {
    var content = document.getElementById("editor").innerHTML;
    // Здесь можно добавить код для сохранения содержимого в файл или отправки на сервер
    console.log(content);
}