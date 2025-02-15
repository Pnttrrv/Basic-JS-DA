// let a = 1;
// let ulang = true;

// while (ulang) {
//   console.log(`Hello World ${a}x`);
//   ulang = confirm('ulang?');
// }
// console.log('\n');

// for (let i = 1; i <= 10; i++) {
//   console.log(`Looping ${i}x with For`);
// }

let jmlangkot = 10;
let angkotBeroperasi = 6;
let a = 1;
for (let i = 1; i <= jmlangkot; i++) {
  if (i <= angkotBeroperasi) {
    console.log(`Angkot no ${i}, sedang beroperasi dengan baik.`);
  } else {
    console.log(`Angkot no ${i}, sedang tidak beroperasi.`);
  }
}
// while (a <= angkotBeroperasi) {
//   console.log(`Angkot no ${a}, beroperasi dengan baik.`);
//   a++;
// }

// for (let i = angkotBeroperasi + 1; i <= jmlangkot; i++) {
//   console.log(`Angkot no ${i}, sedang tidak beroperasi.`);
// }

// let angka = parseInt(prompt('Masukkan angka'));
// if (angka % 2 == 0) {
//   alert('Anda memasukkan angka genap');
// } else if (angka % 2 == 1) {
//   alert('Anda memsukkan angka ganjil');
// }
