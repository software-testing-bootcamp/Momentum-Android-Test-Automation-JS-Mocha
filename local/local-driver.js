const wd = require('wd');
const fs = require('fs');
const capabilityHelper = require('./set-capabilities');
const host = '127.0.0.1';
const port = 4723;
const udid = 'emulator-5554';
const app = '/Users/ozgur.kaya/Downloads/SoftwareTestingBootcamp/1/Tripadvisor v43.4.apk';
const deviceOs = 'android';
const platformVersion = '10.0';
const deviceName = 'emulator-5554';
const customCaps = '{"appPackage":"com.tripadvisor.tripadvisor","appActivity":"com.tripadvisor.android.ui.launcher.LauncherActivity","fullReset":"true","noReset":"false","autoGrantPermissions":"true"}';

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
