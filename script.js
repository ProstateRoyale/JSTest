let number = str.match(/\d*/gi).join('').length;
//     let letter = str.match(/[a-z]/gi).join('').length;
//     console.log(number, letter);
// }

// task1(str)




// let num = 34

// function task2(number) {
//     let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
//     let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
//     let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
//     if (number > 0 && number <= 9) {
//         return first[number - 1];
//     }
//     if (number >= 10 && number <= 20) {
//         return second[number - 10];