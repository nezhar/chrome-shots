process.on('uncaughtException', (error) => {
    console.error(error);
    process.exit(1);
});

process.on('unhandledRejection', (reason, p) => {
    console.error(reason, p);
    process.exit(1);
});

const fs = require('fs');
const puppeteer = require('puppeteer');
const filenamify = require('filenamify')

const urls = require('./urls.js');
const devices = require('./devices.js');

(async () => {
    let screenshotDirectory = './screenshots/';
    if (!fs.existsSync(screenshotDirectory)){
        fs.mkdirSync(screenshotDirectory);
    }

    let browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    let page = await browser.newPage();

    for (let i = 0, len = devices.length; i < len; i++) {
      let device = devices[i];

      // Set device options
      await page.setViewport({
          width: device.width,
          height: device.height,
          isMobile: device.mobile,
          hasTouch: device.touch,
          deviceScaleFactor: device.deviceScaleFactor
      });
      await page.setUserAgent(device.userAgent)

      let deviceDirectory = screenshotDirectory + filenamify(device.deviceName, {replacement: '_'}) + '/';
      if (!fs.existsSync(deviceDirectory)){
          fs.mkdirSync(deviceDirectory);
      }

      for (let j = 0, len = urls.length; j < len; j++) {
          let url = urls[j];
          let imageName = filenamify(url, {replacement: '_'}) + '.png';

          // Load page and create full page screenshot
          await page.goto(url, {waitUntil: 'networkidle2'});
          await page.screenshot({path: deviceDirectory + imageName, fullPage: true});
      }
    }

    await browser.close();
})();
