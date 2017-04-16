(function(a){
    var Tween = {
        Linear: function(t, b, c, d) { return c*t/d + b; },
        Quad: {
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOut: function(t, b, c, d) {
                return -c *(t /= d)*(t-2) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t + b;
                return -c / 2 * ((--t) * (t-2) - 1) + b;
            }
        },
        Cubic: {
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOut: function(t, b, c, d) {
                return c * ((t = t/d - 1) * t * t + 1) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t*t + b;
                return c / 2*((t -= 2) * t * t + 2) + b;
            }
        },
        Quart: {
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t * t*t + b;
            },
            easeOut: function(t, b, c, d) {
                return -c * ((t = t/d - 1) * t * t*t - 1) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
                return -c / 2 * ((t -= 2) * t * t*t - 2) + b;
            }
        },
        Quint: {
            easeIn: function(t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOut: function(t, b, c, d) {
                return c * ((t = t/d - 1) * t * t * t * t + 1) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
                return c / 2*((t -= 2) * t * t * t * t + 2) + b;
            }
        },
        Sine: {
            easeIn: function(t, b, c, d) {
                return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
            },
            easeOut: function(t, b, c, d) {
                return c * Math.sin(t/d * (Math.PI/2)) + b;
            },
            easeInOut: function(t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t/d) - 1) + b;
            }
        },
        Expo: {
            easeIn: function(t, b, c, d) {
                return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
            },
            easeOut: function(t, b, c, d) {
                return (t==d) ? b + c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
            },
            easeInOut: function(t, b, c, d) {
                if (t==0) return b;
                if (t==d) return b+c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        },
        Circ: {
            easeIn: function(t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOut: function(t, b, c, d) {
                return c * Math.sqrt(1 - (t = t/d - 1) * t) + b;
            },
            easeInOut: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            }
        },
        Elastic: {
            easeIn: function(t, b, c, d, a, p) {
                var s;
                if (t==0) return b;
                if ((t /= d) == 1) return b + c;
                if (typeof p == "undefined") p = d * .3;
                if (!a || a < Math.abs(c)) {
                    s = p / 4;
                    a = c;
                } else {
                    s = p / (2 * Math.PI) * Math.asin(c / a);
                }
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOut: function(t, b, c, d, a, p) {
                var s;
                if (t==0) return b;
                if ((t /= d) == 1) return b + c;
                if (typeof p == "undefined") p = d * .3;
                if (!a || a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                } else {
                    s = p/(2*Math.PI) * Math.asin(c/a);
                }
                return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
            },
            easeInOut: function(t, b, c, d, a, p) {
                var s;
                if (t==0) return b;
                if ((t /= d / 2) == 2) return b+c;
                if (typeof p == "undefined") p = d * (.3 * 1.5);
                if (!a || a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                } else {
                    s = p / (2  *Math.PI) * Math.asin(c / a);
                }
                if (t < 1) return -.5 * (a * Math.pow(2, 10* (t -=1 )) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p ) * .5 + c + b;
            }
        },
        Back: {
            easeIn: function(t, b, c, d, s) {
                if (typeof s == "undefined") s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOut: function(t, b, c, d, s) {
                if (typeof s == "undefined") s = 1.70158;
                return c * ((t = t/d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOut: function(t, b, c, d, s) {
                if (typeof s == "undefined") s = 1.70158;
                if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                return c / 2*((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
            }
        },
        Bounce: {
            easeIn: function(t, b, c, d) {
                return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
            },
            easeOut: function(t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                }
            },
            easeInOut: function(t, b, c, d) {
                if (t < d / 2) {
                    return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
                } else {
                    return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
                }
            }
        }
    };
    Math.tween = Tween;
    Math.animation = function (from, to, duration, easing, callback,cb2) {
        var isUndefined = function (obj) {
            return typeof obj == 'undefined';
        };
        var isFunction = function (obj) {
            return typeof obj == 'function';
        };
        var isNumber = function(obj) {
            return typeof obj == 'number';
        };
        var isString = function(obj) {
            return typeof obj == 'string';
        };

        // 转换成毫秒
        var toMillisecond = function(obj) {
            if (isNumber(obj)) {
                return     obj;
            } else if (isString(obj)) {
                if (/\d+m?s$/.test(obj)) {
                    if (/ms/.test(obj)) {
                        return 1 * obj.replace('ms', '');
                    }
                    return 1000 * obj.replace('s', '');
                } else if (/^\d+$/.test(obj)) {
                    return +obj;
                }
            }
            return -1;
        };

        if (!isNumber(from) || !isNumber(to)) {
            if (window.console) {
                console.error('from和to两个参数必须且为数值');
            }
            return 0;
        }

        // 缓动算法
        var tween = Math.tween || window.Tween;

        if (!tween) {
            if (window.console) {
                console.error('缓动算法函数缺失');
            }
            return 0;
        }

        // duration, easing, callback均为可选参数
        // 而且顺序可以任意
        var options = {
            duration: 300,
            easing: 'Linear',
            callback: function() {}
        };

        var setOptions = function(obj) {
            if (isFunction(obj)) {
                options.callback = obj;
            } else if (toMillisecond(obj) != -1) {
                options.duration = toMillisecond(obj);
            } else if (isString(obj)) {
                options.easing = obj;
            }
        };
        setOptions(duration);
        setOptions(easing);
        setOptions(callback);

        // requestAnimationFrame的兼容处理
        if (!window.requestAnimationFrame) {
            requestAnimationFrame = function(fn) {
                setTimeout(fn, 17);
            };
        }

        // 算法需要的几个变量
        var start = 0;
        // during根据设置的总时间计算
        var during = Math.ceil(options.duration / 17);

        // 当前动画算法
        var arrKeyTween = options.easing.split('.');
        var fnGetValue;

        if (arrKeyTween.length == 1) {
            fnGetValue = tween[arrKeyTween[0]];
        } else if (arrKeyTween.length == 2) {
            fnGetValue = tween[arrKeyTween[0]][arrKeyTween[1]];
        }

        // 运动
        var step = function() {
            // 当前的运动位置
            var value = fnGetValue(start, from, to - from, during);

            // 时间递增
            start++;
            // 如果还没有运动到位，继续
            if (start <= during) {
                options.callback(value);
                requestAnimationFrame(step);
            } else {
                // 动画结束，这里可以插入回调...
                options.callback(to, true);
                cb2();
            }
        };
        // 开始执行动画
        step();
    };
    $.fn.extend({
        fiHandler:function(e){
            e.stopPropagation();
            this.removeClass("opacity "+this.tp.cls);
            if(this.tp.cb){this.tp.cb();};
            this.off("webkitAnimationEnd",this.fiHandler);
            this.tp.cb = undefined;
            this.tp.duration = this.tp.cls = "";
        },
        foHandler:function(e){
            e.stopPropagation();
            this.addClass("none").removeClass(this.tp.cls);
            if(this.tp.cb){this.tp.cb();};
            this.off("webkitAnimationEnd",this.foHandler);
            this.tp.cb = undefined;
            this.tp.duration = this.tp.cls = "";
        },
        fi:function(cb){
            this.tp = {
                cb:undefined,
                duration:"",
                cls:""
            };
            this.tp.cls = "ani-fadeIn";
            if(arguments){
                for(var prop in arguments){
                    switch(typeof arguments[prop]){
                        case "function":
                            this.tp.cb = arguments[prop];
                            break;
                        case "number":
                            this.tp.duration = arguments[prop];
                            this.tp.cls += this.tp.duration;
                            break;
                    }
                }
            }
            this.on("webkitAnimationEnd",this.fiHandler.bind(this)).addClass("opacity "+this.tp.cls).removeClass("none");
            return this;
        },
        fo:function(cb){
            this.tp = {
                cb:undefined,
                duration:"",
                cls:""
            };
            this.tp.cls = "ani-fadeOut";
            if(arguments){
                for(var prop in arguments){
                    switch(typeof arguments[prop]){
                        case "function":
                            this.tp.cb = arguments[prop];
                            break;
                        case "number":
                            this.tp.duration = arguments[prop];
                            this.tp.cls += this.tp.duration;
                    }
                }
            }
            this.on("webkitAnimationEnd",this.foHandler.bind(this)).addClass(this.tp.cls);
            return this;
        }
    });
    var Utils = new function(){
        this.preloadImage = function(ImageURL,callback,realLoading){
            var rd = realLoading||false;
            var i,j,haveLoaded = 0;
            for(i = 0,j = ImageURL.length;i<j;i++){
                (function(img, src) {
                    img.onload = function() {
                        haveLoaded+=1;
                        var num = Math.ceil(haveLoaded / ImageURL.length* 100);
                        if(rd){
                            $(".num").html("- "+num + "% -");
                        }
                        if (haveLoaded == ImageURL.length && callback) {
                            setTimeout(callback, 500);
                        }
                    };
                    img.onerror = function() {};
                    img.onabort = function() {};

                    img.src = src;
                }(new Image(), ImageURL[i]));
            }
        },//图片列表,图片加载完后回调函数，是否需要显示百分比
            this.lazyLoad = function(){
                var a = $(".lazy");
                var len = a.length;
                var imgObj;
                var Load = function(){
                    for(var i=0;i<len;i++){
                        imgObj = a.eq(i);
                        imgObj.attr("src",imgObj.attr("data-src"));
                    }
                };
                Load();
            },//将页面中带有.lazy类的图片进行加载
            this.browser = function(t){
                var u = navigator.userAgent;
                var u2 = navigator.userAgent.toLowerCase();
                var p = navigator.platform;
                var browserInfo = {
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                    iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                    iPad: u.indexOf('iPad') > -1, //是否iPad
                    webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                    iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
                    weixin: u2.match(/MicroMessenger/i) == "micromessenger",
                    taobao: u.indexOf('AliApp(TB') > -1,
                    win: p.indexOf("Win") == 0,
                    mac: p.indexOf("Mac") == 0,
                    xll: (p == "X11") || (p.indexOf("Linux") == 0),
                    ipad: (navigator.userAgent.match(/iPad/i) != null) ? true : false
                };
                return browserInfo[t];
            },//获取浏览器信息
            this.g=function(id){
                return document.getElementById(id);
            },
            this.E=function(selector,type,handle){
                $(selector).on(type,handle);
            }
    };
    var Media = new function(){
        this.mutedEnd = false;
        this.WxMediaInit=function(){
            var _self = this;
            if(!Utils.browser("weixin")){
                this.mutedEnd = true;
                return;
            }
            if(!Utils.browser("iPhone")){
                _self.mutedEnd = true;
                return;
            }
            document.addEventListener("WeixinJSBridgeReady",function(){
                var $media = $(".iosPreload");
                $.each($media,function(index,value){
                    _self.MutedPlay(value["id"]);
                    if(index+1==$media.length){
                        _self.mutedEnd = true;
                    }
                });
            },false)
        },
        this.MutedPlay=function(string){
            var str = string.split(",");//id数组
            var f = function(id){
                var media = Utils.g(id);
                media.volume = 0;
                media.play();
                // setTimeout(function(){
                media.pause();
                media.volume = 1;
                media.currentTime = 0;
                // },100)
            };
            if(!(str.length-1)){
                f(str[0]);
                return 0;
            }
            str.forEach(function(value,index){
                f(value);
            })
        },
        this.playMedia=function(id){
            var _self = this;
            var clock = setInterval(function(){
                if(_self.mutedEnd){
                    Utils.g(id).play()
                    clearInterval(clock);
                }
            },20)
        }
    };
    Media.WxMediaInit();
    var Main = function(){
        this.clockSwitch;

        this.pages = ["pact",""];

        this.touch ={
            ScrollObj:undefined,
            isScroll:false,
            limitUp:0,
            limitDown:undefined,
            overlimit:false,
            StartY:0,
            NewY:0,
            addY:0,
            scrollY:0,
            touchAllow:true
        };
        
        this.Str = [
            "1在着阳光明媚的春天里，我的眼泪不住地流淌，也许有一天，我老无所依，请把我留在，在那时光里",
            "2如果有一天，我悄然离去，请把我埋在，在这春天里",
            "3如果有一天，我老无所依，请把我留在，在这春天里，如果有一天，我悄然离去，请把我埋在，在这春天里，春天里……"
        ];
        
        this.printer = {
            printStr:"",
            printLen:0,
            $container:undefined,
            now:0
        };

        this.bgm ={
            obj:document.getElementById("bgm"),
            id:"bgm",
            isPlay:false,
            button:$(".music-btn")
        };

        this.picUrl = "images/";//图片路径

        this.ImageList = [];

        this.gameData = {
            success:false,
            haveFind : ["","",""],//底部的秘籍
            prize:["toolBar-icon1","toolBar-icon2","toolBar-icon3"],
        };
        this.block1 = {
            success:false,
            str:[""],
            haveFind :[],
            prize:"toolBar-icon1"
        };

        this.krpano = document.getElementById("krpanoSWFObject");

        this.V = {
            id:"video",
            currentTime:0,
            isPlay:false
        };

        this.init();
    };
    Main.prototype = {
        init:function(){
            console.log("init");
        },
        lazyLoad : function(){
            var a = $(".lazy");
            var len = a.length;
            var imgObj;
            var Load = function(){
                for(var i=0;i<len;i++){
                    imgObj = a.eq(i);
                    imgObj.attr("src",imgObj.attr("data-src"));
                }
            };
            Load();
        },//将页面中带有.lazy类的图片进行加载
        limitNum:function(obj){//限制11位手机号
            var value = $(obj).val();
            var length = value.length;
            //假设长度限制为10
            if(length>11){
                //截取前10个字符
                value = value.substring(0,11);
                $(obj).val(value);
            }
        },
        print:function(string,$obj,speed,callback){
            var _self = this;
            _self.printer.$container = $obj;
            _self.printer.printStr = string;
            _self.printer.printLen = _self.printer.printStr.length;

            _self.clockSwitch = setInterval(function(){
                _self.printer.$container[0].innerHTML +=_self.printer.printStr[_self.printer.now];
                _self.printer.now+=1;
                if(_self.printer.now == _self.printer.printLen-1){
                    setTimeout(function(){
                        callback();
                    },500);
                    clearInterval(_self.clockSwitch);
                    _self.clockSwitch = undefined;
                }
                
            },speed);
            
        },
        test:function(){
            // this.print(this.Str[0],$(".op-printer"),100,function(){
            //     $(".P_test").fo(800);
            //     $(".P_vr").fi(800);
            // })
            console.log("我是test");
            var _self = this;
            setTimeout(function(){
                _self.p1leave();
                _self.pvr();
            },1000);
        },
        p1leave:function(){
            $(".P_bg").fo();
        },
        pvr:function(){
            this.banTouchVr();
            var _self = this;
            $(".P_vr").fi(function(){
                // setTimeout(function(){
                //     $(".toolBar").addClass("ani-bar");
                // },1000)
            });
            this.krpano.call("loadscene(scene_2,null,get(skin_settings.loadscene_flags),get(skin_settings.loadscene_blend))");
            this.rotateView();
        },
        enterVR:function(){

        },
        rotateView:function(){
            var _self = this;
            setTimeout(function(){
                Math.animation(0,
                               360,
                               6500,
                               'Sine.easeInOut',
                               function (value) {
                                   _self.krpano.call("set(view[v2].hlookat,'"+value+"');");
                               },
                               function(){
                                   console.log("视角转动结束");
                                   _self.allowTouchVr();
                                       $(".toolBar").addClass("ani-bar");
                               }
                );
            },1000);

        },
        banTouchVr:function(){
            $(".P_banTouch").removeClass("none");
        },
        allowTouchVr:function(){
            $(".P_banTouch").addClass("none");
        },
        hotspotClick:function(n){
            switch(n){
                case "21":
                    // this.krpano.call("set(hotspot[block4_1_l].visible,true)");
                    this.krpano.call("set(hotspot[block2_1_l].alpha,1)");
                    break;
                case "22":
                    // this.krpano.call("set(hotspot[block4_1_l].visible,true)");
                    this.krpano.call("set(hotspot[block2_2_l].alpha,1)");
                    break;
                case "23":
                    // this.krpano.call("set(hotspot[block4_1_l].visible,true)");
                    this.krpano.call("set(hotspot[block2_3_l].alpha,1)");
                    break;
                case "24":
                    // this.krpano.call("set(hotspot[block4_1_l].visible,true)");
                    this.krpano.call("set(hotspot[block2_4_l].alpha,1)");
                    break;
                case "41":
                    // this.krpano.call("set(hotspot[block4_1_l].visible,true)");
                    this.krpano.call("set(hotspot[block4_1_l].alpha,1)");
                    break;
                case "42":
                    // this.krpano.call("set(hotspot[block4_1_l].visible,true)");
                    this.krpano.call("set(hotspot[block4_2_l].alpha,1)");
                    break;
                case "43":
                    // this.krpano.call("set(hotspot[block4_1_l].visible,true)");
                    this.krpano.call("set(hotspot[block4_3_l].alpha,1)");
                    break;
            }
        },
        iCon:function(n){
            console.log(n);
            switch(n){
                case "1":
                    $(".ruller").removeClass("none");
                    $(".P_layer").fi();
                    break;
            }
        },
        start:function(){

        },
        scrollInit:function(selector,start){
            this.touch.ScrollObj = $(selector);
            this.touch.StartY = 0;
            this.touch.NewY = 0;
            this.touch.addY = 0;
            this.touch.scrollY = 0;
            this.touch.limitDown = this.touch.ScrollObj.height()<start?0:(start-this.touch.ScrollObj.height());
        },
        playbgm:function(){
            Media.playMedia(this.bgm.obj.id)
            this.bgm.button.addClass("ani-bgmRotate");
            this.bgm.isPlay = true;
        },
        pausebgm:function(){
            this.bgm.obj.pause();
            this.bgm.button.removeClass("ani-bgmRotate");
            this.bgm.isPlay = false;
        },
        addEvent:function(){

            var _self = this;
            document.ontouchmove = function(e){e.preventDefault();};
            $(".txtBox").on("touchend",function () {
                $(this).fo(function(){
                    $(".P_layer").addClass("none");
                });
            });
            $(document).on("webkitAnimationEnd",function(e){
                console.log(e)
            });
            $(window).on("orientationchange",function(e){
                if(window.orientation == 0 || window.orientation == 180 )
                {
                    $(".hp").hide();
                }
                else if(window.orientation == 90 || window.orientation == -90)
                {
                    $(".hp").show();
                }
            });
        },
        easeInOut:function(nowTime,startPosition,delta,duration){
            return 1 > (nowTime /= duration / 2) ? delta / 2 * nowTime * nowTime + startPosition : -delta / 2 * (--nowTime * (nowTime - 2) - 1) + startPosition
        },
        easeOut:function(nowTime,startPosition,delta,duration){
            return -delta*(nowTime/=duration)*(nowTime-2)+startPosition;
        }
    };
    a.Main = Main;
/*-----------------------------事件绑定--------------------------------*/
}(window));
$(function(){
    window.main = new Main();
    main.test();
    main.addEvent();
});



