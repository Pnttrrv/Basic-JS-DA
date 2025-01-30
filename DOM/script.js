document.title = 'ZZZ';

const body = document.body;
// const h1 = document.createElement('h1');
// const namaSaya = document.createElement('p');
// const namaKamu = document.createElement('b');

// namaKamu.innerText = '<marquee>Indira</marquee>';
// namaSaya.innerHTML = '<marquee>Andhika Putra</marquee>';
// h1.textContent = '<marquee>Anjay ini h1</marquee>';

// body.append(h1);
// body.append(namaSaya);
// body.append(namaKamu);

const btn1 = document.getElementById('btn1');
const btn2 = document.querySelector('.btn2');

const textAwal = 'Click Saya 1';
btn1.innerHTML = textAwal;
btn1.style.border = 'none';
btn1.style.padding = '8px';
btn1.style.fontSize = '24px';
btn1.style.backgroundColor = 'tomato';

btn2.style.border = 'none';
btn2.style.padding = '8px';
btn2.style.fontSize = '24px';
btn2.style.backgroundColor = 'salmon';

function epenKlik() {
  btn1.style.backgroundColor = 'lightblue';
}

function mouseMasuk() {
  btn1.innerHTML = 'Lain - Lain';
}

function mouseKeluar() {
  btn1.innerHTML = textAwal;
}
function klik() {
  return alert('aku diclick');
}

const namaSaya = document.createElement('h1');

function mosEnter() {
  namaSaya.innerHTML = 'Anjay bisa muncul nih';
  body.append(namaSaya);
}

function mosout() {
  namaSaya.innerHTML = 'Jiahhh berubah warna pula hahaha';
  namaSaya.style.color = 'red';
}
