const path = require('path');
let Momentum = require(path.join(__dirname, '../local/Momentum'));
[Momentum.Library(Id=982)]
//..::PLEASE DO NOT MODIFY THE FIRST 3 LINES::..
const { wd } = require("../setup/v2setup");

var assert = require('assert');
var should = require('should');

var STOP_ON_ERROR = true;

var DEFAULT_TIMEOUT=8000;
var DEFAULT_TIMEOUT_MID=3000;
var DEFAULT_TIMEOUT_MIN=1000;
                  
exports.setCommonMethods = (driver) => {

    wd.addPromiseChainMethod('save', () => {
        return driver.saveScreen()
    });

    wd.addPromiseChainMethod('resetApplication', () => {
        return driver.resetApplication();
    });

    wd.addPromiseChainMethod('swipeUp', () => {
        return driver
                    .getWindowSize()
                    .then((size) => {
                        return driver
                            .swipe({
                                startX: size.width / 2,
                                endX: size.width / 2,
                                startY: size.height * 7 / 10,
                                endY: size.height * 6 / 10,
                                duration: 400
                            })
                    })
                    .sleep(1000)
                    .save()
    })

    wd.addPromiseChainMethod('randomNumber', (min,max) => {
        return Math.floor(Math.random() * (max - min)) + min
    });

    wd.addPromiseChainMethod('randomName', (length) => {

        var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var text = "";
        for (var i = 0; i < length; i++) {
                result += charset[Math.floor(Math.random() * charset.length)];
        }
        
        return text;
    }); 


};

 



