// Past daraja
function uchgaKopaytir(n) {
    return n * 3;
}
console.log(uchgaKopaytir(5)); 
console.log(uchgaKopaytir(10)); 

function ayirma(a, b) {
    return a - b;
}
console.log(ayirma(10, 4));
console.log(ayirma(25, 12)); 


function tanishtir(ism, yosh) {
    return `Mening ismim ${ism}, men ${yosh} yoshdaman.`;
}
console.log(tanishtir("Ali", 16));
console.log(tanishtir("Vali", 20));  

// O'rta daraja

function kichikSon(a, b) {
    return a < b ? a : b;
}
console.log(kichikSon(8, 3));   
console.log(kichikSon(15, 42));


function toGriTortburchakYuzi(en, boy) {
    return en * boy;
}

function perimetr(en, boy) {
    return 2 * (en + boy);
}
console.log("Yuzi:", toGriTortburchakYuzi(5, 8));
console.log("Perimetri:", perimetr(5, 8));


function bahoMatni(baho) {
    switch (baho) {
        case 5:
            return "A'lo";
        case 4:
            return "Yaxshi";
        case 3:
            return "Qoniqarli";
        default:
            return "Qoniqarsiz";
    }
}
console.log(bahoMatni(5)); 