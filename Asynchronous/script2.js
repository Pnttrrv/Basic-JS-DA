const token = ~~[Math.random() * 12345678];
const pictures = ['1.jpg', '2.jpg', '3.jpg'];

function login(username, callback) {
  console.log('Processing user now...');

  setTimeout(() => {
    callback({ token, username });
  }, 300);
}

function getUser(token, callback) {
  console.log('Processing apiKey now...');

  if (token)
    setTimeout(() => {
      callback({ apiKey: 'xkey123' });
    }, 500);
}

function getPicture(apiKey, callback) {
  console.log('Processig pictures now...');

  if (apiKey)
    setTimeout(() => {
      callback({ pic: pictures });
    }, 1500);
}

// nested callback
login('Dika', function (response) {
  console.log(response);
  const { token } = response;
  getUser(token, function (response) {
    const { apiKey } = response;
    console.log(apiKey);

    getPicture(apiKey, function (response) {
      const { pic } = response;
      console.log(pic);
    });
  });
});
