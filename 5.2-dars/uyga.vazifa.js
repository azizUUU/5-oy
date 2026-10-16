// // 1.1. Oshkora (Explicit) konvertatsiya misoli
// // Biz o'zimiz Number() funksiyasi orqali aniq turga o'tkazmoqdamiz
// let qiymatString = "25";
// let natijaExplicit = Number(qiymatString); 
// console.log(natijaExplicit);
// console.log(typeof natijaExplicit); 


// // 1.2. Yashirin (Implicit) konvertatsiya misoli
// // JavaScript o'zi avtomatik ravishda turini o'zgartiradi
// let natijaImplicit = "5" - 3; 
// console.log(natijaImplicit);
// console.log(typeof natijaImplicit);

// 2. String ga o'tkazish (Matn turiga o'zgartirish)
// let yil = 2026; 
// let holat = true;

// let Yilnatija = String (yil) 
// let Holatnatija = String (holat)

// let Matnnatija = Yilnatija + "-" + Holatnatija
// console.log(Matnnatija)

// let uzunlik = Matnnatija.length;
// console.log("Matn uzunligi:" , uzunlik );


//  3. Number ga o'tkazish (Raqam turiga o'zgartirish)
// let narx1 = "15000" 
// let narx2 = "4500.75"
// let chegirma = "bepul"

// let Narx1 = Number(narx1) 
// let Narx2 = Number(narx2)

// let NatijaNarx = Narx1 + Narx2
// console.log(NatijaNarx);

// let chegirmaRaqam = Number(chegirma);
// console.log("Chegirma raqamda:", chegirmaRaqam);

// 4. Boolean ga o'tkazish (Mantiqiy turga o'zgartirish)
//     let qiymatlar = [0, "0", "", "salom", null, undefined, 123];
//     qiymatlar.forEach(function(qiymat) {
//     let natija = Boolean(qiymat);
//     console.log(`Qiymat:`, qiymat, `--> Boolean:`, natija);
// });

// 5. Yashirin konvertatsiya (Implicit Coercion)
// console.log("5" + 3);  
// console.log(typeof ("5" + 3));

// console.log("5" - 3);         
// console.log(typeof ("5" - 3)); 

// console.log("10" * "2");      
// console.log(typeof ("10" * "2")); 

// console.log(false + 1);       
// console.log(typeof (false + 1));

// console.log(true + true);  
// console.log(typeof (true + true)); 

// 6. Metodlar (Maxsus funksiyalar yordamida o'zgartirish)
// let matn1 = "120px";
// let son1 = parseInt(matn1)
// console.log(son1);

// let matn2 = "3.14pi";
// let son2 = parseFloat(matn2)
// console.log(son2);

// let raqam = 255;
// let ikkilikMatn = raqam.toString(2);
// console.log(ikkilikMatn);