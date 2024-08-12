document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('profile').addEventListener('click', () => {
        document.getElementById('save').classList = 'p-4 border-b cursor-pointer hover:bg-gray-100 text-[#0875AE]'
        document.getElementById('balance').classList = 'p-4 border-b cursor-pointer hover:bg-gray-100 text-[#0875AE]'
        document.getElementById('profile').classList = 'p-4 border-b cursor-pointer bg-[#152041] text-white'
        document.getElementById('profileBlock').classList.remove('hidden')
        document.getElementById('balanceBlock').classList.add('hidden')
        document.getElementById('savesBlock').classList.add('hidden')
    })

    document.getElementById('save').addEventListener('click', () => {
        document.getElementById('profile').classList = 'p-4 border-b cursor-pointer hover:bg-gray-100 text-[#0875AE]'
        document.getElementById('balance').classList = 'p-4 border-b cursor-pointer hover:bg-gray-100 text-[#0875AE]'
        document.getElementById('save').classList = 'p-4 border-b cursor-pointer bg-[#152041] text-white'
        document.getElementById('profileBlock').classList.add('hidden')
        document.getElementById('balanceBlock').classList.add('hidden')
        document.getElementById('savesBlock').classList.remove('hidden')
    })

    document.getElementById('balance').addEventListener('click', () => {
        document.getElementById('save').classList = 'p-4 border-b cursor-pointer hover:bg-gray-100 text-[#0875AE]'
        document.getElementById('profile').classList = 'p-4 border-b cursor-pointer hover:bg-gray-100 text-[#0875AE]'
        document.getElementById('balance').classList = 'p-4 border-b cursor-pointer bg-[#152041] text-white'
        document.getElementById('balanceBlock').classList.remove('hidden')
        document.getElementById('profileBlock').classList.add('hidden')
        document.getElementById('savesBlock').classList.add('hidden')
    })

    // кастомный select для мобильного
    const select = document.getElementById("mobil");
    const selected = document.getElementById("mobil_select");
    const items = document.getElementById("mobil_sel");
    const options = items.querySelectorAll("div");

    selected.addEventListener("click", function () {
        items.classList.toggle("hidden");
        selected.classList.toggle("select-arrow-active");
    });

    options.forEach(option => {
        option.addEventListener("click", function () {
            document.getElementById('mobil_text').innerHTML = this.innerHTML;
            items.classList.add("hidden");
            selected.classList.remove("select-arrow-active");
        });
    });

    document.addEventListener("click", function (e) {
        if (!select.contains(e.target)) {
            items.classList.add("hidden");
            selected.classList.remove("select-arrow-active");
        }
    });

    const select2 = document.getElementById("mobil2");
    const selected2 = document.getElementById("mobil2_select");
    const items2 = document.getElementById("mobil2_sel");
    const options2 = items2.querySelectorAll("div");

    selected2.addEventListener("click", function () {
        items2.classList.toggle("hidden");
        selected2.classList.toggle("select-arrow-active");
    });

    options2.forEach(option => {
        option.addEventListener("click", function () {
            document.getElementById('mob2_value').textContent = this.innerHTML;
            items2.classList.add("hidden");
            selected2.classList.remove("select-arrow-active");
        });
    });

    document.addEventListener("click", function (e) {
        if (!select2.contains(e.target)) {
            items2.classList.add("hidden");
            selected2.classList.remove("select-arrow-active");
        }
    });

    // Город
    const cityselect = document.getElementById("city");
    const cityselected = document.getElementById("city_select");
    const cityitems = document.getElementById("city_sel");
    const cityoptions = cityitems.querySelectorAll("div");

    cityselected.addEventListener("click", function () {
        cityitems.classList.toggle("hidden");
        cityselected.classList.toggle("select-arrow-active");
    });

    cityoptions.forEach(option => {
        option.addEventListener("click", function () {
            document.getElementById('city_text').innerHTML = this.innerHTML;
            cityitems.classList.add("hidden");
            cityselected.classList.remove("select-arrow-active");
        });
    });

    document.addEventListener("click", function (e) {
        if (!cityselect.contains(e.target)) {
            cityitems.classList.add("hidden");
            cityselected.classList.remove("select-arrow-active");
        }
    });

    // Страна
    const countryselect = document.getElementById("country");
    const countryselected = document.getElementById("country_select");
    const countryitems = document.getElementById("country_sel");
    const countryoptions = countryitems.querySelectorAll("div");

    countryselected.addEventListener("click", function () {
        countryitems.classList.toggle("hidden");
        countryselected.classList.toggle("select-arrow-active");
    });

    countryoptions.forEach(option => {
        option.addEventListener("click", function () {
            document.getElementById('country_text').innerHTML = this.innerHTML;
            countryitems.classList.add("hidden");
            countryselected.classList.remove("select-arrow-active");
        });
    });

    document.addEventListener("click", function (e) {
        if (!countryselect.contains(e.target)) {
            countryitems.classList.add("hidden");
            countryselected.classList.remove("select-arrow-active");
        }
    });

    document.getElementById('btn_mob').addEventListener('click', () => {
        document.getElementById('mobaddblock').classList.add('hidden')
        document.getElementById('mob_addBlock').classList.remove('hidden')
        document.getElementById('mobil_add').classList.remove('hidden')
    })

    // Email
    const emailselect = document.getElementById("emial");
    const emailselected = document.getElementById("email_select");
    const emailitems = document.getElementById("email_sel");
    const emailoptions = emailitems.querySelectorAll("div");

    emailselected.addEventListener("click", function () {
        emailitems.classList.toggle("hidden");
        emailselected.classList.toggle("select-arrow-active");
    });

    emailoptions.forEach(option => {
        option.addEventListener("click", function () {
            document.getElementById('email_value').innerHTML = this.innerHTML;
            emailitems.classList.add("hidden");
            emailselected.classList.remove("select-arrow-active");
        });
    });

    document.addEventListener("click", function (e) {
        if (!emailselect.contains(e.target)) {
            emailitems.classList.add("hidden");
            emailselected.classList.remove("select-arrow-active");
        }
    });

    const email2select = document.getElementById("emial");
    const email2selected = document.getElementById("email2_select");
    const email2items = document.getElementById("email2_sel");
    const email2options = email2items.querySelectorAll("div");

    email2selected.addEventListener("click", function () {
        email2items.classList.toggle("hidden");
        email2selected.classList.toggle("select-arrow-active");
    });

    email2options.forEach(option => {
        option.addEventListener("click", function () {
            document.getElementById('email2_value').innerHTML = this.innerHTML;
            email2items.classList.add("hidden");
            email2selected.classList.remove("select-arrow-active");
        });
    });

    document.addEventListener("click", function (e) {
        if (!email2select.contains(e.target)) {
            email2items.classList.add("hidden");
            email2selected.classList.remove("select-arrow-active");
        }
    });

    document.getElementById('btn_email').addEventListener('click', () => {
        document.getElementById('mobaddblock2').classList.add('hidden')
        document.getElementById('addBlock_email').classList.remove('hidden')
        document.getElementById('email2').classList.remove('hidden')
    })

    // Site
    const siteselect = document.getElementById("site");
    const siteselected = document.getElementById("site_select");
    const siteitems = document.getElementById("site_sel");
    const siteoptions = siteitems.querySelectorAll("div");

    siteselected.addEventListener("click", function () {
        siteitems.classList.toggle("hidden");
        siteselected.classList.toggle("select-arrow-active");
    });

    siteoptions.forEach(option => {
        option.addEventListener("click", function () {
            document.getElementById('site_value').innerHTML = this.innerHTML;
            siteitems.classList.add("hidden");
            siteselected.classList.remove("select-arrow-active");
        });
    });

    document.addEventListener("click", function (e) {
        if (!siteselect.contains(e.target)) {
            siteitems.classList.add("hidden");
            siteselected.classList.remove("select-arrow-active");
        }
    });

    const site2select = document.getElementById("site2");
    const site2selected = document.getElementById("site2_select");
    const site2items = document.getElementById("site2_sel");
    const site2options = site2items.querySelectorAll("div");

    site2selected.addEventListener("click", function () {
        site2items.classList.toggle("hidden");
        site2selected.classList.toggle("select-arrow-active");
    });

    site2options.forEach(option => {
        option.addEventListener("click", function () {
            document.getElementById('site2_value').innerHTML = this.innerHTML;
            site2items.classList.add("hidden");
            site2selected.classList.remove("select-arrow-active");
        });
    });

    document.addEventListener("click", function (e) {
        if (!site2select.contains(e.target)) {
            site2items.classList.add("hidden");
            site2selected.classList.remove("select-arrow-active");
        }
    });

    document.getElementById('btn_site').addEventListener('click', () => {
        document.getElementById('mobaddsite2').classList.add('hidden')
        document.getElementById('addBlock_site').classList.remove('hidden')
    })

    // Социальная сеть
    const servisselect = document.getElementById("servis");
    const servisselected = document.getElementById("servis_select");
    const servisitems = document.getElementById("servis_sel");
    const servisoptions = servisitems.querySelectorAll("div");

    servisselected.addEventListener("click", function () {
        servisitems.classList.toggle("hidden");
        servisselected.classList.toggle("select-arrow-active");
    });

    servisoptions.forEach(option => {
        option.addEventListener("click", function () {
            document.getElementById('servis_value').innerHTML = this.innerHTML;
            servisitems.classList.add("hidden");
            servisselected.classList.remove("select-arrow-active");
        });
    });

    document.addEventListener("click", function (e) {
        if (!servisselect.contains(e.target)) {
            servisitems.classList.add("hidden");
            servisselected.classList.remove("select-arrow-active");
        }
    });

    const servis2select = document.getElementById("servis2");
    const servis2selected = document.getElementById("servis2_select");
    const servis2items = document.getElementById("servis2_sel");
    const servis2options = servis2items.querySelectorAll("div");

    servis2selected.addEventListener("click", function () {
        servis2items.classList.toggle("hidden");
        servis2selected.classList.toggle("select-arrow-active");
    });

    servis2options.forEach(option => {
        option.addEventListener("click", function () {
            document.getElementById('servis2_value').innerHTML = this.innerHTML;
            servis2items.classList.add("hidden");
            servis2selected.classList.remove("select-arrow-active");
        });
    });

    document.addEventListener("click", function (e) {
        if (!servis2select.contains(e.target)) {
            servis2items.classList.add("hidden");
            servis2selected.classList.remove("select-arrow-active");
        }
    });

    document.getElementById('btn_servis').addEventListener('click', () => {
        document.getElementById('mobaddservis2').classList.add('hidden')
        document.getElementById('addBlock_servis').classList.remove('hidden')
    })

    // закрытие и открытие модального окна
    document.getElementById('change_btn').addEventListener('click', () => {
        document.getElementById('modalChange').classList.toggle('hidden')
    })

    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('modalChange').classList.toggle('hidden')
    })

    document.getElementById('modalSave').addEventListener('click', () => {
        document.getElementById('modalChange').classList.toggle('hidden')
    })

    // Совпадение паролей
    const newPasswordInput = document.getElementById('new-password');
    const repeatPasswordInput = document.getElementById('repeat-password');
    const errorMessage = document.getElementById('error-message');

    const toggleNewPassword = document.getElementById('toggle-new-password');
    const toggleRepeatPassword = document.getElementById('toggle-repeat-password');

    function checkPasswords() {
        if (newPasswordInput.value !== repeatPasswordInput.value) {
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.classList.add('hidden');
        }
    }

    function togglePasswordVisibility(input, toggleIcon) {
        if (input.type === 'password') {
            input.type = 'text';
            toggleIcon.src = '/assets/icons/not-pass.svg';
        } else {
            input.type = 'password';
            toggleIcon.src = '/assets/icons/pass.svg';
        }
    }

    repeatPasswordInput.addEventListener('input', checkPasswords);

    toggleNewPassword.addEventListener('click', function () {
        togglePasswordVisibility(newPasswordInput, toggleNewPassword);
    });

    toggleRepeatPassword.addEventListener('click', function () {
        togglePasswordVisibility(repeatPasswordInput, toggleRepeatPassword);
    });
});
