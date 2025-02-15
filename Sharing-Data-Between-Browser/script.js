const circleChannel = new BroadcastChannel('circle_channel');
const jdl = document.querySelector('#judul');
const bulet = document.querySelector('.circle');

// function sendData() {
//   myChannel.postMessage('Halo Browser sebalah');
// }

// myChannel.onmessage = (event) => {
//   jdl.style.display = 'none';
//   console.log(event.data);
// };
function circleMovement(event) {
  const x = event.clientX,
    y = event.clientY;
  bulet.style.left = `${x}px`;
  bulet.style.right = '';
  bulet.style.top = `${y}px`;
  bulet.style.boxShadow = `30px 0px 0px tomato, 60px 0px 0px greenyellow`;

  circleChannel.postMessage({ x, y });
  //   console.log(x, y);
}

circleChannel.onmessage = (event) => {
  bulet.style.right = `${event.data.x}px`;
  bulet.style.left = '';
  bulet.style.top = `${event.data.y}px`;
  bulet.style.boxShadow = `-30px 0px 0px tomato, -60px 0px 0px greenyellow`;

  console.log(event.data.x);
};

addEventListener('mousemove', circleMovement);
