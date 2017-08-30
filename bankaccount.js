var deposit = prompt("Deposit");
var withdrawl = prompt("Withdrawl");

var bankAccount1 = {};

bankAccount1["name"]= "Tyler";
bankAccount1["money"]= deposit;
bankAccount1["money"]-=withdrawl;

window.alert(bankAccount1.money);

