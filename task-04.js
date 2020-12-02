const quantityOfDroids = prompt('Введите количество Дроидов к покупке: ');

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let message;
let accountBalance;
let totalPrice = Number(quantityOfDroids) * pricePerDroid;


if (quantityOfDroids === null) {
    message = CANCELED_BY_USER;

} else if (totalPrice > credits) {
    message = ACCESS_DENIED;

} else {
    accountBalance = credits - totalPrice;
    message = `Вы купили ${quantityOfDroids} дроидов, на счету осталось ${accountBalance} кредитов.`;
}

console.log(message);