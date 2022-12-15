//  3.	Iz niza stringova unijetih preko konzole, izbaci sve što nije voće 

let str = process.argv;

for (let i = 2; i< str.length; i++) {
    if (!(str[i] === "voće")) {
        console.log(str[i]);
    }
} 