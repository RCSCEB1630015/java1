"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов?", ""),
		b = +prompt("Во сколько это обойдется?", "");

	if (typeof(a) === 'string' &&  typeof(a) != null && typeof(b) != null
		&& a !=='' && b !=='' && a.length < 50); {
		console.log("done");
		appData.expenses[a] = b;
	} /* else {
		
	} */
	
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
	console.log("Ваш доход минимален")
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
	console.log("Средний уровень достатка")
} else if(appData.moneyPerDay > 1000) {
	console.log("Высокий достаток")
} else {
	console.log("ошибка")
};




