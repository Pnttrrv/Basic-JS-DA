// function addName(firstname, lastname) {
//   console.log(firstname, lastname);

//   //   console.log(arguments);
//   //   for (let i = 0; i < arguments.length; i++) {
//   //     console.log(arguments[i]);
//   //   }
// }

// addName('Dika', 'Putra');
// alert(addName());

// let fullname = function addName(firstname, lastname) {
//   console.log(firstname, lastname);
// };

// fullname('Dika', 'Putra');

// let fullname = new Function('firstname', 'lastname', 'console.log(firstname,lastname)');
// fullname('Dika', 'Putra');

//keyword new function
// let sum1 = new Function('x', 'y', 'console.log(x+y)');
// sum1(5, 5);

// // arrow funcrion
// let sum = (x, y) => {
//   console.log(x + y);
// };
// sum(2, 5);

// Tugas
const body = document.body;
let judul = document.createElement('h1');
judul.innerHTML = 'Perhitungan Luas dan Gaji';
body.append(judul);

let ulang = true;
while (ulang) {
  let tanya = prompt('Masukkan pilihan\n1. Perhitungan Luas\n2. Perhitungan Gaji');
  if (tanya == 1) {
    let tanya2 = prompt('Masukkan pilihan\n1. Luas Lingkaran\n2. Luas Segitiga\n3. Luas Persegi Panjang\n4. Luas Jajargenjang');
    if (tanya2 == 1) {
      let r = prompt('Masukkan jari-jari lingkaran');
      function luasLingkaran(r) {
        const phi = 22 / 7;
        alert(phi * r * r + ' cm persegi');
      }
      luasLingkaran(r);
    } else if (tanya2 == 2) {
      let a = prompt('Masukkan alas');
      let t = prompt('Masukkan tinggi');
      function luasSegitiga(a, t) {
        const L = 1 / 2;
        alert(L * a * t + ' cm');
      }
      luasSegitiga(a, t);
    } else if (tanya2 == 3) {
      let p = prompt('Masukkan panjang');
      let l = prompt('Masukkan lebar');
      let luasPersegiPanjang = (p, l) => {
        alert(p * l + ' cm persegi');
      };
      luasPersegiPanjang(p, l);
    } else if (tanya2 == 4) {
      let a = prompt('Masukkan nilai alas');
      let t = prompt('Masukkan nilai tinggi');
      let luasJajargenjang = new Function('a', 't', "alert(a * t + ' cm')");
      luasJajargenjang(a, t);
    }
  } else if (tanya == 2) {
    let nama = prompt('Masukkan nama');
    let gajiPerhari = parseInt(prompt('Masukkan gaji perhari'));
    let jumlahHariKerja = parseInt(prompt('Masukkan jumlah hari kerja'));
    function gaji(nama, gajiPerhari, jumlahHariKerja) {
      let totalGaji = gajiPerhari * jumlahHariKerja;
      alert(`Nama : ${nama}\nGaji : Rp.${totalGaji}`);
    }
    gaji(nama, gajiPerhari, jumlahHariKerja);
  } else {
    alert('Input tidak valid!');
  }
  ulang = confirm('Ulang ?');
}
