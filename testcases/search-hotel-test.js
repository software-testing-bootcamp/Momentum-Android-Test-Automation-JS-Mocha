const driverHelper = require('../local/local-driver');
const path = require('path');
let Momentum = require(path.join(__dirname, '../local/Momentum'));
var driver = {};
process.env.SCREENSHOT_ORDER = 0;


var assert = require('assert');

[Momentum.Section(Id=3404, Title='Testcases')]
[Momentum.Case(Id=14493, Title='Search Hotel Test')]
describe('Case_14493', function () {
    this.timeout(17000000);
  
    before(async function () {
    await driverHelper.getDriver((connector) => {
            driver = connector;
        });            await driver.sleep(3000);
    });

    beforeEach(function () {
        driver.saveScreen(`${this.currentTest.title}_Before`);
    });
    
    afterEach(function () {
        driver.saveScreen(`${this.currentTest.title}_After`);
        return driver.sleep(2000);
    });



    Momentum.Step(Id = 40016, Title = 'Click -> Skip').run(
        it('Step_click_skip', async function () {
            let element_1 = await driver.elementByAccessibilityId("Skip to next screen");
            await element_1.click();
        })
    );

    Momentum.Step(Id = 40017, Title = 'Click -> Search').run(
        it('Step_click_search', async function () {
            let element_3 = await driver.elementByXPath("//android.widget.FrameLayout[@content-desc=\"Search\"]/android.widget.ImageView");
            await element_3.click();
            
        })
    );

    Momentum.Step(Id = 40019, Title = 'Click -> Where To?').run(
        it('Step_click_where_to', async function () {
            let element_7 = await driver.elementById("com.tripadvisor.tripadvisor:id/edtSearchString");
            await element_7.click();
        })
    );

    Momentum.Step(Id = 40020, Title = 'Send Key -> "Antalya"').run(
        it('Step_send_key_antalya', async function () {
            let element_9 = await driver.elementById("com.tripadvisor.tripadvisor:id/edtSearchString");
            await element_9.sendKeys("Antalya");
        })
    );

    Momentum.Step(Id = 40021, Title = 'Click -> 1st item').run(
        it('Step_click_1st_item', async function () {
            let element_11 = await driver.elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]");
            await element_11.click();
        })
    );

    Momentum.Step(Id = 40022, Title = 'Click -> Hotels').run(
        it('Step_click_hotels', async function () {
            let element_13 = await driver.elementByXPath("//android.widget.LinearLayout[@content-desc=\"Hotels\"]/android.view.ViewGroup/android.widget.TextView");
            await element_13.click();
        })
    );

    Momentum.Step(Id = 40025, Title = 'CHECK: Visit Website button exists').run(
        it('Step_check_visit_website_button_exists', async function () {
            
            return driver
    .elementByIdIfExists("com.tripadvisor.tripadvisor:id/bdlBtnLink", 5000)
    .then(function (kosullar) {
        if (kosullar) {
            return driver
                    .waitForElementById("com.tripadvisor.tripadvisor:id/bdlBtnLink", 5000)
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
    .sleep(1000)
        })
    );

  });
