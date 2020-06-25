'use strict';

let money,
    time;
money = +prompt("Your monthly budget","");
time = prompt("Enter a date in the format: YYYY-MM-DD","");
let ask11 = prompt("Введите обязательную статью расходов в этом месяце","");
let ask12 = +prompt("Во сколько обойдется?","");
let ask21 = prompt("Введите обязательную статью расходов в этом месяце","");
let ask22 = +prompt("Во сколько обойдется","");

let arr = [];

let appData = {
    budget: [money],
    timeData: [time],
    expenses: {
        [ask11]: [ask12],
        [ask21]: [ask22]
    },
    optionalExpenses: {

    },
    income: [arr],
    saving: false
};

let dailyBudget = (money-(ask12 + ask22))/30;

let sum = alert("Ваш бюджет на один день: "+dailyBudget);
console.log( appData);
