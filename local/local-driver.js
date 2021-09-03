const wd = require('wd');
const fs = require('fs');
const capabilityHelper = require('./set-capabilities');
const host = 'hub.mobven.com';
const port = 6008;
const udid = '9889db435748394e39';
const app = 'http://farm.mobven.com:9096/sample-calculator-app.apk';
const deviceOs = 'android';
const platformVersion = '8.0';
const deviceName = '9889db435748394e39';
const customCaps = '';

var driver = wd.promiseChainRemote(host, port);
var caps = capabilityHelper.setCapabilities(
  host,
  port,
  udid,
  app,
  deviceOs,
  platformVersion,
  deviceName,
  customCaps 
);
driver.saveScreen = function (fileName) {
  setTimeout(() => {
    var screenShotCasePath = `/Users/demo/Desktop/local_mocha/scr`;
    this.takeScreenshot().then(function (image) {
        process.env.SCREENSHOT_ORDER++;
        var filePath = `${screenShotCasePath}/${process.env.SCREENSHOT_ORDER}_${fileName}.png`;
        fs.writeFile(filePath, image, 'base64', function (err) {
        })
    })
  }, 1500);

}
exports.getDriver = async (cb) => {
  await driver.init(caps).then(() => {
    cb(driver);
  });
};
