// Завдання 3
// Людина вводить текст, в якому міститься слово html (html може зустрічатись в тексті декілька разів). Потрібно, вивести в консолі загальну кількість слів html у введеному тексті.
// Приклад роботи:
// Користувач вводить: “Text html javascript html css” – в консоль виводиться 2.
// ------------------------------------------------------------------------------------------



// let str = 'Text html javascript html css';
// let reqV = /h/t/m/l;
// let result =str.match(reqV)
// document.write(result)


let str = prompt ('Enter text');
let count = 0;

for(let i = 0;i < str.length; i++) {
    if(str.split(' ')[i] ==='html'){
        count++
    }
}
alert('Enter  ' + count + ' html')

