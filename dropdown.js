const block = document.querySelector('.mains');
const block2 = document.querySelector('.mains2');
const block3 = document.querySelector('.mains3');
const block4 = document.querySelector('.mains4');
const block5 = document.querySelector('.mains5');
const block6 = document.querySelector('.mains6');
const block7 = document.querySelector('.mains7');
const block8 = document.querySelector('.mains8');
const block9 = document.querySelector('.mains9');
const block10 = document.querySelector('.mains10');
const block11 = document.querySelector('.mains11');
const block12 = document.querySelector('.mains12');
const activeImg = document.querySelector(".image-1")
const activeImg2 = document.querySelector(".image-2")
const activeImg3 = document.querySelector(".image-3")
const activeImg4 = document.querySelector(".image-4")
const activeImg5 = document.querySelector(".image-5")
const activeImg6 = document.querySelector(".image-6")
const activeImg7 = document.querySelector(".image-7")
const activeImg8 = document.querySelector(".image-8")
const activeImg9 = document.querySelector(".image-9")
const activeImg10 = document.querySelector(".image-10")
const activeImg11 = document.querySelector(".image-11")
const activeImg12 = document.querySelector(".image-12")
const topBar = document.querySelector("#topBar")


const lists = document.querySelector('#lists')
const lists2 = document.querySelector('#lists2')
const lists3 = document.querySelector('#lists3')
const blockList = document.querySelector('#blocks_list')

// sub menu
const modalTrigger1 = document.querySelector('#icons_block1');
const modalTrigger2 = document.querySelector('#icons_block2');
const modalTrigger3 = document.querySelector('#icons_block3');
const modalTrigger4 = document.querySelector('#icons_block4');
const modalTrigger5 = document.querySelector('#icons_block5');
const modalTrigger6 = document.querySelector('#icons_block6');
const modalTrigger7 = document.querySelector('#icons_block7');
const modalTrigger8 = document.querySelector('#icons_block8');
const modalTrigger9 = document.querySelector('#icons_block9');
const modalTrigger10 = document.querySelector('#icons_block10');
const modalTrigger11 = document.querySelector('#icons_block11');
const modalTrigger12 = document.querySelector('#icons_block12');

const modal = document.querySelector('#modal_sub');
const modalClose = document.querySelector('#modal-closeSub');

const modalCahOpen = document.querySelector('#modal-cash');
const modalCash = document.querySelector('#staticModals');
const modalCashClose = document.querySelector('#close_Modal');
const modalCashSubmit = document.querySelector('#close_Submit');



const myClass = document.querySelector(".my-class")

const dropdown = document.querySelector('.drop_list');
const arrow = document.querySelector('#icons1');
const arrow1 = document.querySelector('#icons2');
const arrow2 = document.querySelector('#icons3');
const arrow4 = document.querySelector('#icons4');
const arrow5 = document.querySelector('#icons5');
const arrow6 = document.querySelector('#icons6');
const arrow7 = document.querySelector('#icons7');
const arrow8 = document.querySelector('#icons8');
const arrow9 = document.querySelector('#icons9');
const arrow10 = document.querySelector('#icons10');
const arrow11 = document.querySelector('#icons11');
const arrow12 = document.querySelector('#icons12');

// select option start
const select = document.querySelector('.custom-select');
const select1 = document.querySelector('.custom_select');
const select2 = document.querySelector('.custom_selected');


const optionsContainer = document.querySelector('.custom-options');
const optionsContainer1 = document.querySelector('.custom-options_1');
const optionsContainer2 = document.querySelector('.custom-options_2');


const optionsList = document.querySelectorAll('.custom-option');
const optionsList1 = document.querySelectorAll('.custom-option_1');
const optionsList2 = document.querySelectorAll('.custom-option_2');
const span1 = document.querySelector("#spaner")
const span2 = document.querySelector("#spaner1")

const listParent = document.querySelector('#list_subMenu')

const open_menuList = document.querySelector(".animated-block")

const open_menu = document.querySelector("#open_menu")


// authorization dropdown

const userAuth1 = document.querySelector("#userAuth1")
const userAuth2 = document.querySelector("#userAuth2")
const btnLink1 = document.querySelector("#startBTN")
const btnLink2 = document.querySelector("#loginBTN")
const authDropDown = document.querySelector("#userDropdown")
const closeDrop = document.querySelector("#closeDrop")
const section = document.querySelector("#section-1")
const topbar = document.querySelector("#topBar")
const header = document.querySelector("#header")

userAuth1.addEventListener("click", () => {
    btnLink1.classList.remove("hidden")
    authDropDown.classList.remove("hidden")
    btnLink2.classList.add("hidden")

})

userAuth2.addEventListener("click", () => {
    btnLink2.classList.remove("hidden")
    authDropDown.classList.remove("hidden")
    btnLink1.classList.add("hidden")
})

closeDrop.addEventListener('click', () => {
    btnLink1.classList.add("hidden")
    btnLink2.classList.add("hidden")
    authDropDown.classList.add("hidden")
})

window.addEventListener("click", (event) => {
    if (event.target == section) {
        authDropDown.classList.add("hidden");
        btnLink1.classList.add("hidden")
        btnLink2.classList.add("hidden")
    }
    if (event.target == topbar) {
        authDropDown.classList.add("hidden");
        btnLink1.classList.add("hidden")
        btnLink2.classList.add("hidden")
    }
    if (event.target == header) {
        authDropDown.classList.add("hidden");
        btnLink1.classList.add("hidden")
        btnLink2.classList.add("hidden")
    }
});



// array
const category = [
    "Грузоперевозки",
    "Фото, видео, аудио",
    "Свадьба и торжества",
    "Все для красоты",
    "Врачи",
    "IT-фрилансеры",
    "Ремонт и стройка",
    "Для авто",
    "Бухгалтеры и юристы",
    "Ветеринары",
    "Автоконструкторы",
    "Домашний персонал",
    "Уборка"
]


// list sub menu
const links = [
    { href: '#', text: 'Грузоперевозки' },
    { href: '#', text: 'Фото, видео, аудио' },
    { href: '#', text: 'Свадьба и торжества' },
    { href: '#', text: 'Все для красоты' },
    { href: '#', text: 'Врачи' },
    { href: '#', text: 'IT-фрилансеры' },
    { href: '#', text: 'Ремонт и стройка' },
    { href: '#', text: 'Для авто' },
    { href: '#', text: 'Бухгалтеры и юристы' },
    { href: '#', text: 'Ветеринары' },
    { href: '#', text: 'Автоконструкторы' },
    { href: '#', text: 'Домашний персонал' },
    { href: '#', text: 'Уборка' }

];

const categories = [
    { sum: '342', text: 'Грузоперевозки' },
    { sum: '121', text: 'Фото, видео, аудио' },
    { sum: '546', text: 'Свадьба и торжества' },
    { sum: '767', text: 'Все для красоты' },
    { sum: '34', text: 'Врачи' },
    { sum: '34', text: 'IT-фрилансеры' },
    { sum: '23', text: 'Ремонт и стройка' },
    { sum: '212', text: 'Для авто' },
    { sum: '76', text: 'Бухгалтеры и юристы' },
    { sum: '787', text: 'Ветеринары' },
    { sum: '97', text: 'Автоконструкторы' },
    { sum: '474', text: 'Домашний персонал' },
    { sum: '23', text: 'Уборка' }
];


const listItems = categories.map(link => {
    const listItem = document.createElement('li');

    const linkElement = document.createElement('span');
    const dropdownBtn = document.createElement('button');
    dropdownBtn.classList.add('dropdown-btn');
    dropdownBtn.textContent = '▼';

    const dropdownMenu = document.createElement('ul');
    dropdownMenu.classList.add('dropdown-menu');
    dropdownMenu.classList.add('hidden');

    categories.forEach(dropdownItem => {
        const dropdownListItem = document.createElement('li');
        const linkElements = document.createElement('span');
        dropdownListItem.classList.add('dropdown-li');
        dropdownListItem.textContent = dropdownItem.text;
        linkElements.textContent = dropdownItem.sum;
        dropdownListItem.appendChild(linkElements);
        dropdownMenu.appendChild(dropdownListItem);
    });

    linkElement.textContent = link.sum;
    listItem.textContent = link.text;

    listItem.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
        dropdownBtn.classList.toggle("rotate-180")
    });

    listItem.classList.add('sub-class');
    linkElement.appendChild(dropdownBtn);
    listItem.appendChild(dropdownMenu);
    listItem.appendChild(linkElement);

    return listItem;
});

// cash modal
modalCahOpen.addEventListener('click', function () {
    modalCash.classList.remove('hidden');
    modalCash.classList.add('flex');
    document.body.style.overflow = 'hidden';
});

modalCashClose.addEventListener('click', function () {
    modalCash.classList.remove('flex');
    modalCash.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

modalCashSubmit.addEventListener('click', function () {
    modalCash.classList.remove('flex');
    modalCash.classList.add('hidden');
    document.body.style.overflow = 'auto';
});
listItems.forEach(li => listParent.appendChild(li));

// 1
optionsList[0].classList.add('text-black');
optionsList1[0].classList.add('text-black');
optionsList2[0].classList.add('text-black');


select.addEventListener('click', function () {
    optionsContainer.classList.toggle('hidden');
    select.querySelector('img').classList.toggle('rotate-180');
});


// modal sub menu
modalTrigger1.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add("flex")
    document.body.style.overflow = 'hidden';
});
modalTrigger2.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add("flex")
    document.body.style.overflow = 'hidden';
});
modalTrigger3.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add("flex")
    document.body.style.overflow = 'hidden';
});
modalTrigger4.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add("flex")
    document.body.style.overflow = 'hidden';
});
modalTrigger5.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add("flex")
    document.body.style.overflow = 'hidden';
});
modalTrigger6.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add("flex")
    document.body.style.overflow = 'hidden';
});
modalTrigger7.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add("flex")
    document.body.style.overflow = 'hidden';
});
modalTrigger8.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add("flex")
    document.body.style.overflow = 'hidden';
});
modalTrigger9.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add("flex")
    document.body.style.overflow = 'hidden';
});
modalTrigger10.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add("flex")
    document.body.style.overflow = 'hidden';
});
modalTrigger11.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add("flex")
    document.body.style.overflow = 'hidden';
});
modalTrigger12.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add("flex")
    document.body.style.overflow = 'hidden';
});
modalClose.addEventListener('click', function () {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});



optionsList.forEach(option => {
    option.addEventListener('click', function () {
        optionsList.forEach(option => {
            option.classList.remove('bg-[#F9D914]');
            option.classList.remove('text-black');
        });
        this.classList.add('bg-[#F9D914]');
        this.classList.add('text-black');
        console.log(select.querySelector('span').textContent)
        select.querySelector('span').textContent = option.textContent;
        optionsContainer.classList.add('hidden');
    });
});

optionsContainer.addEventListener('mouseleave', function () {
    optionsContainer.classList.add('hidden');
    select.querySelector('img').classList.toggle('rotate-180');
});

// 2
select1.addEventListener('click', function () {
    optionsContainer1.classList.toggle('hidden');
    select1.querySelector('img').classList.toggle('rotate-180');
});

optionsList1.forEach(option => {
    option.addEventListener('click', function () {
        optionsList1.forEach(option => {
            option.classList.remove('bg-[#F9D914]');
            option.classList.remove('text-black');
        });
        this.classList.add('bg-[#F9D914]');
        this.classList.add('text-black');
        span1.textContent = option.textContent;
        optionsContainer1.classList.add('hidden');
    });
});

optionsContainer1.addEventListener('mouseleave', function () {
    optionsContainer1.classList.add('hidden');
    select1.getElementsByTagName('img').classList.toggle('rotate-180');
});

// 3
select2.addEventListener('click', function () {
    optionsContainer2.classList.toggle('hidden');
    select2.querySelector('img').classList.toggle('rotate-180');
});

optionsList2.forEach(option => {
    option.addEventListener('click', function () {
        optionsList2.forEach(option => {
            option.classList.remove('bg-[#F9D914]');
            option.classList.remove('text-black');
        });
        this.classList.add('bg-[#F9D914]');
        this.classList.add('text-black');
        span2.textContent = option.textContent;
        optionsContainer2.classList.add('hidden');
    });
});

optionsContainer2.addEventListener('mouseleave', function () {
    optionsContainer2.classList.add('hidden');
    select2.getElementsByTagName('img').classList.toggle('rotate-180');
});
// select option end



const menus = categories.map(item => {
    const li = document.createElement('li');
    li.textContent = item.text;
    const spanElement = document.createElement('span');
    const spanOneElement = document.createElement('span');
    spanOneElement.textContent = ">"
    spanOneElement.classList.add("strelka")
    spanElement.textContent = item.sum;
    li.classList.add("my-class")
    spanElement.appendChild(spanOneElement)
    li.appendChild(spanElement);



    return li;
});



menus.forEach(li => lists.appendChild(li));


const menus2 = categories.map(item => {
    const li = document.createElement('li');
    li.textContent = item.text;
    const spanElement = document.createElement('span');
    const spanOneElement = document.createElement('span');
    spanOneElement.textContent = ">"
    spanOneElement.classList.add("strelka")
    spanElement.textContent = item.sum;
    li.classList.add("my-class")
    spanElement.appendChild(spanOneElement)
    li.appendChild(spanElement);
    return li;
});
menus2.forEach(li => lists2.appendChild(li));


const menus3 = categories.map(item => {
    const li = document.createElement('li');
    li.textContent = item.text;
    const spanElement = document.createElement('span');
    spanElement.textContent = item.sum;
    li.classList.add("my-class")
    li.appendChild(spanElement);
    return li;
});
menus3.forEach(li => lists3.appendChild(li));

//
lists.addEventListener('mouseenter', () => {
    lists2.classList.remove('hidden');
}
)
menus.forEach(li => {
    li.addEventListener("mouseenter", () => {
        lists.forEach(cat => cat.classList.remove('active'));
        li.classList.add('bg-[#29ACEF]');
    })
})

blockList.addEventListener('mouseleave', () => {
    lists2.classList.add('hidden');
}
)
lists2.addEventListener('mouseenter', () => {
    lists3.classList.remove('hidden');
}
)
lists3.addEventListener('mouseenter', () => {
    lists3.classList.remove('hidden');
}
)
lists2.addEventListener('mouseleave', () => {
    lists3.classList.add('hidden');
}
)


// 1
block.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
    arrow.classList.remove('hidden');
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
    arrow4.classList.add('hidden');
    arrow5.classList.add('hidden');
    arrow6.classList.add('hidden');
    arrow7.classList.add('hidden');
    arrow8.classList.add('hidden');
    arrow9.classList.add('hidden');
    arrow10.classList.add('hidden');
    arrow11.classList.add('hidden');
    arrow12.classList.add('hidden');
    activeImg.classList.add('activeImage')
    activeImg.classList.remove("image-1")
    activeImg2.classList.add("image-2")
    activeImg3.classList.add("image-3")
    activeImg4.classList.add("image-4")
    activeImg5.classList.add("image-5")
    activeImg6.classList.add("image-6")
    activeImg7.classList.add("image-7")
    activeImg8.classList.add("image-8")
    activeImg9.classList.add("image-9")
    activeImg10.classList.add("image-10")
    activeImg11.classList.add("image-11")
    activeImg12.classList.add("image-12")
    activeImg2.classList.remove('activeImage2')
    activeImg3.classList.remove('activeImage3')
    activeImg4.classList.remove('activeImage4')
    activeImg5.classList.remove('activeImage5')
    activeImg6.classList.remove('activeImage6')
    activeImg7.classList.remove('activeImage7')
    activeImg8.classList.remove('activeImage8')
    activeImg9.classList.remove('activeImage9')
    activeImg10.classList.remove('activeImage10')
    activeImg11.classList.remove('activeImage11')
    activeImg12.classList.remove('activeImage12')
    authDropDown.classList.add("hidden");
    btnLink1.classList.add("hidden")
    btnLink2.classList.add("hidden")
});

// 2
block2.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
    arrow1.classList.remove('hidden');
    arrow.classList.add('hidden');
    arrow2.classList.add('hidden');
    arrow4.classList.add('hidden');
    arrow5.classList.add('hidden');
    arrow6.classList.add('hidden');
    arrow7.classList.add('hidden');
    arrow8.classList.add('hidden');
    arrow9.classList.add('hidden');
    arrow10.classList.add('hidden');
    arrow11.classList.add('hidden');
    arrow12.classList.add('hidden');
    activeImg.classList.remove('activeImage')
    activeImg.classList.add("image-1")
    activeImg2.classList.remove("image-2")
    activeImg3.classList.add("image-3")
    activeImg4.classList.add("image-4")
    activeImg5.classList.add("image-5")
    activeImg6.classList.add("image-6")
    activeImg7.classList.add("image-7")
    activeImg8.classList.add("image-8")
    activeImg9.classList.add("image-9")
    activeImg10.classList.add("image-10")
    activeImg11.classList.add("image-11")
    activeImg12.classList.add("image-12")
    activeImg2.classList.add('activeImage2')
    activeImg3.classList.remove('activeImage3')
    activeImg4.classList.remove('activeImage4')
    activeImg5.classList.remove('activeImage5')
    activeImg6.classList.remove('activeImage6')
    activeImg7.classList.remove('activeImage7')
    activeImg8.classList.remove('activeImage8')
    activeImg9.classList.remove('activeImage9')
    activeImg10.classList.remove('activeImage10')
    activeImg11.classList.remove('activeImage11')
    activeImg12.classList.remove('activeImage12')
    authDropDown.classList.add("hidden");
    btnLink1.classList.add("hidden")
    btnLink2.classList.add("hidden")
});

// 3
block3.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
    arrow2.classList.remove('hidden');
    arrow.classList.add('hidden');
    arrow1.classList.add('hidden');
    arrow4.classList.add('hidden');
    arrow5.classList.add('hidden');
    arrow6.classList.add('hidden');
    arrow7.classList.add('hidden');
    arrow8.classList.add('hidden');
    arrow9.classList.add('hidden');
    arrow10.classList.add('hidden');
    arrow11.classList.add('hidden');
    arrow12.classList.add('hidden');
    activeImg.classList.remove('activeImage')
    activeImg.classList.add("image-1")
    activeImg2.classList.add("image-2")
    activeImg3.classList.remove("image-3")
    activeImg4.classList.add("image-4")
    activeImg5.classList.add("image-5")
    activeImg6.classList.add("image-6")
    activeImg7.classList.add("image-7")
    activeImg8.classList.add("image-8")
    activeImg9.classList.add("image-9")
    activeImg10.classList.add("image-10")
    activeImg11.classList.add("image-11")
    activeImg12.classList.add("image-12")
    activeImg2.classList.remove('activeImage2')
    activeImg3.classList.add('activeImage3')
    activeImg4.classList.remove('activeImage4')
    activeImg5.classList.remove('activeImage5')
    activeImg6.classList.remove('activeImage6')
    activeImg7.classList.remove('activeImage7')
    activeImg8.classList.remove('activeImage8')
    activeImg9.classList.remove('activeImage9')
    activeImg10.classList.remove('activeImage10')
    activeImg11.classList.remove('activeImage11')
    activeImg12.classList.remove('activeImage12')
    authDropDown.classList.add("hidden");
    btnLink1.classList.add("hidden")
    btnLink2.classList.add("hidden")
});
;
// 4
block4.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
    arrow4.classList.remove('hidden');
    arrow.classList.add('hidden');
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
    arrow5.classList.add('hidden');
    arrow6.classList.add('hidden');
    arrow7.classList.add('hidden');
    arrow8.classList.add('hidden');
    arrow9.classList.add('hidden');
    arrow10.classList.add('hidden');
    arrow11.classList.add('hidden');
    arrow12.classList.add('hidden');
    activeImg.classList.remove('activeImage')
    activeImg.classList.add("image-1")
    activeImg2.classList.add("image-2")
    activeImg3.classList.add("image-3")
    activeImg4.classList.remove("image-4")
    activeImg5.classList.add("image-5")
    activeImg6.classList.add("image-6")
    activeImg7.classList.add("image-7")
    activeImg8.classList.add("image-8")
    activeImg9.classList.add("image-9")
    activeImg10.classList.add("image-10")
    activeImg11.classList.add("image-11")
    activeImg12.classList.add("image-12")
    activeImg2.classList.remove('activeImage2')
    activeImg3.classList.remove('activeImage3')
    activeImg4.classList.add('activeImage4')
    activeImg5.classList.remove('activeImage5')
    activeImg6.classList.remove('activeImage6')
    activeImg7.classList.remove('activeImage7')
    activeImg8.classList.remove('activeImage8')
    activeImg9.classList.remove('activeImage9')
    activeImg10.classList.remove('activeImage10')
    activeImg11.classList.remove('activeImage11')
    activeImg12.classList.remove('activeImage12')
    authDropDown.classList.add("hidden");
    btnLink1.classList.add("hidden")
    btnLink2.classList.add("hidden")
});

// 5
block5.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
    arrow5.classList.remove('hidden');
    arrow.classList.add('hidden');
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
    arrow4.classList.add('hidden');
    arrow6.classList.add('hidden');
    arrow7.classList.add('hidden');
    arrow8.classList.add('hidden');
    arrow9.classList.add('hidden');
    arrow10.classList.add('hidden');
    arrow11.classList.add('hidden');
    arrow12.classList.add('hidden');
    activeImg.classList.remove('activeImage')
    activeImg.classList.add("image-1")
    activeImg2.classList.add("image-2")
    activeImg3.classList.add("image-3")
    activeImg4.classList.add("image-4")
    activeImg5.classList.remove("image-5")
    activeImg6.classList.add("image-6")
    activeImg7.classList.add("image-7")
    activeImg8.classList.add("image-8")
    activeImg9.classList.add("image-9")
    activeImg10.classList.add("image-10")
    activeImg11.classList.add("image-11")
    activeImg12.classList.add("image-12")
    activeImg2.classList.remove('activeImage2')
    activeImg3.classList.remove('activeImage3')
    activeImg4.classList.remove('activeImage4')
    activeImg5.classList.add('activeImage5')
    activeImg6.classList.remove('activeImage6')
    activeImg7.classList.remove('activeImage7')
    activeImg8.classList.remove('activeImage8')
    activeImg9.classList.remove('activeImage9')
    activeImg10.classList.remove('activeImage10')
    activeImg11.classList.remove('activeImage11')
    activeImg12.classList.remove('activeImage12')
    authDropDown.classList.add("hidden");
    btnLink1.classList.add("hidden")
    btnLink2.classList.add("hidden")
});

// 6
block6.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
    arrow6.classList.remove('hidden');
    arrow.classList.add('hidden');
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
    arrow4.classList.add('hidden');
    arrow5.classList.add('hidden');
    arrow7.classList.add('hidden');
    arrow8.classList.add('hidden');
    arrow9.classList.add('hidden');
    arrow10.classList.add('hidden');
    arrow11.classList.add('hidden');
    arrow12.classList.add('hidden');
    activeImg.classList.remove('activeImage')
    activeImg.classList.add("image-1")
    activeImg2.classList.add("image-2")
    activeImg3.classList.add("image-3")
    activeImg4.classList.add("image-4")
    activeImg5.classList.add("image-5")
    activeImg6.classList.remove("image-6")
    activeImg7.classList.add("image-7")
    activeImg8.classList.add("image-8")
    activeImg9.classList.add("image-9")
    activeImg10.classList.add("image-10")
    activeImg11.classList.add("image-11")
    activeImg12.classList.add("image-12")
    activeImg2.classList.remove('activeImage2')
    activeImg3.classList.remove('activeImage3')
    activeImg4.classList.remove('activeImage4')
    activeImg5.classList.remove('activeImage5')
    activeImg6.classList.add('activeImage6')
    activeImg7.classList.remove('activeImage7')
    activeImg8.classList.remove('activeImage8')
    activeImg9.classList.remove('activeImage9')
    activeImg10.classList.remove('activeImage10')
    activeImg11.classList.remove('activeImage11')
    activeImg12.classList.remove('activeImage12')
    authDropDown.classList.add("hidden");
    btnLink1.classList.add("hidden")
    btnLink2.classList.add("hidden")
});

// 7
block7.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
    arrow7.classList.remove('hidden');
    arrow.classList.add('hidden');
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
    arrow4.classList.add('hidden');
    arrow5.classList.add('hidden');
    arrow6.classList.add('hidden');
    arrow8.classList.add('hidden');
    arrow9.classList.add('hidden');
    arrow10.classList.add('hidden');
    arrow11.classList.add('hidden');
    arrow12.classList.add('hidden');
    activeImg.classList.remove('activeImage')
    activeImg.classList.add("image-1")
    activeImg2.classList.add("image-2")
    activeImg3.classList.add("image-3")
    activeImg4.classList.add("image-4")
    activeImg5.classList.add("image-5")
    activeImg6.classList.add("image-6")
    activeImg7.classList.remove("image-7")
    activeImg8.classList.add("image-8")
    activeImg9.classList.add("image-9")
    activeImg10.classList.add("image-10")
    activeImg11.classList.add("image-11")
    activeImg12.classList.add("image-12")
    activeImg2.classList.remove('activeImage2')
    activeImg3.classList.remove('activeImage3')
    activeImg4.classList.remove('activeImage4')
    activeImg5.classList.remove('activeImage5')
    activeImg6.classList.remove('activeImage6')
    activeImg7.classList.add('activeImage7')
    activeImg8.classList.remove('activeImage8')
    activeImg9.classList.remove('activeImage9')
    activeImg10.classList.remove('activeImage10')
    activeImg11.classList.remove('activeImage11')
    activeImg12.classList.remove('activeImage12')
    authDropDown.classList.add("hidden");
    btnLink1.classList.add("hidden")
    btnLink2.classList.add("hidden")
});

// 8
block8.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
    arrow8.classList.remove('hidden');
    arrow.classList.add('hidden');
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
    arrow4.classList.add('hidden');
    arrow5.classList.add('hidden');
    arrow6.classList.add('hidden');
    arrow7.classList.add('hidden');
    arrow9.classList.add('hidden');
    arrow10.classList.add('hidden');
    arrow11.classList.add('hidden');
    arrow12.classList.add('hidden');
    activeImg.classList.remove('activeImage')
    activeImg.classList.add("image-1")
    activeImg2.classList.add("image-2")
    activeImg3.classList.add("image-3")
    activeImg4.classList.add("image-4")
    activeImg5.classList.add("image-5")
    activeImg6.classList.add("image-6")
    activeImg7.classList.add("image-7")
    activeImg8.classList.remove("image-8")
    activeImg9.classList.add("image-9")
    activeImg10.classList.add("image-10")
    activeImg11.classList.add("image-11")
    activeImg12.classList.add("image-12")
    activeImg2.classList.remove('activeImage2')
    activeImg3.classList.remove('activeImage3')
    activeImg4.classList.remove('activeImage4')
    activeImg5.classList.remove('activeImage5')
    activeImg6.classList.remove('activeImage6')
    activeImg7.classList.remove('activeImage7')
    activeImg8.classList.add('activeImage8')
    activeImg9.classList.remove('activeImage9')
    activeImg10.classList.remove('activeImage10')
    activeImg11.classList.remove('activeImage11')
    activeImg12.classList.remove('activeImage12')
    authDropDown.classList.add("hidden");
    btnLink1.classList.add("hidden")
    btnLink2.classList.add("hidden")
});

// 9
block9.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
    arrow9.classList.remove('hidden');
    arrow.classList.add('hidden');
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
    arrow4.classList.add('hidden');
    arrow5.classList.add('hidden');
    arrow6.classList.add('hidden');
    arrow7.classList.add('hidden');
    arrow8.classList.add('hidden');
    arrow10.classList.add('hidden');
    arrow11.classList.add('hidden');
    arrow12.classList.add('hidden');
    activeImg.classList.remove('activeImage')
    activeImg.classList.add("image-1")
    activeImg2.classList.add("image-2")
    activeImg3.classList.add("image-3")
    activeImg4.classList.add("image-4")
    activeImg5.classList.add("image-5")
    activeImg6.classList.add("image-6")
    activeImg7.classList.add("image-7")
    activeImg8.classList.add("image-8")
    activeImg9.classList.remove("image-9")
    activeImg10.classList.add("image-10")
    activeImg11.classList.add("image-11")
    activeImg12.classList.add("image-12")
    activeImg2.classList.remove('activeImage2')
    activeImg3.classList.remove('activeImage3')
    activeImg4.classList.remove('activeImage4')
    activeImg5.classList.remove('activeImage5')
    activeImg6.classList.remove('activeImage6')
    activeImg7.classList.remove('activeImage7')
    activeImg8.classList.remove('activeImage8')
    activeImg9.classList.add('activeImage9')
    activeImg10.classList.remove('activeImage10')
    activeImg11.classList.remove('activeImage11')
    activeImg12.classList.remove('activeImage12')
    authDropDown.classList.add("hidden");
    btnLink1.classList.add("hidden")
    btnLink2.classList.add("hidden")
});

// 10
block10.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
    arrow10.classList.remove('hidden');
    arrow.classList.add('hidden');
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
    arrow4.classList.add('hidden');
    arrow5.classList.add('hidden');
    arrow6.classList.add('hidden');
    arrow7.classList.add('hidden');
    arrow8.classList.add('hidden');
    arrow9.classList.add('hidden');
    arrow11.classList.add('hidden');
    arrow12.classList.add('hidden');
    activeImg.classList.remove('activeImage')
    activeImg.classList.add("image-1")
    activeImg2.classList.add("image-2")
    activeImg3.classList.add("image-3")
    activeImg4.classList.add("image-4")
    activeImg5.classList.add("image-5")
    activeImg6.classList.add("image-6")
    activeImg7.classList.add("image-7")
    activeImg8.classList.add("image-8")
    activeImg9.classList.add("image-9")
    activeImg10.classList.remove("image-10")
    activeImg11.classList.add("image-11")
    activeImg12.classList.add("image-12")
    activeImg2.classList.remove('activeImage2')
    activeImg3.classList.remove('activeImage3')
    activeImg4.classList.remove('activeImage4')
    activeImg5.classList.remove('activeImage5')
    activeImg6.classList.remove('activeImage6')
    activeImg7.classList.remove('activeImage7')
    activeImg8.classList.remove('activeImage8')
    activeImg9.classList.remove('activeImage9')
    activeImg10.classList.add('activeImage10')
    activeImg11.classList.remove('activeImage11')
    activeImg12.classList.remove('activeImage12')
    authDropDown.classList.add("hidden");
    btnLink1.classList.add("hidden")
    btnLink2.classList.add("hidden")
});

// 11
block11.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
    arrow11.classList.remove('hidden');
    arrow.classList.add('hidden');
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
    arrow4.classList.add('hidden');
    arrow5.classList.add('hidden');
    arrow6.classList.add('hidden');
    arrow7.classList.add('hidden');
    arrow8.classList.add('hidden');
    arrow9.classList.add('hidden');
    arrow10.classList.add('hidden');
    arrow12.classList.add('hidden');
    activeImg.classList.remove('activeImage')
    activeImg.classList.add("image-1")
    activeImg2.classList.add("image-2")
    activeImg3.classList.add("image-3")
    activeImg4.classList.add("image-4")
    activeImg5.classList.add("image-5")
    activeImg6.classList.add("image-6")
    activeImg7.classList.add("image-7")
    activeImg8.classList.add("image-8")
    activeImg9.classList.add("image-9")
    activeImg10.classList.add("image-10")
    activeImg11.classList.remove("image-11")
    activeImg12.classList.add("image-12")
    activeImg2.classList.remove('activeImage2')
    activeImg3.classList.remove('activeImage3')
    activeImg4.classList.remove('activeImage4')
    activeImg5.classList.remove('activeImage5')
    activeImg6.classList.remove('activeImage6')
    activeImg7.classList.remove('activeImage7')
    activeImg8.classList.remove('activeImage8')
    activeImg9.classList.remove('activeImage9')
    activeImg10.classList.remove('activeImage10')
    activeImg11.classList.add('activeImage11')
    activeImg12.classList.remove('activeImage12')
    authDropDown.classList.add("hidden");
    btnLink1.classList.add("hidden")
    btnLink2.classList.add("hidden")
});

// 12
block12.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
    arrow12.classList.remove('hidden');
    arrow.classList.add('hidden');
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
    arrow4.classList.add('hidden');
    arrow5.classList.add('hidden');
    arrow6.classList.add('hidden');
    arrow7.classList.add('hidden');
    arrow8.classList.add('hidden');
    arrow9.classList.add('hidden');
    arrow10.classList.add('hidden');
    arrow11.classList.add('hidden');
    activeImg.classList.remove('activeImage')
    activeImg.classList.add("image-1")
    activeImg2.classList.add("image-2")
    activeImg3.classList.add("image-3")
    activeImg4.classList.add("image-4")
    activeImg5.classList.add("image-5")
    activeImg6.classList.add("image-6")
    activeImg7.classList.add("image-7")
    activeImg8.classList.add("image-8")
    activeImg9.classList.add("image-9")
    activeImg10.classList.add("image-10")
    activeImg11.classList.add("image-11")
    activeImg12.classList.remove("image-12")
    activeImg2.classList.remove('activeImage2')
    activeImg3.classList.remove('activeImage3')
    activeImg4.classList.remove('activeImage4')
    activeImg5.classList.remove('activeImage5')
    activeImg6.classList.remove('activeImage6')
    activeImg7.classList.remove('activeImage7')
    activeImg8.classList.remove('activeImage8')
    activeImg9.classList.remove('activeImage9')
    activeImg10.classList.remove('activeImage10')
    activeImg11.classList.remove('activeImage11')
    activeImg12.classList.add('activeImage12')
    authDropDown.classList.add("hidden");
    btnLink1.classList.add("hidden")
    btnLink2.classList.add("hidden")
});


// dropdown
dropdown.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');
}
)
dropdown.addEventListener('mouseleave', () => {
    dropdown.classList.add('hidden');
    arrow.classList.add('hidden');
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
    arrow4.classList.add('hidden');
    arrow5.classList.add('hidden');
    arrow6.classList.add('hidden');
    arrow7.classList.add('hidden');
    arrow8.classList.add('hidden');
    arrow9.classList.add('hidden');
    arrow10.classList.add('hidden');
    arrow11.classList.add('hidden');
    arrow12.classList.add('hidden');
    activeImg.classList.remove('activeImage')
    activeImg.classList.add("image-1")
    activeImg2.classList.remove('activeImage2')
    activeImg2.classList.add("image-2")
    activeImg3.classList.remove('activeImage3')
    activeImg3.classList.add("image-3")
    activeImg4.classList.remove('activeImage4')
    activeImg4.classList.add("image-4")
    activeImg5.classList.remove('activeImage5')
    activeImg5.classList.add("image-5")
    activeImg6.classList.remove('activeImage6')
    activeImg6.classList.add("image-6")
    activeImg7.classList.remove('activeImage7')
    activeImg7.classList.add("image-7")
    activeImg8.classList.remove('activeImage8')
    activeImg8.classList.add("image-8")
    activeImg9.classList.remove('activeImage9')
    activeImg9.classList.add("image-9")
    activeImg10.classList.remove('activeImage10')
    activeImg10.classList.add("image-10")
    activeImg11.classList.remove('activeImage11')
    activeImg11.classList.add("image-11")
    activeImg12.classList.remove('activeImage12')
    activeImg12.classList.add("image-12")
}
)

topBar.addEventListener("mouseenter", () => {
    dropdown.classList.add('hidden');
    arrow.classList.add('hidden');
    arrow1.classList.add('hidden');
    arrow2.classList.add('hidden');
    arrow4.classList.add('hidden');
    arrow5.classList.add('hidden');
    arrow6.classList.add('hidden');
    arrow7.classList.add('hidden');
    arrow8.classList.add('hidden');
    arrow9.classList.add('hidden');
    arrow10.classList.add('hidden');
    arrow11.classList.add('hidden');
    arrow12.classList.add('hidden');
    activeImg.classList.remove('activeImage')
    activeImg.classList.add("image-1")
    activeImg2.classList.remove('activeImage2')
    activeImg2.classList.add("image-2")
    activeImg3.classList.remove('activeImage3')
    activeImg3.classList.add("image-3")
    activeImg4.classList.remove('activeImage4')
    activeImg4.classList.add("image-4")
    activeImg5.classList.remove('activeImage5')
    activeImg5.classList.add("image-5")
    activeImg6.classList.remove('activeImage6')
    activeImg6.classList.add("image-6")
    activeImg7.classList.remove('activeImage7')
    activeImg7.classList.add("image-7")
    activeImg8.classList.remove('activeImage8')
    activeImg8.classList.add("image-8")
    activeImg9.classList.remove('activeImage9')
    activeImg9.classList.add("image-9")
    activeImg10.classList.remove('activeImage10')
    activeImg10.classList.add("image-10")
    activeImg11.classList.remove('activeImage11')
    activeImg11.classList.add("image-11")
    activeImg12.classList.remove('activeImage12')
    activeImg12.classList.add("image-12")
})

// OPEn mobile menu
open_menu.addEventListener("click", () => {
    open_menuList.classList.toggle('hidden');
})