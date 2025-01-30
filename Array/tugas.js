let myArr = [4, 6, 8, , 12, '🦄'];

function tambahAngka(angka, myArr) {
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] == undefined) {
      myArr[i] = angka;
      return myArr;
    }
  }
}
