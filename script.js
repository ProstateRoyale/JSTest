let taskPart1 = "qwerty"
let taskPart2 = "qwertyuiop, xxx, увеличение продаж"

// let task1 = (str1, str2) => {
//     if(str1.length > str2.length) console.log(1);
//     else if(str1.length < str2.length) console.log(-1);
//     else console.log(0);
// }

// task1(taskPart1, taskPart2)





// let task2 = str => {
//     console.log(str[0].toUpperCase());
// }

// task2(taskPart1)





// let task3 = str => str.split("").filter(c => "aeiuo".includes(c)).length;

// console.log(task3(taskPart2));





// let task4 = str => {
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes('100% бесплатно') || lowerStr.includes('xxx') 
//     || lowerStr.includes('увеличение продаж') || lowerStr.includes('только сегодня')
//     || lowerStr.includes('не удаляйте')
// }

// console.log(task4(taskPart2));





// let task5 = (str, max) => {
//     return (str.length > max) ? str.slice(0, max) + '…' : str;
// }

// console.log(task5(taskPart2, 5));






// function task6(str) {
//     let a = str.length;
//     for(var i = 0; i < a/2; i++) {  
//        if (str.charAt(i) !== str.charAt(a-1-i)) return false;
//     }
//     return true;
// }

// console.log(task6(taskPart2));






let test = "qweq fdfsd fdsfs"
// function task7(str) { 
//     return str.length - str.split(' ').length + 1;
// }

// console.log(task7(test));






// function task8(str) {
//     return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
// };

// console.log(task8(taskPart2));





let task9 = str => {
    let num1 = (str.split(' ').length - 1);
    let try1 = /s*/
    let num2 = (str.split(try1).length);
    console.log(num2 / num1); // только так смог сделать, не знаю правильно ли так 
}

task9(test)

// ласт не смог