'use strict';

require.extensions['.png'] = function () {
   return null;
 };
 require.extensions['.jpg'] = function () {
   return null;
 };

require('babel-register');
require('babel-polyfill');
require('react-native-mock/mock');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let chaiImmutable = require('chai-immutable');

chai.expect;
chai.use(chaiImmutable);
chai.use(chaiAsPromised);

global.expect = chai.expect;
