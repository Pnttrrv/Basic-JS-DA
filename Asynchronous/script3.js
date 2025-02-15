const token = ~~[Math.random() * 12345678];
const pictures = ['1.jpg', '2.jpg', '3.jpg'];

function login(username) {
  console.log('Proccessing user data now...');
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != 'zia') {
        failed('Wrong username');
      }
      success({ token, username });
    }, 300);
  });
}

function getUser(token) {
  console.log('Proccessing apiKey now...');
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!token) {
        failed('Token empty, cannot access!');
      }
      success({ apiKey: 'xkey123456' });
    }, 800);
  });
}

function getPicture(apiKey) {
  console.log('Proccessing user pictures now...');
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!apiKey) {
        failed('apiKey empty, cannot access');
      }
      success({ pic: pictures });
    }, 1500);
  });
}

async function displayUser() {
  try {
    const { token } = await login('zia');
    console.log(token);
    const { apiKey } = await getUser(token);
    console.log(apiKey);
    const { pic } = await getPicture(apiKey);
    console.log(pic);
  } catch (err) {
    console.log(err);
  }
}

displayUser();
