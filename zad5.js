/*   5.	Uz pomoć petlji, kreiraj ovakav ispis:
0123456789
012345678
01234567
0123456
012345
01234
0123
012
01
0
*/

/* 1.način
const str = "0123456789";

/*for (let i=str.length; i >= 0; i--) {
    console.log(str.substr(0,i));
}*/

// 2.način
const str = "0123456789";

for (i=str.length; i>=0; i--) {
    console.log(str.slice(0,i));
}