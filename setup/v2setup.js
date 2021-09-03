const wd = require('wd');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

exports.wd=wd;
