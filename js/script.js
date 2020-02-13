"use strict";

let money,time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	
	while (isNaN(money) || money == "" || money == null ) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}
}
start();


let appData = {
    budget: money,
    expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов?", ""),
				b = +prompt("Во сколько это обойдется?", "");
		
			if ((typeof(a)) === 'string' &&  (typeof(a)) != null && (typeof(b)) != null
				&& a !='' && b !='' && a.length < 50) {
				console.log("done");
				appData.expenses[a] = b;
			} else {
				i--;
			}
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed(2);
		alert("Ежедневный бюджет: " + appData.moneyPerDay);
	},
	detectLevel: function() {
		if(appData.moneyPerDay < 100) {
			console.log("Ваш доход минимален")
		} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
			console.log("Средний уровень достатка")
		} else if(appData.moneyPerDay > 1000) {
			console.log("Высокий достаток")
		} else {
			console.log("ошибка")
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?", ""),
				percent = +prompt("Под какой процент?", "");
	
			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 1; i < 4; ++i){
			let a = prompt("Статья необязательных расходов", "");
	
			if ((typeof(a)) === 'string' && (typeof(a)) !=null && a !='' ) {
				appData.optionalExpenses[i] = a;
			}
		}
	},
	chooseIncome: function() {
		let items = prompt("Укажите дополнительный источник дохода? (Укажите через запятую)", "");
		if (typeof(items) !="string" || items =="" || items ==null) {
			console.log("Данные указаны некорректно");
		} else {
			appData.income = items.split(', ');
			appData.income.push(prompt("Может что-то еще?"));
			appData.income.sort();
		}
		appData.income.forEach(function(source, i) {
			alert("Способы доп заработка: " + (i+1) + " - " + source);
		});
	}
};

for (let key in appData) {
	console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

























/* let i = 0;
while (i<2) {
	i++;
	let a = prompt("Введите обязательную статью расходов?", ""),
		b = +prompt("Во сколько это обойдется?", "");

	if (typeof(a) === 'string' &&  typeof(a) != null && typeof(b) != null
		&& a !=='' && b !=='' && a.length < 50); {
		console.log("done");
		appData.expenses[a] = b;
	}
} */

/* let i = 0;

do {
	let a = prompt("Введите обязательную статью расходов?", ""),
		b = +prompt("Во сколько это обойдется?", "");

	if (typeof(a) === 'string' &&  typeof(a) != null && typeof(b) != null
		&& a !=='' && b !=='' && a.length < 50); {
		console.log("done");
		appData.expenses[a] = b;
	};
	i++;
} while (i <2); */



/* if (2*4 == 8) {
	console.log("Верно")
} */

/* if (2*4 == 9) {
	console.log("Верно")
} else {
	console.log("Неверно")
} */

/* let num = 50;

if (num < 49) {
	console.log("Неверно")
} else if (num > 100) {
	console.log("Много")
} else {
	console.log("Почти")
}; */


/* let num = 50;

(num == 50) ? console.log("Верно") : console.log("Неверно"); */


/* let num = 101;

switch (num) {
	case num < 49:
		console.log("неверно");
		break;
	case num > 100:
		console.log("Много");
		break;
	case num > 80:
		console.log("Все еще много");
		break;
	case 50:
		console.log("Верно!");
		break;
	default:
		console.log("Ошибка");
		break;
} */

/* let num = 50;

while (num < 55) {
	console.log(num);
	num++;
} */


/* let num = 50;

do {
	console.log(num);
	num++;
} while (num < 55); */

/* for (let i = 1; i < 8; i++) {
	if (i == 6) {
		 break;
		continue;
	}
	console.log(i);
} */