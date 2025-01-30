// let nama = prompt('Masukkan nama anda');
// let usia = prompt('Masukkan usia anda');
// let tinggiBadan = prompt('masukkan tinggi badan anda');
// let pacar = null;

// // pacar == null ? (pacar = 'tidak punya') : (pacar = 'udah punya');

// switch (pacar) {
//   case 1:
//     pacar = 'sudah ada 1';
//     break;
//   case 2:
//     pacar = 'sudah ada 2';
//     break;
//   default:
//     pacar = 'belum punya';
//     break;
// }

// let saldoAwal = 50000;
// let saldoTambahan = 80000;
// const hutang = 30000;
// const totalSaldo = saldoAwal + saldoTambahan - hutang;

// alert(`Nama anda adalah ${nama}, anda berusia ${usia}, dan tinggi badan anda adalah ${tinggiBadan}.\nUntuk pacar saya ${pacar}`);

// alert(
//   `saldo awal saya sebesar Rp.${saldoAwal} dan saldo tambahan yang akan saya miliki adalah Rp.${saldoTambahan} dan saya memiliki hutang sebesar ${hutang} jadi total saldo yang akan saya miliki adalah Rp.${totalSaldo} setelah dikurangi dengan hutang. `
// );

// array
// let namaGuru = [];
// function namaBaru(tambahNama, namaGuru) {
//   //   tambahNama = prompt('Masukkan nama guru');
//   namaGuru.push(tambahNama);
//   alert(namaGuru);
// }

// looping
// let a = '';
// let namaGuru = ['jodi', 'indira', 'retno', 'bunga'];
// for (let i = 0; i < namaGuru.length; i++) {
//   console.log(namaGuru[i]);
// }
// let i = 1;
// let a = '';
// while (i <= 10) {
//   a += `Hello World ke-${i}`;
//   a += '\n';
//   i++;
// }
// console.log(a);

// tugas kecil
let saldoAwal = parseInt(prompt('Masukkan saldo awal '));
let saldoTambahan = parseInt(prompt('Masukkan saldo tambahan '));
let hutang = confirm('apakah ada hutang?');
let statusHutang = '';
let saldoAkhir = 0;
hutang
  ? ((hutang = parseInt(prompt('Masukkan jumlah hutang'))), (saldoAkhir = saldoAwal + saldoTambahan - hutang), (statusHutang = `memiliki hutang sebesar Rp.${hutang}`))
  : ((statusHutang = 'tidak memiliki hutang'), (saldoAkhir = saldoAwal + saldoTambahan));

alert(`Saldo awal anda berjumlah Rp.${saldoAwal} lalu saldo tambahan anda berjumlah Rp.${saldoTambahan}, dan anda ${statusHutang} maka saldo akhir anda berjumlah Rp.${saldoAkhir}.`);

let namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
let hari = new Date().getDay();
for (let i = 0; i < namaHari.length; i++) {
  if (hari == i) {
    alert(`Hari ini adalah hari ${namaHari[i]}`);
  }
}
// switch (hari) {
//   case 1:
//     hari = 'Senin';
//     alert(`Hari ini adalah hari ${hari}`);
//     break;
//   case 2:
//     hari = 'Selasa';
//     alert(`Hari ini adalah hari ${hari}`);
//     break;
//   case 3:
//     hari = 'Rabu';
//     alert(`Hari ini adalah hari ${hari}`);
//     break;
//   case 4:
//     hari = 'Kamis';
//     alert(`Hari ini adalah hari ${hari}`);
//     break;
//   case 5:
//     hari = 'Jumat';
//     alert(`Hari ini adalah hari ${hari}`);
//     break;
//   case 6:
//     hari = 'Sabtu';
//     alert(`Hari ini adalah hari ${hari}`);
//     break;
//   default:
//     hari = 'Minggu';
//     alert(`Hari ini adalah hari ${hari}`);
//     break;
// }

// let namaGuru = ['jodi', undefined];

// let nambahNama = function (tambahNama, namaGuru) {
//   if (namaGuru.length == 0) {
//     namaGuru.push(tambahNama);
//     return namaGuru;
//   } else {
//     for (let i = 0; i < namaGuru.length; i++) {
//       if (namaGuru[i] == undefined) {
//         namaGuru[i] = tambahNama;
//         return namaGuru;
//       } else if (i == namaGuru.length - 1) {
//         namaGuru.push(tambahNama);
//         return namaGuru;
//       }
//     }
//   }
// };

// let hapus = function (hapusNama, namaGuru) {
//   for (let i = 0; i < namaGuru.length; i++) {
//     if (hapusNama == namaGuru[i]) {
//       namaGuru[i] = undefined;
//       return namaGuru;
//     }
//   }
// };
