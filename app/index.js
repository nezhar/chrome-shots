process.on('uncaughtException', (error) => {
    console.error(error);
    process.exit(1);
});

process.on('unhandledRejection', (reason, p) => {
    console.error(reason, p);
    process.exit(1);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const fs = require('fs');
const puppeteer = require('puppeteer');
const filenamify = require('filenamify')

const urls = require('./urls.js');
const devices = require('./devices.js');

(async () => {
    let screenshotDirectory = './screenshots/';
    if (!fs.existsSync(screenshotDirectory)) {
        fs.mkdirSync(screenshotDirectory);
    }

    for (let i = 0, len = devices.length; i < len; i++) {
        let device = devices[i];

        let browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            ignoreHTTPSErrors: true,
            dumpio: false
        });
        let page = await browser.newPage();

        // Set device options
        await page.setViewport({
            width: device.width,
            height: device.height,
            isMobile: device.mobile,
            hasTouch: device.touch,
            deviceScaleFactor: device.deviceScaleFactor
        });
        await page.setUserAgent(device.userAgent)

        let deviceDirectory = screenshotDirectory + filenamify(device.deviceName, {
            replacement: '_'
        }) + '/';
        if (!fs.existsSync(deviceDirectory)) {
            fs.mkdirSync(deviceDirectory);
        }

        for (let j = 0, len = urls.length; j < len; j++) {
            let url = urls[j];
            let imageName = filenamify(url, {
                replacement: '_'
            }) + '.png';

            // Load page and create full page screenshot
            await page.goto(url, {
                waitUntil: 'networkidle2'
            });
            await page.waitForSelector('img');

            await sleep(30000);

            await page.screenshot({
                path: deviceDirectory + imageName,
                fullPage: true
            });
            await browser.close();
        }
    }
})();