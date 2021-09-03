const path = require('path');
let Momentum = require(path.join(__dirname, '../local/Momentum'));
[Momentum.Library(Id=983)]
//..::PLEASE DO NOT MODIFY THE FIRST 3 LINES::..
const { wd } = require("../setup/v2setup");
const { setCommonMethods } = require("./common.js");
const { DATA, objectFindByKey } = require("./data.js");

var assert = require('assert');
var should = require('should');

var SleepTime = 2000;   
var ElementWaitTime = 8000;   
var AssertionWaitTime = 5000;      

exports.setSearchMethods = (driver) => {

        wd.addPromiseChainMethod ('doSearch', (Keyword) => {
            return driver
                    .sleep(SleepTime)
                    .waitForElementByAccessibilityId("Skip to next screen", ElementWaitTime)
                    .click()
                    .save()
                    .waitForElementByXPath("//android.widget.FrameLayout[@content-desc=\"Search\"]/android.widget.ImageView", ElementWaitTime)
                    .click()
                    .save()
                    .waitForElementById("com.tripadvisor.tripadvisor:id/edtSearchString", ElementWaitTime)
                    .click()
                    .save()
                    .waitForElementById("com.tripadvisor.tripadvisor:id/edtSearchString", ElementWaitTime)
                    .sendKeys(Keyword)
                    .save()
                    .waitForElementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]", ElementWaitTime)
                    .click()
                    .save()
                    .waitForElementByXPath("//android.widget.LinearLayout[@content-desc=\"Hotels\"]/android.view.ViewGroup/android.widget.TextView", ElementWaitTime)
                    .click()
                    .sleep(SleepTime)
                    .save()
                    .elementByIdIfExists("com.tripadvisor.tripadvisor:id/bdlBtnLink", AssertionWaitTime)
                    .then(function (kosullar) {
                        if (kosullar) {
                            return driver
                            .waitForElementById("com.tripadvisor.tripadvisor:id/bdlBtnLink", AssertionWaitTime)
                            .getAttribute("text")
                            .then((text)=> {
                                if(text == "Visit website"){
                                    return true;
                                }else{
                                    return assert.fail("","","Buton bulunamadı !");
                                }
                            })
                        }
                    })
                    .sleep(SleepTime)
        });

    }

            



