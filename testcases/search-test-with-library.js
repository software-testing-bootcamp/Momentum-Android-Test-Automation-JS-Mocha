const driverHelper = require('../local/local-driver');
const path = require('path');
let Momentum = require(path.join(__dirname, '../local/Momentum'));
var driver = {};
process.env.SCREENSHOT_ORDER = 0;


const {DATA} = require('../Libraries/data.js');
const {setCommonMethods} = require('../Libraries/common.js');
const {setSearchMethods} = require('../Libraries/searchPage.js');
var assert = require('assert');

[Momentum.Section(Id=3404, Title='Testcases')]
[Momentum.Case(Id=14494, Title='Search Test (with Library)')]
describe('Case_14494', function () {
    this.timeout(17000000);
  
    before(async function () {
    await driverHelper.getDriver((connector) => {
            driver = connector;
        });            setCommonMethods(driver);
            setSearchMethods(driver);
    });

    beforeEach(function () {
        driver.saveScreen(`${this.currentTest.title}_Before`);
    });
    
    afterEach(function () {
        driver.saveScreen(`${this.currentTest.title}_After`);
    });



    Momentum.Step(Id = 40034, Title = 'Search Hotel Test').run(
        it('Step_search_hotel_test', async function () {
            //SABIT DATA
            //return driver.doSearch(DATA.SearchText);
            
            //HER CIHAZA FARKLI DATA
            return driver.doSearch(DATA.SearchTextList[process.env.device_index]);
        })
    );

  });
