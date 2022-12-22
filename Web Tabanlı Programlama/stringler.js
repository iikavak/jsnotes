let ad="ikbal";
let soyad ="kavak";
let yas=75;
let sehir="osmaniye";
//bactick kullandık
let mesaj="benim adım"+ad+"ve soyadım"+ soyad+","+sehir+"sehrinde yaşıyorum.Yaşım"+yas+", emekliliğime "+(60-yas)+"yıl kaldı";
//console.log(mesaj)
mesaj=`benim adım ${ad}`


//ternary operatörler
let emeklilik=(65-yas >0) ? "emekliliğe "+(65-yas)+"yıl kaldı":"daha önce emekli olmuş"
mesaj=`${emeklilik}`
//console.log(mesaj)

let dersAdi="web tabanlı programlama"
let sonuc;
sonuc=dersAdi.toLowerCase();
sonuc=dersAdi.toLocaleLowerCase();
sonuc=dersAdi.toUpperCase();
sonuc=dersAdi.length;
sonuc=dersAdi[1];
sonuc=dersAdi.slice(0,11)
sonuc=dersAdi.slice(11)
sonuc=dersAdi.slice(-11)
sonuc=dersAdi.slice(-15,-2)
sonuc=dersAdi.substring(0,11)
sonuc=dersAdi.substring(11)

sonuc=dersAdi.replace("web","betik")

sonuc=dersAdi.trim();
sonuc=dersAdi.trimEnd();
sonuc=dersAdi.trimStart()
sonuc=dersAdi.indexOf("w")
sonuc=dersAdi.trim().indexOf("w")
sonuc=dersAdi.split(" ")
sonuc=dersAdi.trim().split(" ")

sonuc=dersAdi.startsWith("web")
sonuc=dersAdi.indexOf("ikbal")
console.log(sonuc);