const ADMIN_PASSWORD = 'jqueryismyjam';
const enteredPassword = prompt('Введите пароль: ');
let message;

if (enteredPassword === null) {
    message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === enteredPassword) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);