let a; //tipi any
a=5;
a='a';
a=true;
let b: string='a';
let c:boolean;
let d: any;
let e: number[]=[1,2,3];
let f:Array<number>=[1,2,3,4];
let g: any[]=[1,'q',true];
let h: [string,number,boolean]=['a',5,false];//tuple
const krediPayment=0;
const havalePayment=1;
const eftPayment=2;
enum Payment{kredi=0,havale=1,eft=2};
let kredi=Payment.kredi;//0
let havale=Payment.havale;//1
let eft=Payment.eft;//2
