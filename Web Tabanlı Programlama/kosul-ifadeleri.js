//yatay gecis kosulları
// not ortalaması 2,5 üstü olacak
//1 sınıftanm büyük 4 sınıf kücük olacak

let notOrtalamasi=2.6
let sinifi=4


/*if(notOrtalamasi>2.5){
    if(sinifi>1){
        if(sinifi<4){
            console.log("başvuru yapabilirsiniz")
        }
    }
}else{
    console.log("başvuru yapamazsınız")
}*/
   
/*if(notOrtalamasi>2.5 && sinifi>1&&sinifi<4){
    
    console.log("başvuru yapabilirsiniz")
}else{
    console.log("başvuru yapamazsınız")
}*/

if(notOrtalamasi>2.5){
    if(sinifi>1&& sinifi<4){
        console.log("başvuru yapabilirsiniz")
    }else{
        console.log("sınıfınız geçiş yapmaya müsait değildir")
    }
}else{
    console.log("not ortalamanız yetersiz olduğundan başvuru yapamazsınız")
}

let yas =18;
let gelisTuru="ekm1";
if(yas>=18&&(gelisTuru=="ekm1"|| gelisTuru=="yataygecis")){
    console.log("kayıt olabilir")
}else{
    console.log("kayıt olamaz")
}


