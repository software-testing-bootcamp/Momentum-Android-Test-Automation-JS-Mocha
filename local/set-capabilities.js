const appiumConfig = require('./appium.config').config;
const setCapabilities = (
  host,
  port,
  udid,
  app,
  deviceOs,
  platformVersion,
  deviceName,
  customCaps
) => {
  let caps = {};
  if (customCaps !== null && customCaps !== '' && customCaps !== undefined) {
    caps = JSON.parse(customCaps.replace(/\\"/g, '"'));
  }
  let automationName = '';
  if (deviceOs !== null && deviceOs !== undefined) {
    automationName =
      deviceOs.toLowerCase() === 'ios' ? 'XCUITest' : 'UIAutomator2';
  } else {
    if (deviceOs == 'ios') {
      automationName = 'XCUITest';
    } else {
      automationName = 'UIAutomator2';
    }
  }
  appiumConfig.fullUrl = process.env.RECORDER_FULL_URL;
  appiumConfig.host = host;
  appiumConfig.port = port;
  appiumConfig.capabilities.xcodeOrgId = process.env.XCODEORGID;
  appiumConfig.capabilities.wport = parseInt(port) + 2000;
  appiumConfig.capabilities.wdaLocalPort = appiumConfig.capabilities.wport;
  appiumConfig.capabilities.remoteDebugProxy = appiumConfig.capabilities.wport.toString();
  appiumConfig.capabilities.systemPort = appiumConfig.capabilities.wport;
  appiumConfig.capabilities.udid = udid;
  appiumConfig.capabilities.app = app;
  appiumConfig.capabilities.screenshotQuality = 2;
  appiumConfig.capabilities.platformName = deviceOs;
  appiumConfig.capabilities.automationName = automationName;
  appiumConfig.capabilities.platformVersion = platformVersion;
  appiumConfig.capabilities.deviceName = deviceName;
  for (let cap in caps) {
    if (
      cap !== 'hub' &&
      cap !== 'platformName' &&
      cap !== 'automationName' &&
      cap !== 'app'
    ) {
      appiumConfig.capabilities[cap] = caps[cap];
    }
  }
  return appiumConfig.capabilities;
};

exports.setCapabilities = setCapabilities;
