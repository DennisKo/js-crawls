const chromium = require('chrome-aws-lambda');
const puppeteer = process.env.IS_LOCAL
  ? require('puppeteer')
  : require('puppeteer-core');

module.exports.handler = async (event, context) => {
  let result = null;
  let browser = null;
  browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
  });

  let page = await browser.newPage();
  console.log(event);
  await page.goto(event.body.url, {
    waitUntil: 'networkidle2',
  });

  result = await page.content();

  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };

  return response;
};
