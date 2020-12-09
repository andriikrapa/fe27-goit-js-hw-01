'use strict';

const CHINA = 'Китай';
const CHILE = 'Чили';
const AUSTRALIA = 'Австралия'; 
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
const DELIVERY_NOT_AVALABLE = 'В вашей стране доставка не доступна';
const CANCELED_BY_USER = 'Отменено пользователем';

let countryName = prompt('Введите страну доставки: ');
let country;
let deliveryPrice = 0;
let message;

if (countryName === null) {
    message = CANCELED_BY_USER;
} else {
    country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
    console.log(`Выбрана страна доставки: ${country}`);

    switch (country) {
        case 'Китай':
            deliveryPrice = 100;
            break;
        
        case 'Чили':
            deliveryPrice = 250;
            break;
        
        case 'Австралия':
            deliveryPrice = 170;
            break;
        
        case 'Индия':
            deliveryPrice = 80;
            break;
        
        case 'Ямайка':
            deliveryPrice = 120;
            break;
        
        default:
            message = DELIVERY_NOT_AVALABLE;
    }
    
}

if (deliveryPrice > 0) {
    message = (`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
}

console.log(message);