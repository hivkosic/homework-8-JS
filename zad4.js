/*   4.	Napravi niz proizvoljnih podataka, pa iz tog niza izbaci sve članove koji nisu broj, 
te od tog dobijenog niza napravi novi niz koji je obrnutog redoslijeda */

const arr = [10, 18, 32, 48, "lopta", 6, "sunce", "banana", 2];
let arrNoStr = [];
let arrReverse = [];

for (i = 0; i <= arr.length; i++) {
  if (!isNaN(+arr[i])) {
    arrNoStr = arrNoStr.concat(arr[i]);
  }
}

for (j = arrNoStr.length - 1; j >= 0; j--) {
  arrReverse = arrReverse.concat(arrNoStr[j]);
}

console.log("zadani niz:", arr);
console.log("zadani niz bez stringa:", arrNoStr);
console.log("obrnuti niz bez stringa:", arrReverse);
