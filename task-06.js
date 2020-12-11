//Пользователь вводит число
//Число сохраняется в переменную input и добавляется к total - цикл
//Пользователь нажимает отмена, выводится total (сумма всех введённых чисел)

let total = 0;

while (true) {
    let input = prompt('Введите число: ');

    if (input === null) {
        break;
        
    // } else if (input !== Number) {
    //     alert(`"${input}" не число, введите число`);
        
    } else {
        total += Number(input);
        console.log(`Вы ввели: ${input}`)
    }
}

if (total > 0) {
    console.log(`Сумма введённых чисел: ${total}`);
}
