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
});
