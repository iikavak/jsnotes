var a; //tipi any
a = 5;
a = 'a';
a = true;
var b = 'a';
var c;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3, 4];
var g = [1, 'q', true];
var h = ['a', 5, false]; //tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi; //0
var havale = Payment.havale; //1
var eft = Payment.eft; //2
