let ranglar = ["qizil", "yashil", "ko'k"];
ranglar.push("sariq");
ranglar.unshift("oq");
console.log(ranglar.length);
console.log( ranglar.join(", "));

let sonlar2 = [3, 7, 1, 9, 4];
console.log(sonlar2[0]);
console.log(sonlar2[sonlar2.length - 1]);
console.log(sonlar2.includes(9));
console.log(sonlar2.indexOf(7));

let shahar = "Toshkent";
console.log(shahar.slice(0, 4));
console.log(shahar.slice(4));
console.log(shahar.indexOf("k"));

let matn = "men dasturchi bo'laman";
console.log( matn.split(" ")[0]);
console.log( matn.replaceAll("a", "@"));
console.log(matn.startsWith("men"));

let sonlar3 = [12, 5, 8, 130, 44, 7, 19];
console.log( sonlar3.length);
sonlar3.sort((a, b) => b - a);
console.log( sonlar3);

let oyinlar = ["Minecraft", "Counter-Strike", "PUBG", "GTA V", "Roblox"];
oyinlar.push("FIFA");
oyinlar.pop();
oyinlar.sort();
console.log(oyinlar.join(", "));

let gap = "Dasturlash juda qiziqarli fan";
let sozlar = gap.split(" ");
let aSoni = gap.toLowerCase().split("a").length - 1;
console.log( sozlar.length);
console.log(sozlar.reverse().join(" "));
console.log(aSoni);