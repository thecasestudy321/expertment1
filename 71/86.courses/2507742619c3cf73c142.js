webpackJsonp([86],{1044:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1045),i=function(e){return e&&e.__esModule?e:{default:e}}(o),r={};r.video=i.default,t.default=r},1045:function(e,t,n){e.exports=n.p+"4dd6d8b2274e8997fda95b3775a8ca16.mp4"},397:function(e,t,n){"use strict";(function(e){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Instance=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(o)},s=n(1044),u=function(e){return e&&e.__esModule?e:{default:e}}(s);t.Instance=function(t){function n(){o(this,n);var e=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.init.apply(e,arguments),e}return r(n,t),a(n,[{key:"frame0",value:function(){var t=this;$("#bgDiv").css("background","rgb(59, 72, 91)"),t.title.y=0,t.title.x=t.width/2+t.title.width/1.8;var n=PIXI.Texture.fromVideoUrl({src:u.default.video,mime:"video/mp4"});e.te=n;var o=new PIXI.Sprite(n);t.videoCon.addChild(o),t.videoCon.alpha=0,n.baseTexture.source.loop=!0,n.baseTexture.source.autoplay=!0,o.width=3590,o.height=2020,o.x=-o.width/2+150,o.y=-o.height/2,nb.commonFunc.initMicroscope(t,[{texture:"slide3",name:"草履虫临时装片",nbsID:"0145/model_slide1",slTexture:"sl.png",container:t.videoCon}]),t.off().on("loaded",function(){setTimeout(function(){instance.NBStepsShow(!0,instance.W/1.8,instance.H/1.45),instance.NBDownTip.showTip("点击装片按钮"),t.step0=!0,t.off("loaded")},2e3)}),t.off().on("loadSlide",function(){n.baseTexture.source.load(),instance.NBDownTip.hideTip(),instance.NBStepsShow(!1),setTimeout(function(){t.step2=!0,t.off("loadSlide"),instance.NBDownTip.showTip("点击自动调节到最佳"),instance.NBStepsShow(!0,instance.W/1.7,instance.H/4)},500)}),t.off().on("autoBtn",function(){instance.NBDownTip.hideTip(),instance.NBStepsShow(!1),setTimeout(function(){t.step3=!0,t.off("autoBtn"),instance.NBDownTip.showTip("点击全屏视野"),instance.NBStepsShow(!0,instance.W/1.7,instance.H/10)},300)}),t.off().on("last",function(){instance.NBDownTip.hideTip(),instance.NBStepsShow(!1),t.step4=!0,instance.NBDownTip.visibleHide(),instance.lateHide(),t.off("last")}),t.on(TouchEvent.TAP,function(){instance.NBStepsShow(!1),instance.NBDownTip.hideTip()})}},{key:"start",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"start",this).call(this),this.gotoStep("frame0")}}]),n}(nb.stem.STEMMain)}).call(t,n(1))}});