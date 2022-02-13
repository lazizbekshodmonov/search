let text = prompt("Matn kiriting:"),
    request = prompt("Qidirish uchun so'zni kiriting:");

function checkRequest() {
    check = text.lastIndexOf(request);
    if ( check != -1 ){
        alert(`So'z topildi! "${request}"`)
    }else {
        alert(`Matnda bu so'z mavjud emas!`)
    }
}
checkRequest();