document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('zayavka').addEventListener('click', () => {
        document.getElementById('block1DATA').classList.add('hidden')
        document.getElementById('lichnyi').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('activeBtn').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('endBtn').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('rejectBtn').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('lichnyi').classList.add('text-[#1d89f2]')
        document.getElementById('namoderasii').classList.remove('hidden')
        document.getElementById('activePromo').classList.add('hidden')
        document.getElementById('endPromo').classList.add('hidden')
        document.getElementById('rejectPromo').classList.add('hidden')
    })
    document.getElementById('lichnyi').addEventListener('click', () => {
        document.getElementById('lichnyi').classList = "px-4 mx-4 py-2 my-2 bg-[#063966] text-white rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('activeBtn').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('endBtn').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('rejectBtn').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('block1DATA').classList.remove('hidden')
        document.getElementById('namoderasii').classList.add('hidden')
        document.getElementById('activePromo').classList.add('hidden')
        document.getElementById('endPromo').classList.add('hidden')
        document.getElementById('rejectPromo').classList.add('hidden')
    })
    document.getElementById('activeBtn').addEventListener('click', () => {
        document.getElementById('activeBtn').classList = "px-4 mx-4 py-2 my-2 bg-[#063966] text-white rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('lichnyi').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('endBtn').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('rejectBtn').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('block1DATA').classList.add('hidden')
        document.getElementById('namoderasii').classList.add('hidden')
        document.getElementById('activePromo').classList.remove('hidden')
        document.getElementById('endPromo').classList.add('hidden')
        document.getElementById('rejectPromo').classList.add('hidden')
    })
    document.getElementById('endBtn').addEventListener('click', () => {
        document.getElementById('endBtn').classList = "px-4 mx-4 py-2 my-2 bg-[#063966] text-white rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('activeBtn').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('lichnyi').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('rejectBtn').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('block1DATA').classList.add('hidden')
        document.getElementById('namoderasii').classList.add('hidden')
        document.getElementById('activePromo').classList.add('hidden')
        document.getElementById('endPromo').classList.remove('hidden')
        document.getElementById('rejectPromo').classList.add('hidden')
    })
    document.getElementById('rejectBtn').addEventListener('click', () => {
        document.getElementById('rejectBtn').classList = "px-4 mx-4 py-2 my-2 bg-[#063966] text-white rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('activeBtn').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('lichnyi').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('endBtn').classList = "px-4 mx-4 py-2 my-2 underline text-[#1d89f2] hover:bg-[#063966] hover:text-white hover:rounded-lg hover:no-underline cursor-pointer"
        document.getElementById('block1DATA').classList.add('hidden')
        document.getElementById('namoderasii').classList.add('hidden')
        document.getElementById('activePromo').classList.add('hidden')
        document.getElementById('endPromo').classList.add('hidden')
        document.getElementById('rejectPromo').classList.remove('hidden')
    })

    document.getElementById('feedBack').addEventListener('click', () => {
        document.getElementById('modalFromService').classList.remove('hidden')
    })
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('modalFromService').classList.add('hidden')
    })

    document.getElementById('photoBlock').addEventListener('mouseenter', () => {
        document.getElementById('photoChangeBtn').classList.remove('hidden')
    })

    document.getElementById('photoBlock').addEventListener('mouseleave', () => {
        document.getElementById('photoChangeBtn').classList.add('hidden')
    })

    document.getElementById('photoChangeBtn').addEventListener('click', function () {
        document.getElementById('uploadImage2').click();
    });

    document.getElementById('uploadImage2').addEventListener('change', function (event) {
        var file = event.target.files[0];
        var image = document.getElementById('cropperImage2');

        if (file) {
            // Проверка размера файла (не больше 10 МБ)
            var maxSize = 10 * 1024 * 1024; // 10 МБ в байтах

            if (file.size > maxSize) {
                alertFile.classList.add("block");
                alertFile.classList.remove("hidden");
                event.target.value = null;
                return;
            }

            // Продолжение кода обработки изображения
            var reader = new FileReader();
            reader.onload = function (e) {
                image.src = e.target.result;

                var cropper = new Cropper(image, {
                    aspectRatio: 1,
                    viewMode: 0,
                    autoCropArea: 0.5,
                    dragMode: "none",
                    cropBoxResizable: true,
                    background: false,
                    zoomable: false,
                    guides: false
                });

                document.getElementById('cropModal2').style.display = 'block';

                document.getElementById('cropButton2').addEventListener('click', function () {
                    var croppedCanvas = cropper.getCroppedCanvas();
                    var croppedImage = croppedCanvas.toDataURL();
                    document.getElementById('cropperResult2').style.display = "block";
                    document.getElementById('cropperResult2').src = croppedImage;
                    document.getElementById('cropModal2').style.display = 'none';

                    cropper.destroy();
                });

                document.getElementById('cancelButton2').addEventListener('click', function () {
                    document.getElementById('cropModal2').style.display = 'none';
                    cropper.destroy();
                });
            };

            reader.readAsDataURL(file);
        }
    });
});
