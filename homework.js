//let userName=prompt("Введите ваше имя")

//let greeting= "Привет";

//console.log(`${greeting}, ${userName}!`);


// Задание на типы данных и преобразование 

// let toy = prompt("Введите название игрушки, которую хотите купить:");
// let price = prompt("Введите цену игрушки (в сомах):");
// let count = prompt("Введите желаемое количество игрушек:");


// price = Number(price);
// count = Number(count);


// let totalCost = price * count;


// console.log(`Итоговая стоимость покупки: ${totalCost} сомов`);


// Задание для темы "условия"
// Задание 1 - Кинотеатр


// let age = Number(prompt("Введите ваш возраст:"));


// if (age < 7) {
//     alert("Вам нельзя смотреть этот фильм.");
// } else if (age >= 7 && age < 18) {
//     alert("Вы можете смотреть фильм в сопровождении взрослых.");
// } else {
//     alert("Вы можете смотреть этот фильм.");
// }



//Задание 2 - Магазин


let purchaseAmount = Number(prompt("Введите сумму покупки:"));


let discount = 0;


if (purchaseAmount > 5000) {
    discount = 20;
} else if (purchaseAmount > 1000) {
    discount = 10;
}


let discountAmount = (purchaseAmount * discount) / 100;
let finalAmount = purchaseAmount - discountAmount;


let message = `Сумма вашей покупки: ${purchaseAmount} сомов.\n`;
if (discount > 0) {
    message += `Вам предоставлена скидка: ${discount}%.\n`;
    message += `Скидка составила: ${discountAmount} сомов.\n`;
}
message += `Итоговая стоимость: ${finalAmount} сомов.`;


alert(message);

