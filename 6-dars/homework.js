// let mevalar = ["olma", "banan", "uzum", "nok"]
// let birinchisi = mevalar[0]
// let oxirgisi = mevalar[mevalar.length -1]

// console.log("Birinchisi: " + birinchisi + " Oxirgisi: " + oxirgisi);


// let sonlar = [10,20,30,40];
// [sonlar[0], sonlar[sonlar.length - 1]] = [sonlar[sonlar.length - 1], sonlar[0]];
// console.log(sonlar);


// let hariflar = ["a", "c" , "b"]
// let uzunligi = hariflar.length
// if(uzunligi >= 3 ){
// console.log("Uzun massiv");
// } else {
//     console.log("Qisqa massiv");


// let sonlar = [1, 2, 3];
// sonlar[0] = sonlar[1];
// sonlar[1] = sonlar[2]; 
// sonlar[2] = 4;         
// console.log(sonlar);



// let rang = ["qizil", "yashil", "ko'k"]
// for (let i = rang.length -1; i >= 0; i--) {
//    console.log(rang[i]);  
// }


// let juft = ["A", "B", "C", "D", "E"];

// for (let i = 0; i < juft.length; i += 2) {
//     console.log(juft[i]);
// }


// let buyumlar = ["kitob", "daftar", "qalam"];
// let qidirilayotgan = "daftar";

// let bormi = buyumlar.includes(qidirilayotgan);

// console.log(bormi); 


// let mevalar = ["olma", "banan"];

// for (let i = 0; i < mevalar.length; i++) {
//     console.log(mevalar[i] + " - meva");
// }



// let sonlar = [1, 2, 3, 4, 5, 6];

// let birinchiYarim = sonlar.slice(0, 3);
// let ikkinchiYarim = sonlar.slice(3);  

// console.log(birinchiYarim);
// console.log(ikkinchiYarim);


// let massiv1 = [1, 2];
// let massiv2 = [3, 4];

// let birlashgan = [...massiv1, ...massiv2];

// console.log(birlashgan); 


// // 1-masala
// let foydalanuvchi = { ism: "Ali", yosh: 20 };
// console.log(`${foydalanuvchi.ism} ${foydalanuvchi.yosh} yoshda`);

// // 2-masala
// let shahar = { nom: "Toshkent" };
// shahar.mamlakat = "O'zbekiston";
// console.log(shahar);

// // 3-masala
// let avto = { brend: "BMW", rang: "oq" };
// avto.rang = "qora";
// console.log(avto);

// // 4-masala
// let profil = { login: "user1", parol: "12345" };
// delete profil.parol;
// console.log(profil);

// // 5-masala
// let mahsulot = { nom: "Telefon", brend: "Samsung" };
// console.log("narx" in mahsulot);

// // 6-masala
// let malumot = { talaba: "Hasan", manzil: { shahar: "Samarqand" } };
// console.log(malumot.manzil.shahar);

// // 7-masala
// let kitob = { kitob: "Xamsa", muallif: "Navoiy", yil: 1485 };
// console.log(Object.keys(kitob));

// // 8-masala
// let texnika = { noutbuk: "HP", xotira: "512GB" };
// console.log(Object.values(texnika));

// // 9-masala
// let obyekt = { a: 10, b: 20 };
// for (let key in obyekt) {
//     console.log(`${key}: ${obyekt[key]}`);
// }

// // 10-masala
// let odam = { ism: "Vali" };
// if (!("status" in odam)) {
//     odam.status = "faol";
// }
// console.log(odam);