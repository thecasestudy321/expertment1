webpackJsonp([189],{169:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a,e,t,i){for(var n=new PIXI.Container,o=new PIXI.filters.ColorMatrixFilter,r=t||!1,l=i||{addArrow:!1,type:"horizontal",scale:1},s=new PIXI.Container,h=0;h<3;++h){var c=h+1,d=PIXI.Sprite.fromFrame("TAP_1"+c);d.x=-d.width/2,d.y=-d.height/2;var p=new PIXI.Container;p.addChild(d),s.addChild(p)}var f=0;if(l.direction)switch(l.direction){case"top":f=-Math.PI/2;break;case"bottom":f=Math.PI/2;break;case"left":f=Math.PI;break;case"right":f=0;break;default:f=0}s.filters=[o];for(var u=0;u<s.children.length;u++){var v=s.children[u];v.scale.x=v.scale.y=2,u<2&&C(v,.75*u)}if(n.addChild(s),l.addArrow){var w,b;if(l.direction){w=PIXI.Sprite.fromFrame("oneArrow"),b=new PIXI.extras.MovieClip([w]);var I=l.scale?l.scale:1;b.scale.x=b.scale.y=I,b.pivot={x:0,y:b.height/2},b.rotation=f}else{w=PIXI.Sprite.fromFrame("NBarrow"),(b=new PIXI.extras.MovieClip([w])).pivot={x:b.width/2,y:b.height/2};var m=l.scale?l.scale:1;b.scale.x=b.scale.y=m,"horizontal"!==(l.type?l.type:"horizontal")&&(b.rotation=Math.PI/2)}n.addChild(b),n.arrow=b,n.addEventListener("hideArrow",function(){b.alpha=0,b.visible=!1}),n.addEventListener("showArrow",function(){b.alpha=1,b.visible=!0})}s.alpha=.4;var x=new PIXI.Graphics;function C(a,e){TweenMax.to(a,1.5,{delay:e,alpha:0,repeat:-1}),TweenMax.to(a.scale,1.5,{x:5,y:5,delay:e,repeat:-1})}return x.beginFill(16776960,0),x.drawRect(-50,-50,100,100),n.addChild(x),n.addEventListener(MouseEvent.MOUSE_OVER,function(){s.alpha=.6}),n.addEventListener(MouseEvent.MOUSE_OUT,function(){s.alpha=.4}),n.addEventListener(TouchEvent.TOUCH_BEGIN,function(){n.emit(n.event.TAP),!r&&n.parent&&n.parent.removeChild(n)}),n.x=a,n.y=e,n.setColor=function(a){var e=a>>16,t=a>>8&255,i=255&a;o._loadMatrix([e,0,0,0,0,0,t,0,0,0,0,0,i,0,0,0,0,0,255,0],!1),s.filters=[o]},n.setRotation=function(a){n.rotation=a},n.showAllDir=function(){if(l.direction)for(var a=0;a<3;a++){var e=new PIXI.Container;e.addChild(PIXI.Sprite.fromFrame("oneArrow")),n.addChild(e),e.pivot={x:0,y:b.height/2},e.rotation=Math.PI/2*(a+1)}else{var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("NBarrow")),n.addChild(t),t.pivot={x:b.width/2,y:b.height/2},t.rotation=n.rotation+Math.PI/2}},n.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&n.scale.set(.6,.6),n}},267:function(a,e,t){"use strict";var i=function(a){return a&&a.__esModule?a:{default:a}}(t(169));nb.substance6013=extendsClass(ScienceMain,{frame0:function(){var a=this,e=a.a0,t=a.a1,n=a.balance,o=a.jiaoDai,r=a.zhen;instance.viewStack.NBONOFF.visible=!1,e.rotate=Math.PI/15,t.rotate=-Math.PI/15;var l=(0,i.default)(0,0),s=[o,r];function h(){o.isReach?r.isReach||(r.addChild(l),r.point=l,"用针扎破贴有胶带的气球"!==a.tip.text&&nb.scienceCommonFun.resetName(a.tip,"用针扎破贴有胶带的气球")):(o.addChild(l),o.point=l,"将胶带贴到气球上"!==a.tip.text&&nb.scienceCommonFun.resetName(a.tip,"将胶带贴到气球上"))}setTimeout(function(){var i=a.toLocal(n.toGlobal(n.p0.position)),o=a.toLocal(n.toGlobal(n.p1.position));e.position=i,t.position=o},500),h();for(var c=0;c<2;c++){var d=a["a"+c],p=s[c];d.ball.jiaoDai.alpha=0,d.ball.zhen.alpha=0,p.startPos={x:p.x,y:p.y},NBDrag.addDrag(p),p.addEventListener(NBDrag.event.START_DRAG,f),p.addEventListener(NBDrag.event.STOP_DRAG,u)}function f(){b(a[this.name+"Txt"],0),"jiaoDai"===this.name?(e.ball.jiaoDai.alpha=.3,t.ball.jiaoDai.alpha=.3):(e.ball.jiaoDai.isReach&&(e.ball.zhen.alpha=.3),t.ball.jiaoDai.isReach&&(t.ball.zhen.alpha=.3))}function u(){NBDrag.removeDrag(this),e.ball[this.name].alpha=0,t.ball[this.name].alpha=0,this.hitTest(e)?v(this,e):this.hitTest(t)?v(this,t):w(this)}function v(i,l){"jiaoDai"===i.name?(l.isJiao=!0,o.isReach=!0,l.ball.jiaoDai.isReach=!0,TweenMax.to(i,.2,{alpha:0}),TweenMax.to(l.ball.jiaoDai,.2,{alpha:1,onComplete:h})):"zhen"===i.name&&(l.isJiao?(r.isReach=!0,TweenMax.to(i,.2,{alpha:0}),TweenMax.to(l.ball.zhen,.2,{alpha:1,onComplete:function(){!function(i){TweenMax.killTweensOf(n),TweenMax.to(n,3,{rotation:i,onUpdate:function(){var i=a.toLocal(n.toGlobal(n.p0.position)),o=a.toLocal(n.toGlobal(n.p1.position));e.position=i,t.position=o}})}(l.rotate),l.ball.play(),l.ball.animationSpeed=.1,l.ball.loop=!1}})):w(i,function(){h(),console.log("isJa")}))}function w(e,t){TweenMax.killTweensOf(e),TweenMax.to(e,.5,{x:e.startPos.x,y:e.startPos.y,ease:Sine.easeInOut,onComplete:function(){NBDrag.addDrag(e),b(a[e.name+"Txt"],1),h(),t&&t()}})}function b(a,e){a.alpha=e}},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"我们已经知道空气确实存在，和水、石头等一样，可以占据空间，那想一想空气有重量吗？",labName:"空气有质量吗？",CONCLUSION:"空气有一定重量，但重量很轻。",newLayOut:!0,bgColor:"#F3E6CF"},const:{},event:{}}),a.exports=nb.substance6013}});