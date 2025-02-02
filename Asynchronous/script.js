const token = ~~[Math.random() * 12345678];
const pictures = ['1.jpg', '2.jpg', '3.jpg'];

function login(username) {
  console.log('Processing user now...');
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != 'dika') {
        failed('wrong data');
      }
      success({ token, username });
    }, 300);
  });
}

function getUser(token) {
  console.log('Processing apiKey now...');
  return new Promise((success, failed) => {
    if (token)
      setTimeout(() => {
        if (!token) {
          failed('Failed to get Token');
        }
        success({ apiKey: 'xkey123' });
      }, 800);
  });
}

function getPicture(apiKey) {
  console.log('Processig pictures now...');
  return new Promise((success, failed) => {
    if (apiKey)
      setTimeout(() => {
        if (!apiKey) {
          failed('Failed to get apiKey');
        }
        success({ pic: pictures });
      }, 1500);
  });
}

// async await
async function userDisplay() {
  try {
    const { token } = await login('dika');
    console.log(token);
    const { apiKey } = await getUser(token);
    console.log(apiKey);
    const { pic } = await getPicture(apiKey);
    console.log(pic);
  } catch (err) {
    console.log(err);
  }
}
userDisplay();

// promise with nested
// const user = login('dika');
// user
//   .then(function (response) {
//     const { token } = response;
//     console.log(token);
//     getUser(token)
//       .then(function (response) {
//         const { apiKey } = response;
//         console.log(apiKey);
//         getPicture(apiKey)
//           .then(function (response) {
//             const { pic } = response;
//             console.log(pic);
//           })
//           .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// nested callback
// login('Dika', function (response) {
//   console.log(response);
//   const { token } = response;
//   getUser(token, function (response) {
//     const { apiKey } = response;
//     console.log(apiKey);

//     getPicture(apiKey, function (response) {
//       const { pic } = response;
//       console.log(pic);
//     });
//   });
// });
