'use strict';

let btnStart = document.getElementById('start'),
    //статьи возможного дохода
    incomeItem = document.querySelector('.choose-income'),
    //получаем список полей необязательных расходов
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    //Накопления: чекбокс,сумма и процент
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    //Год месяц день
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    //Кнопки в одной переменной,и из нее кнопки утвердить и рассчитать
    //btns = document.getElementsByTagName('button'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    //поля ввода обязательных расходов
    expensesItem = document.getElementsByClassName('expenses-item'),
    /* Блоки те что справа страницы */
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    budgetValue = document.getElementsByClassName('budget-value')[0];


    let money, time;



// обработчик событий при нажатии на кнопку старт
btnStart.addEventListener('click', function() {
    time = prompt("Введите дату в формате: YYYY-MM-DD",'');
    money = +prompt("Ваш бюджет на месяц?",'');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?",'');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = (money.toFixed() + 'р') ;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate() ;

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;

});

// обработчик событий при нажатии на кнопку утвердить в блоке обязательных расходов
expensesBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i -1;
        }    
     }
     appData.minus = sum;
     expensesValue.textContent = sum;
});

//обработчик событий при нажатии на кнопку утвердить в блоке необязательных затрат
optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
          
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
       
    }
});

//обработчик событий для кнопки расчитать бюджет на день и вывести уровень дохода
countBtn.addEventListener('click', function() {

    if (appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget - appData.minus)  / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
            } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
            } else {
            levelValue.textContent = "Произошла ошибка";
        } 
    } else {
        daybudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function (){
    if (appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function (){
    if (appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

    


 console.log(appData.exp);

