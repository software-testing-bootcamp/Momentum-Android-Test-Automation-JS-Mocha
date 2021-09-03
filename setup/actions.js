"use strict";
var wd = require('wd'),
    Q = require('q');

exports.swipe = function (opts) {
  var action = new wd.TouchAction();
  action
    .press({x: opts.startX, y: opts.startY})
    .wait(opts.duration)
    .moveTo({x: opts.endX, y: opts.endY})
    .release();
  return this.performTouchAction(action);
};

exports.dragobject = function (opts) {
  var action = new wd.TouchAction();
  action
    .press({x: opts.startX, y: opts.startY})
    .moveTo({x: opts.endX, y: opts.endY})
    .release();
  return this.performTouchAction(action);
};

exports.dragObjectByElement = function (opts) {
  var action = new wd.TouchAction();
  action
    .longPress({el: opts.el})
    .moveTo({x: opts.x, y: opts.y})
    .release();
  return this.performTouchAction(action);
};

exports.longPressElement = function (opts) {
  var action = new wd.TouchAction();
  action
    .longPress({el: opts.el})
    .release();
  return this.performTouchAction(action);
};

exports.swipeUpObjectByElement = function (opts) {
  var action = new wd.TouchAction();
  action
    .longPress({el: opts.el})
    .moveTo({x: 0, y: 0})
    .moveTo({x: opts.x ? opts.x : 0, y: opts.y ? opts.y : 0})
    .release();
  return this.performTouchAction(action);
};

exports.tap = function (el) {
  var action = new wd.TouchAction();
  return action.tap(el).perform()
};

//exports.doubleTap = function (opts){
//  var multiTouch = new wd.MultiTouchAction();
//  var  action1 = press({x: opts.startX, y: opts.startY}); 
//  var action2 = press({x: opts.endX, y: opts.endY});
//return multiAction().add(action1).add(action2).perform()
//};

exports.touch = function(opts){
  var action = new wd.TouchAction();
  action 
     .press(opts)
     .release();
  return this.performTouchAction(action);
};

exports.pinch = function (el) {
  return Q.all([
    el.getSize(),
    el.getLocation(),
  ]).then(function (res) {
    var size = res[0];
    var loc = res[1];
    var center = {
      x: loc.x + size.width / 2,
      y: loc.y + size.height / 2
    };
    var a1 = new wd.TouchAction(this);
    a1.press({el: el, x: center.x, y: center.y - 100}).moveTo({el: el}).release();
    var a2 = new wd.TouchAction(this);
    a2.press({el: el, x: center.x, y: center.y + 100}).moveTo({el: el}).release();
    var m = new wd.MultiAction(this);
    m.add(a1, a2);
    return m.perform();
  }.bind(this));
};

exports.zoom = function (el) {
  return Q.all([
    this.getWindowSize(),
    this.getLocation(el),
  ]).then(function (res) {
    var size = res[0];
    var loc = res[1];
    var center = {
      x: loc.x + size.width / 2,
      y: loc.y + size.height / 2
    };
    var a1 = new wd.TouchAction(this);
    a1.press({el: el}).moveTo({el: el, x: center.x, y: center.y - 100}).release();
    var a2 = new wd.TouchAction(this);
    a2.press({el: el}).moveTo({el: el, x: center.x, y: center.y + 100}).release();
    var m = new wd.MultiAction(this);
    m.add(a1, a2);
    return m.perform();
  }.bind(this));
};


var http = require('http');
var sendRequest;


sendRequest = function (driver, host, port, message) {
    var options = {
        host: host,
        port: port,
        path: '/?device_id=' + process.env.device_id + '&message=' + message
    };

    http.get(options, function (res) {
        //console.log("Got response: " + res.statusCode);
    }).on('error', function (e) {
        //console.log("Got error: " + e.message);
    })
    return driver;
}

exports.adbSendKeys = function(message){

	var ports = [4001, 4002, 4003];

	for(var i in ports){
		sendRequest(wd, process.env.host, ports[i], message);
	}
}
