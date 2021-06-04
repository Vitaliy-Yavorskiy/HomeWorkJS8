// Завдання 2
// Користувач вводить email. Потрібно перевірити дані на правильність введення. Правильно введений email - це той, в якому міститься символ @. Крім того символ @ не може бути на початку тексту або в кінці.
// Приклад правильно введених даних:
// student@ukr.net
// Приклад не правильно введених даних:
// @student.ukr.net
// student.ukr.net@
// student.ukr.net
// ------------------------------------------------------------------------------------------


let email = prompt('Enter your email');

if(email.indexOf('@') === 0 || email.indexOf('@') === -1 || email.indexOf('@') === email.length -1) {
console.log('email is not valid');
}else{
    console.log('you entered true');
}

