var fetch = require('node-fetch');

const lambdaUrl = LAMBDA_URL;
const urlArray = [];
const numUrls = 1000;

for (var i = 0; i < numUrls; i++) {
  urlArray.push(TEST_URL);
}
console.time('test');

const crawl = async () => {
  Promise.all(
    urlArray.map(async url => {
      try {
        const response = await fetch(lambdaUrl, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url }),
        });
        const json = await response.json();
        return json;
      } catch (error) {
        console.log(error);
      }
    })
  ).then(values => {
    console.log(values);
    console.timeEnd('test');
  });
};

crawl();
