
let length = prompt("Введіть довжину масиву:", "5");
let elements = prompt(`Введіть ${length} чисел через кому:`);

let newArray = elements.split(",").map(Number);

alert(`Ваш введений масив: ${newArray}`); 

let sortedArray = newArray.sort((a, b) => a - b);

alert(`Масив відсортовано за зростанням: ${sortedArray}`);

let deletedArray = sortedArray.slice(1,3);
alert(`Елеменети з 2 по 4 видалено: ${deletedArray}`);