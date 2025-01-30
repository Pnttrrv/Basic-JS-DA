// let arraySaya = ['👨', '👩', '👶'];
// console.log(arraySaya);

// let arrayKamu = [];
// arrayKamu[0] = '👩‍🦳';
// arrayKamu[1] = '🤴';
// arrayKamu[2] = '🎅';

// console.log(arrayKamu);

// let arrayKita = new Array('👮‍♀️', '🕵️‍♀️');
// console.log(arrayKita);

// let arraySaya = ['alpukat', 'peach', 'mango', 'watermelon', 'apple'];

// const mango = arraySaya.includes('mango');

// if (mango) {
//   const posisiMango = arraySaya.indexOf('mango');
//   const indexBefore = posisiMango - 1;
//   const indexAfter = posisiMango + 1;
//   console.log(`Buah sebelum mangga adalah buah ${arraySaya[indexBefore]}`);
//   console.log(`Buah setelah mangga adalah buah ${arraySaya[indexAfter]}`);
//   const buahAwal = arraySaya.shift();
//   console.log(`Buah awal adalah ${buahAwal}`);
//   const buahAkhir = arraySaya.pop();
//   console.log(`Buah terakhir adalah buah ${buahAkhir}`);
// } else {
//   console.log('Saya tidak tahu posisinya dimana');
// }

// let arraySaya = [];
// arraySaya['alpukat'] = '🥑';
// arraySaya['mango'] = '🥑';
// console.log(arraySaya['alpukat']);

let arraySaya = [
  'alpukat',
  10,
  'mango',
  {
    watermelon: function () {
      console.log('ini tomat');
    },
  },
  ['apple', 'peach'],
];
let newArraySaya = [...arraySaya]; //deep copy with spread ...

// newArraySaya[0] = 'strawberry';

// console.log(arraySaya);

// console.log(newArraySaya[3].watermelon());

const buah1 = ['apel', 'jeruk', 'peach'];
const buah2 = ['semangka', 'anggur', 'mangga'];
const mergeArray = buah1.concat(buah2);

mergeArray.map((value, index) => console.log(value, index));

for (let i = 0; i < mergeArray.length; i++) {
  console.log(i);
}

const datas = [
  {
    nama: 'Dika',
    stack: 'Js',
    age: 27,
  },
  {
    nama: 'susi',
    stack: 'py',
    age: 29,
  },
  {
    nama: 'ryan',
    stack: 'php',
    age: 28,
  },
];

// datas.map((values, index) => {
//   console.log(values.nama, values.stack);
// });

datas
  .sort((a, b) => a.age - b.age)
  .filter((a) => a.age >= 27)
  .map((values, index) => console.log(values));
