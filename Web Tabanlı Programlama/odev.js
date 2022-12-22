 let  ogrenci1Ad="Ada";
 let ogrenci1Soyad="Bilgi"
 let ogrenci1DogumTarihi="2012"
 let ogrenci1MatematikNot1= 70;
 let ogrenci1MatematikNot2= 70;
 let ogrenci1MatematikNot3= 80;

 let  ogrenci2Ad="Yigit";
 let ogrenci2Soyad="Bilgi"
 let ogrenci2DogumTarihi="2010"
 let ogrenci2MatematikNot1= 40;
 let ogrenci2MatematikNot2= 40;
 let ogrenci2MatematikNot3= 50;
 
let tarih=new Date();
let gecerliYil = tarih.getFullYear();

let ogrenci1yas= gecerliYil-ogrenci1DogumTarihi;
let ogrenci2yas= gecerliYil-ogrenci2DogumTarihi;

console.log(ogrenci1yas);
console.log(ogrenci2yas);

let ogrenci1ortalama=(ogrenci1MatematikNot1+ogrenci1MatematikNot2+ogrenci1MatematikNot3)/3;
let ogrenci2ortalama=(ogrenci2MatematikNot1+ogrenci2MatematikNot2+ogrenci2MatematikNot3)/3;

console.log(ogrenci1ortalama);
console.log(ogrenci2ortalama);
console.log(typeof(ogrenci1ortalama));

let ogrenci1gecmedurumu=(ogrenci1ortalama>=50)
let ogrenci2gecmedurumu=(ogrenci2ortalama>=50)

console.log(ogrenci1gecmedurumu)
console.log(ogrenci2gecmedurumu)

console.log(typeof(ogrenci1gecmedurumu))


 

