function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      //   reject("error message: idk");
    }, ms);
  });
}

async function waitforawhile() {
  sleep(3000)
    .then(() => {
      console.log("hiii");
    })
    .catch((error) => {
      console.error(error);
    });
}

waitforawhile();
