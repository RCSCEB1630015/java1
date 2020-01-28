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

	if ((typeof(a)) === 'string' &&  (typeof(a)) != null && (typeof(b)) != null
		&& a !='' && b !='' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
	} else {
		i--;
	}
};

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