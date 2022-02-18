// let text = prompt("Matn kiriting:"),
//     request = prompt("Qidirish uchun so'zni kiriting:");
//
// function checkRequest() {
//     let check = text.lastIndexOf(request);
//     if ( check !== -1 ){
//         alert(`So'z topildi! "${request}"`)
//     }else {
//         alert(`Matnda bu so'z mavjud emas!`)
//     }
// }
// checkRequest();
// noinspection JSAnnotator

// function findEvenNumbers(number){
//     for ( i = 0; i <= number; i++){
//         if ( i % 2 === 0){
//             console.log(i);
//         }else{
//
//         }
//     }
// }
//
// findEvenNumbe

// function hideCardNumber (number){
//     let cardNumber = number,
//         arrNumber,
//         hideCard;
//     arrNumber = cardNumber.split("");
//     for (let i = 4; i < 12; i++){
//         arrNumber[i] = "x";
//     }
//
//     hideCard = arrNumber.join("")
//     console.log(hideCard)
// }
//
// hideCardNumber("9601268975495234");
//

//
// const num = 20;
// console.log(num.toString(2))

// console.log(String.fromCharCode(45))

// let num = "Lazizbek";
//
// console.log(num.charCodeAt(2))
//
// console.log("Hello world".concat(" Salom dunyo"))


function lsplit(string , delString , index){
    let defoltString = string, arrString = [], arrResult = [], a = 0, b = 0;


    if (delString === undefined || index === undefined) {
        for (let i = 0; i < string.length; i++){
            if (delString === undefined || index === undefined){
                arrString[i] = defoltString[i];

            }
        }
        console.log(arrString);
    }else{
        for (let i = 0; i < string.length; i++) {
            arrString[i] = defoltString[i];
            if (defoltString[i] !== delString) {


                arrResult[a++] = arrString[b++];
                // console.log(arrResult);

            }else {
                b++;
            }
        }
        console.log(arrResult);
    }
}
lsplit("lazizbek", "z", 3);

// function checkIndex(a, b, c) {
//     console.log(a, b, c);
// }
// checkIndex(5);

// let num = 