// let a = '';
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     a += '*';
//   }
//   a += '\n';
// }
// console.log(a);

// for (let z = 5; z >= 1; z--) {
//   console.log(`Data Z ke - ${z}`);
// }
// console.log('\n');

// let x = 5;
// while (x >= 1) {
//   console.log(`Data X ke - ${x}`);
//   x--;
// }
// console.log('\n');

// let y = 5;
// do {
//   console.log(`Data Y ke - ${y}`);
//   y--;
// } while (y >= 1);

// tugas kecil

const x = [3, 5, 12];

//For
let a = 0;
for (let i = 0; i < x.length; i++) {
  a += x[i];
}
console.log(`Looping For dengan hasil = ${a} \n`);

//While
let b = 0;
let i = 0;
while (i < x.length) {
  b += x[i];
  i++;
}
console.log(`Looping While dengan hasil = ${b} \n`);

//Do While
let c = 0;
let j = 0;
do {
  c += x[j];
  j++;
} while (j < x.length);
console.log(`Looping Do While dengan hasil = ${c} \n`);

const buah = ['apel', 'jeruk', 'peach', 'semangka', 'mangga', 'sirsak'];

for (let listBuah of buah) {
  console.log(listBuah);
}
