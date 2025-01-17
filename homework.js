//let userName=prompt("Введите ваше имя")

//let greeting= "Привет";

//console.log(`${greeting}, ${userName}!`);


// Задание на типы данных и преобразование 

let toy = prompt("Введите название игрушки, которую хотите купить:");
let price = prompt("Введите цену игрушки (в сомах):");
let count = prompt("Введите желаемое количество игрушек:");


price = Number(price);
count = Number(count);


let totalCost = price * count;


console.log(`Итоговая стоимость покупки: ${totalCost} сомов`);
