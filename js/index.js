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
                // console.log('from和to两个参数必须且为数值');
            }
            // return 0;
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
        var value = [];
        var step = function() {
            // 当前的运动位置
            for(var i =0;i<from.length;i++){
                value[i] = fnGetValue(start, from[i], to[i] - from[i], during);
            }

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
            this.off("webkitAnimationEnd");
            this.tp.cb = undefined;
            this.tp.duration = this.tp.cls = "";
        },
        foHandler:function(e){
            e.stopPropagation();
            this.addClass("none").removeClass(this.tp.cls);
            if(this.tp.cb){this.tp.cb();};
            this.off("webkitAnimationEnd");
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
            var _self = this;
            for(i = 0,j = ImageURL.length;i<j;i++){
                (function(img, src) {
                    img.onload = function() {
                        haveLoaded+=1;
                        var percent = haveLoaded / ImageURL.length,
                             num = Math.ceil(percent * 100);
                        if(rd){
                            $(".num").html("- "+num + "% -");
                        }
                        if (haveLoaded == ImageURL.length && callback) {
                            _self.lazyLoad();
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
        this.clockSwitch;//Interval或Timeout句柄

        this.loadingOver = false;
        this.$milkLoader = $(".loader-circle");
        this.$num = $(".num");

        this.pages = ["",""];//页面跳转管理

        this.touch ={//touch数据
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
        
        this.printer = {//打字机
            printStr:"",//要打印的字符串
            printLen:0,//打印字符串的长度
            $container:undefined,//打印机的容器
            now:0//已打印文字长度
        };

        this.view = {//krpano视角转动
            startH:0,//起始横坐标
            startV:0,//起始纵坐标
            endH:0,//终点横坐标
            endV:0,//终点纵坐标
            point:[{h:-11.909, v:0},{h:133.793, v:0},{h:216.242, v:0},{h:314.177, v:0},{h:38.775,v:0}]//多个需要转到的角度
        };

        this.bgm ={
            obj:document.getElementById("bgm"),
            id:"bgm",
            isPlay:false,
            button:$(".music-btn")
        };

        this.picUrl = "images/";//图片路径

        this.ImageList = [
            this.picUrl+"3d_img_1.png",
            this.picUrl+"3d_img_2.png",
            this.picUrl+"3d_img_2_1.png",
            this.picUrl+"3d_img_3.png",
            this.picUrl+"3d_img_4.png",
            this.picUrl+"3d_img_4_1.png",
            this.picUrl+"3d_img_5.png",
            this.picUrl+"3d_img_5_1.png",
            this.picUrl+"3d_img_6.png",
            this.picUrl+"3d_img_6_1.png",
            this.picUrl+"3d_img_7.png",
            this.picUrl+"3d_img_7_1.png",
            this.picUrl+"3d_img_8.png",
            this.picUrl+"3d_img_8_1.png",
            this.picUrl+"3d_img_9.png",
            this.picUrl+"3d_img_9_1.png",
            this.picUrl+"3d_img_10.png",
            this.picUrl+"3d_img_10_1.png",
            this.picUrl+"3d_img_11.png",
            this.picUrl+"3d_img_11_1.png",
            this.picUrl+"3d_img_12.png",
            this.picUrl+"3d_img_12_1.png",
            this.picUrl+"3d_img_13.png",
            this.picUrl+"3d_img_13_1.png",
            this.picUrl+"3d_img_14.png",
            this.picUrl+"3d_img_14_1.png",
            this.picUrl+"3d_img_15.png",
            this.picUrl+"3d_img_15_1.png",
            this.picUrl+"3d_img_15_3.png",
            this.picUrl+"3d_img_15_4.png",
            this.picUrl+"3d_img_16.png",
            this.picUrl+"3d_img_16_1.png",
            this.picUrl+"3d_img_16_2.png",
            this.picUrl+"3d_img_17.png",
            this.picUrl+"3d_img_17_1.png",
            this.picUrl+"3d_img_17_2.png",
            this.picUrl+"3d_img_18.png",
            this.picUrl+"3d_img_18_1.png",
            this.picUrl+"3d_img_18_2.png",
            this.picUrl+"3d_img_19.png",
            this.picUrl+"3d_img_19_1.png",
            this.picUrl+"3d_img_20.png",
            this.picUrl+"3d_img_20_1.png",
            this.picUrl+"3d_img_21.png",
            this.picUrl+"3d_img_21_1.png",
            this.picUrl+"3d_img_22.png",
            this.picUrl+"3d_img_22_1.png",
            this.picUrl+"black.png",
            this.picUrl+"img_d.png",
            this.picUrl+"load_img_1.png",
            this.picUrl+"load_img_2.png",
            this.picUrl+"load_img_3.png",
            this.picUrl+"load_img_4.png",
            this.picUrl+"load_img_5.png",
            this.picUrl+"load_img_6.png",
            this.picUrl+"logo.png",
            this.picUrl+"p1_img_1.png",
            this.picUrl+"p1_img_2.png",
            this.picUrl+"p1_img_3.png",
            this.picUrl+"p1_img_4.png",
            this.picUrl+"p1_img_5.png",
            this.picUrl+"p2_img_0.png",
            this.picUrl+"p2_img_1.png",
            this.picUrl+"p2_img_2.png",
            this.picUrl+"p2_img_3.png",
            this.picUrl+"p2_img_4.png",
            this.picUrl+"p3_img_0.png",
            this.picUrl+"p3_img_1.png",
            this.picUrl+"p3_img_2.png",
            this.picUrl+"p3_img_3.png",
            this.picUrl+"p3_img_4.png",
            this.picUrl+"p4_img_1.png",
            this.picUrl+"p4_img_3.png",
            this.picUrl+"p4_img_4.png",
            this.picUrl+"p4_img_5.png",
            this.picUrl+"p4_img_6.png",
            this.picUrl+"p5_img_1.png",
            this.picUrl+"phone.png",
            this.picUrl+"poster.png",
            this.picUrl+"weile.png"
        ];

        this.gameData = {
            success:false,
            haveFind : [],//底部的秘籍
            prize:["toolBar-icon1","toolBar-icon2","toolBar-icon3"],
            haveTouchExit:false,//是否已经点击过蓝色门
            haveAccount:false//是否已经结算过成绩,意味着结束游戏3个按钮动画已经做过
        };
        this.layer = {
            $page:$(".P_layer"),
            $container1:$(".op-icon1"),
            $container2:$(".op-icon2"),
            $container3:$(".op-icon3"),
            $container4:$(".op-white1"),
            $txt1:$(".op-icon1 .addTxt"),
            $txt2:$(".op-icon2 .addTxt"),
            $txt3:$(".op-icon3 .addTxt")
        };
        this.block1 = {//视频区域
            success:false,
            successStr:"你已收集到此处图鉴，请寻找<br>其他互动区域",
            spotStr:[],
            iconStr:"点击视频查看，找到我们是谁，即可获取创之视角图鉴。",
            haveFind :[],
            $toolIcon:$(".btn1"),//创之视角
        };
        this.block2 = {//糕点区域
            success:false,
            successStr:"你已收集到此处图鉴，请寻找<br>其他互动区域",
            spotStr:["芝士挞（咖啡、芒果）<br>恭喜您激活了密之配方","慕思（巧克力，芒果）<br>恭喜您激活了密之配方","椰香卷 （焦糖，抹茶）<br>恭喜您激活了密之配方","半熟乳酪（轻，重）<br>恭喜您激活了密之配方"],
            iconStr:"点击展柜中的产品查看配方即可获取密之配方图鉴",
            haveFind :[],
            $toolIcon:$(".btn2"),//密之配方
        };
        this.block3 = {//厨师区域
            success:false,
            successStr:"你已收集到此处图鉴，请寻找<br>其他互动区域",
            spotStr:["恭喜您成功选对材料：<br>安佳奶油干酪","恭喜您成功选对材料：<br>安佳牧童黄油","您选的原材料是：安佳马苏里拉干酪，材料不对，请重新选择","您选的原材料是：安佳再制切达干酪，材料不对，请重新选择","芝士蛋挞"],
            iconStr:"芝士蛋糕越来越受到年轻一代<br>的喜爱，我正在制作半熟芝士，<br>帮我找一下奶油干酪吧",
            haveFind :[],
            $toolIcon:$(".btn3"),//厨之奥义
        };
        this.block4 = {
            spotStr:["奶油泡芙","抹茶饼干"],
        };
        this.WhitePointStr = ["与销售面对面沟通，进一步<br>商业洽谈","查看更多商业解决方案，联系<br>现场销售获得内容","流动播放品牌产品和渠道资讯，更有互动惊喜等待大家","活动现场有新品发布，欢迎来<br>到活动现场一同见证!","提供前店后厨的全套解决方案","最红最潮流的配方演示"];


        this.krpano;

        this.V = {//视频
            id:"video",
            currentTime:0,
            isPlay:false,
            obj:document.getElementById("video")
        };
        
        this.flash = {
            startAlpha : 1,
            endAlpha : 0,
            dir:1,
            aniType:"Sine.easeOut"
        };

        this.swiper1;
        this.swiper2;
        this.init();
    };
    Main.prototype = {
        //////////////辅助类函数/////////////
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
        },//限制手机号长度
        print:function(string,$obj,speed,callback){//打字机，传入的参数:待打印字符串，容器，定时器的间隔,打印结束回调函数
            var _self = this;
            _self.printer.$container = $obj;
            _self.printer.printStr = string;
            _self.printer.printLen = _self.printer.printStr.length;

            _self.clockSwitch = setInterval(function(){
                _self.printer.$container[0].innerHTML +=_self.printer.printStr[_self.printer.now];
                _self.printer.now+=1;
                if(_self.printer.now == _self.printer.printLen){
                    setTimeout(function(){
                        callback();
                    },speed);
                    clearInterval(_self.clockSwitch);
                    _self.clockSwitch = undefined;
                }

            },speed);

        },//打字机
        banTouchVr:function(){
            $(".P_banTouch").removeClass("none");
        },//禁止拖拽场景
        allowTouchVr:function(){
            $(".P_banTouch").addClass("none");
        },//允许拖拽场景
        scrollInit:function(selector,start){
            this.touch.ScrollObj = $(selector);
            this.touch.StartY = 0;
            this.touch.NewY = 0;
            this.touch.addY = 0;
            this.touch.scrollY = 0;
            this.touch.limitDown = this.touch.ScrollObj.height()<start?0:(start-this.touch.ScrollObj.height());
        },//初始化滚动
        min:function(a,b){
            return (a>b?b:a);
        },//获取较小的数

        rotateView:function(){
            var _self = this;
            setTimeout(function(){
                Math.animation([-12],
                    [348],
                    6500,
                    'Sine.easeInOut',
                    function (value) {
                        _self.krpano.call("set(view[v2].hlookat,'"+value[0]+"');");
                    },
                    function(){
                        console.log("视角转动结束");
                        $(".rule-mask").fi();
                        // _self.krpano.call("set(view[v2].hlookat,'348');");
                        _self.allowTouchVr();
                        $(".toolBar").addClass("ani-bar");
                    }
                );
            },1000);
        },
        setIconLayerTxt:function(n){
            switch(n){
                case "s"://迎宾区
                    console.log("迎宾区文字不需要设置");
                    break;
                case "1"://视频区
                    if(this.block1.success){//找到物品后，视频区域icon文字
                        this.layer.$txt1.html(this.block1.successStr);
                    }
                    else{
                        this.layer.$txt1.html(this.block1.iconStr);
                    }
                    break;
                case "2"://糕点区
                    if(this.block2.success){//找到物品后，视频区域icon文字
                        this.layer.$txt2.html(this.block2.successStr);
                    }
                    else{
                        this.layer.$txt2.html(this.block2.iconStr);
                    }
                    break;
                case "3"://厨师区
                    if(this.block3.success){//找到物品后，视频区域icon文字
                        this.layer.$txt3.html(this.block3.successStr);
                    }
                    else{
                        this.layer.$txt3.html(this.block3.iconStr);
                    }
                    break;
            };
        },//设置高亮icon提示文字
        setSpotLayerTxt:function(n){
            switch(n){
                ////////////////////////糕点区域/////////////////////////
                case "21":
                    if(this.block2.success){
                        this.layer.$txt2.html(this.block2.successStr);
                    }
                    else{
                        this.getKey(2);
                        this.layer.$txt2.html(this.block2.spotStr[0]);
                    }
                    break;
                case "22":
                    if(this.block2.success){
                        this.layer.$txt2.html(this.block2.successStr);
                    }
                    else{
                        this.getKey(2);
                        this.layer.$txt2.html(this.block2.spotStr[1]);
                    }
                    break;
                case "23":
                    if(this.block2.success){
                        this.layer.$txt2.html(this.block2.successStr);
                    }
                    else{
                        this.getKey(2);
                        this.layer.$txt2.html(this.block2.spotStr[2]);
                    }
                    break;
                case "24":
                    if(this.block2.success){
                        this.layer.$txt2.html(this.block2.successStr);
                    }
                    else{
                        this.getKey(2);
                        this.layer.$txt2.html(this.block2.spotStr[3]);
                    }
                    break;
                ////////////////////////糕点区域/////////////////////////

                ////////////////////////厨师区域/////////////////////////
                case "31":
                    if(this.block3.success){
                        this.layer.$txt3.html(this.block3.successStr);
                    }
                    else{
                        this.getKey(3);
                        this.layer.$txt3.html(this.block3.spotStr[0]);
                    }
                break;
                case "32":
                    if(this.block3.success){
                        this.layer.$txt3.html(this.block3.successStr);
                    }
                    else{
                        this.getKey(3);
                        this.layer.$txt3.html(this.block3.spotStr[1]);
                    }
                    break;
                case "33":
                    if(this.block3.success){
                        this.layer.$txt3.html(this.block3.successStr);
                    }
                    else{
                        this.layer.$txt3.html(this.block3.spotStr[2]);
                    }
                    break;
                case "34":
                    if(this.block3.success){
                        this.layer.$txt3.html(this.block3.successStr);
                    }
                    else{
                        this.layer.$txt3.html(this.block3.spotStr[3]);
                    }
                    break;
                case "35":
                    if(this.block3.success){
                        this.layer.$txt3.html(this.block3.successStr);
                    }
                    else{
                        this.layer.$txt3.html(this.block3.spotStr[4]);
                    }
                    break;
                ////////////////////////厨师区域/////////////////////////

                ////////////////////////后厨展示/////////////////////////
                case "41"://抹茶饼干
                        this.layer.$txt3.html(this.block4.spotStr[1]);
                    break;
                case "42"://奶油泡芙
                    this.layer.$txt3.html(this.block4.spotStr[0]);
                    break;
                ////////////////////////后厨展示/////////////////////////

                ////////////////////////白点/////////////////////////
                case "w1":
                    this.layer.$txt3.html(this.WhitePointStr[0]);
                    break;
                case "w2":
                    this.layer.$txt3.html(this.WhitePointStr[1]);
                    break;
                case "w3":
                    this.layer.$txt3.html(this.WhitePointStr[2]);
                    break;
                case "w4":
                    this.layer.$txt3.html(this.WhitePointStr[3]);
                    break;
                // case "w5":
                //     this.layer.$txt3.html(this.WhitePointStr[4]);
                //     break;
                case "w6":
                    this.layer.$txt3.html(this.WhitePointStr[5]);
                    break;
                case "red":
                    this.layer.$txt3.html("集齐3个图鉴获取秘钥后方可开启");
                    break;
                ////////////////////////白点/////////////////////////


            }

        },//设置普通热点提示文字
        fixView:function(hd,compare){
            var round = Math.abs(parseInt(hd/360));//圈数处理
            if(hd>0){
                hd = hd-360*round;
            }
            else{
                hd = hd+360*round;
            }
            //不改变弧度的正负，只去除多余的圈数，防止运动时转圈

            var sub = [],
                tempHd=[hd,hd+360,hd-360];

            sub = [tempHd[0]-compare,tempHd[1]-compare,tempHd[2]-compare];

            var minSub = Math.abs(sub[0]),
                minSubIndex = 0;
            for(var i = 0;i<3;i++){
                if(Math.abs(sub[i])<minSub){
                    minSub = Math.abs(sub[i]);//得到最小的sub
                    minSubIndex = i;//得到最小sub的index
                }
            }



            return tempHd[minSubIndex];
            //此时弧度在正负360度以内;
            // if(compare>hd){
            //
            // }
        },//修复度数，防止大角度转动
        processViewData:function(n){
            var _self = this;
            if(n=="s"){
                n = 0;
            }
            _self.view.endH = _self.view.point[n].h;//第n个高亮icon横坐标
            _self.view.endV = _self.view.point[n].v;//第n个高亮icon纵坐标

            _self.view.h = _self.fixView(_self.krpano.get("view[v2].hlookat"),_self.view.endH);//修复一下当前水平视角的值，避免359度转到1度需要大幅度转动,两个参数:当前所在视角，终点视角
            _self.view.v = _self.fixView(_self.krpano.get("view[v2].vlookat"),_self.view.endV);//修复一下当前视角的值，避免359度转到1度需要大幅度转动
        },
        getKey:function(n){
            var _self = this;
            switch(n){
                case 1:
                    this.block1.success = true;
                    _self.gameData.haveFind.push(_self.gameData.prize[0]);
                    $(".btn1 .default").addClass("none");
                    $(".btn1 .light").removeClass("none");
                    // $(".btn1 .default").fo();
                    break;
                case 2:
                    this.block2.success = true;
                    _self.gameData.haveFind.push(_self.gameData.prize[1]);
                    $(".btn2 .default").addClass("none");
                    $(".btn2 .light").removeClass("none");
                    break;
                case 3:
                    this.block3.success = true;
                    _self.gameData.haveFind.push(_self.gameData.prize[2]);
                    $(".btn3 .default").addClass("none");
                    $(".btn3 .light").removeClass("none");
                    break;
            }
        },//开启工具条图标
        account:function(){
            if(this.gameData.haveAccount){//已经结算过成绩，防止再次播放动画
                return;
            }
            var _self = this;
            var l = this.gameData.haveFind.length;
            if(l==3){
                this.gameData.haveAccount = true;
                _self.banTouchVr();
                $(".btn-txt").fo(function(){//图标底下文字隐去
                    // $(".ui-white-circle").css({"opacity":"1"});//按钮变白
                    $(".btn1").css({"transform":"translateX(190px)"});
                    $(".btn3").css({"transform":"translateX(-190px)"});
                    setTimeout(function(){//白完以后向中间移动
                        $(".btnV,.btnV-txt").fi();//钥匙图标出现
                        $(".btn1,.btn2,.btn3").fo();
                    },1000);
                    setTimeout(function(){
                        // $(".btn1,.btn2,.btn3").addClass("none");
                        // $(".btnV .ui-white-circle").css({"opacity":"0"});
                        // $(".btnV-txt").fi(1000,function(){
                        //     _self.allowTouchVr();
                        // });

                        _self.allowTouchVr();

                    },2000)

                });
                this.krpano.call("set(hotspot[tip_red].visible,false)");
                this.krpano.call("set(hotspot[tip_blue].visible,true)");
            }
            else{
                console.log("还差"+(3-l)+"个图鉴即可打开胜利之门");
            }
        },//检测是否已经收集全所有

        flashAni:function(){
            var _self = this;
            Math.animation([_self.flash.startAlpha],
                [_self.flash.endAlpha],
                1000,
                _self.flash.aniType,
                function (value) {
                    _self.krpano.call("set(hotspot[block2_1_l].alpha,'"+value[0]+"');");
                    _self.krpano.call("set(hotspot[block2_2_l].alpha,'"+value[0]+"');");
                    _self.krpano.call("set(hotspot[block2_3_l].alpha,'"+value[0]+"');");
                    _self.krpano.call("set(hotspot[block2_4_l].alpha,'"+value[0]+"');");
                    _self.krpano.call("set(hotspot[block3_1_l].alpha,'"+value[0]+"');");
                    _self.krpano.call("set(hotspot[block3_2_l].alpha,'"+value[0]+"');");
                    _self.krpano.call("set(hotspot[block3_3_l].alpha,'"+value[0]+"');");
                    _self.krpano.call("set(hotspot[block3_4_l].alpha,'"+value[0]+"');");
                    _self.krpano.call("set(hotspot[block4_1_l].alpha,'"+value[0]+"');");
                    _self.krpano.call("set(hotspot[block4_2_l].alpha,'"+value[0]+"');");
                },
                function(){
                    _self.flash.dir = -_self.flash.dir;
                    if(_self.flash.dir == 1){
                        _self.flash.startAlpha = 1;
                        _self.flash.endAlpha = 0;
                        _self.flash.aniType = "Sine.easeOut"
                    }
                    else{
                        _self.flash.startAlpha = 0;
                        _self.flash.endAlpha = 1;
                        _self.flash.aniType = "Sine.easeIn"
                    }
                    if(_self.flashAni){
                        _self.flashAni();
                    }
                }
            );
        },//热点闪烁
        //////////////辅助类函数/////////////

        //////////////kp对外/////////////
        iCon:function(n){
            var _self = this;
            _self.banTouchVr();//禁止触摸

            _self.processViewData(n);//处理视角

            _self.setIconLayerTxt(n);//增加第n个icon对应的laery中的文字

            Math.animation([_self.view.h,_self.view.v],
                [_self.view.endH,_self.view.endV],
                1000,
                'Sine.easeInOut',
                function (value) {
                    _self.krpano.call("set(view[v2].hlookat,'"+value[0]+"');");
                    _self.krpano.call("set(view[v2].vlookat,'"+value[1]+"');");
                },
                function(){
                    switch(n){
                        case "s"://迎宾区
                            $(".op-icons").removeClass("none");
                            break;
                        case "1"://视频区域
                            $(".op-icon1").removeClass("none");
                            break;
                        case "2"://糕点区域
                            $(".op-icon2").removeClass("none");
                            break;
                        case "3"://厨师区域
                            $(".op-icon3").removeClass("none");
                            break;
                    }
                    _self.allowTouchVr();//允许touch
                    $(".P_layer").fi(function(){
                        _self.swiper1.startAutoplay();
                    });//layer出现
                    _self.swiper1.update();
                    _self.swiper1.slideTo(1,0);

                }
            );
            // switch(n){
            //     case "1":
            //         _self.view.h = _self.fixView(_self.krpano.get("view[v2].hlookat"),_self.view.endH);//第一个高亮icon横坐标
            //         _self.view.v = _self.fixView(_self.krpano.get("view[v2].vlookat"),_self.view.endV);//第一个高亮icon纵坐标
            //         // Math.animation([_self.krpano.get("view[v2].hlookat"),_self.krpano.get("view[v2].vlookat")],
            //         Math.animation([_self.view.h,_self.view.v],
            //                         [_self.view.endH,_self.view.endV],
            //                         1000,
            //                         'Sine.easeInOut',
            //                         function (value) {
            //                             _self.krpano.call("set(view[v2].hlookat,'"+value[0]+"');");
            //                             _self.krpano.call("set(view[v2].vlookat,'"+value[1]+"');");
            //                         },
            //                         function(){
            //                             $(".ruller").removeClass("none");
            //                             $(".P_layer").fi();
            //                             _self.allowTouchVr();
            //                         }
            //         );
            //         // $(".ruller").removeClass("none");
            //         // $(".P_layer").fi();
            //         break;
            // }
        },//红色高亮Icon
        hotspotClick:function(n){
            this.setSpotLayerTxt(n);
            switch(n){
                case "11"://视频
                    $(".blue-mask").fi();
                    break;
                case "21"://小吃
                    // this.krpano.call("set(hotspot[block4_1_l].visible,true)");
                    // this.krpano.call("set(hotspot[block2_1_l].alpha,1)");
                    this.layer.$container2.removeClass("none");
                    this.layer.$page.fi();
                    break;
                case "22":
                    this.layer.$container2.removeClass("none");
                    this.layer.$page.fi();
                    break;
                case "23":
                    this.layer.$container2.removeClass("none");
                    this.layer.$page.fi();
                    break;
                case "24":
                    this.layer.$container2.removeClass("none");
                    this.layer.$page.fi();
                    break;
                case "31"://厨师区域
                    this.layer.$container3.removeClass("none");
                    this.layer.$page.fi();
                    break;
                case "32":
                    this.layer.$container3.removeClass("none");
                    this.layer.$page.fi();
                    break;
                case "33":
                    this.layer.$container3.removeClass("none");
                    this.layer.$page.fi();
                    break;
                case "34":
                    this.layer.$container3.removeClass("none");
                    this.layer.$page.fi();
                    break;
                case "41":
                    this.layer.$container3.removeClass("none");
                    this.layer.$page.fi();
                    break;
                case "42":
                    this.layer.$container3.removeClass("none");
                    this.layer.$page.fi();
                    break;
                case "w5":
                    $(".blue-mask2").fi();
                    break;
                case "swiper2":
                    var _self = this;
                    this.layer.$container4.removeClass("none");
                    this.layer.$page.fi(function(){
                        _self.swiper2.startAutoplay();
                    });
                    this.swiper2.update();
                    this.swiper2.slideTo(1,0);
                    break;
                default:
                    this.layer.$container3.removeClass("none");
                    this.layer.$page.fi();
                    break;
            }

        },//普通热点
        exit:function(){

            var _self = this;
            if(!_self.gameData.haveTouchExit){
                _self.gameData.haveTouchExit = true;
                _self.layer.$container4.removeClass("none");
                _self.layer.$page.fi(function(){
                    _self.swiper2.startAutoplay();
                });
                _self.swiper2.update();//swiper更新
                _self.swiper2.slideTo(1,0);
            }
            else{
                var dreamer = $(".P_dreamer");
                dreamer.removeClass("none");
                _self.processViewData(4);//处理视角
                Math.animation([_self.view.h,_self.view.v],
                    [_self.view.endH,_self.view.endV],
                    1000,
                    'Sine.easeInOut',
                    function (value) {
                        _self.krpano.call("set(view[v2].hlookat,'"+value[0]+"');");
                        _self.krpano.call("set(view[v2].vlookat,'"+value[1]+"');");
                    },
                    function(){
                        $(".P_vr").css({"transform":"scale(3)"});//画面放大，进入门中
                        dreamer.css({"opacity":"1"});//画面变白
                        setTimeout(function(){
                            $(".P_vr").addClass("none");
                            $(".P_result").removeClass("none")
                            _self.top();
                            dreamer.css({"opacity":"0"})
                        },1000);
                        setTimeout(function(){
                            dreamer.addClass("none");
                        },2000);
                        // _self.presult();
                    }
                );
            }

            
            // this.pvrleave();
            // this.presult();
        },
        //////////////kp对外/////////////

        //////////////流程类函数/////////////
        init:function(){
            this.swiper1 = new Swiper ('.op-icons .swiper-container',{
                direction : 'vertical',//纵向
                onlyExternal : true,//不可touch和mouse
                autoplay : 2000,//自动播放
                loop : true,//循环
                // slideClass:"slideClass1"
            });
            this.swiper2 = new Swiper ('.op-white1 .swiper-container',{
                direction : 'vertical',//纵向
                onlyExternal : true,//不可touch和mouse
                autoplay : 2000,//自动播放
                loop : true,//循环
            });
        },
        start:function(){
            Utils.preloadImage(this.ImageList,function(){this.loadingOver = true;}.bind(this));
            this.milkLoader()
        },
        milkLoader:function(){
            var now=0,
                total = 99,
                add = 0,
                percent,
                _self = this;
            var clock = setInterval(function(){
                add = 3*Math.random();
                if(now+add<total){
                    now+=add;
                }
                else{
                    now = total;
                    if(_self.loadingOver){
                        now = 100;
                        _self.$num.html("- 100% -");
                        _self.startCallback();
                        $(".milk-down").removeClass("ani-milkDown").fo();
                        clearInterval(clock);
                    }
                }
                percent = now/total;
                _self.$milkLoader.css("backgroundPositionY",(200-(250*percent))+"px")
                _self.$num.html("- "+Math.ceil(now) + "% -");
            },100);
        },
        startCallback:function(){
            var _self = this;
            setTimeout(function(){
                _self.p1();
                _self.top();
                _self.loadingleave();
            },1000)

        },
        test:function(){
            // this.print(this.Str[0],$(".op-printer"),100,function(){
            //     $(".P_test").fo(800);
            //     $(".P_vr").fi(800);
            // })
            this.loadVr();
            var _self = this;
            setTimeout(function(){
                _self.krpano = document.getElementById("krpanoSWFObject");
                _self.p1leave();
                _self.pvr();
            },1000);
        },
        loadingleave:function(){
            $(".P_loading").fo();
        },
        top:function(){
            $(".top").fi();
        },
        topleave:function(){
            $(".top").fo();
        },
        p1:function(){
            var _self = this;
            $(".cloud").removeClass("none");
            $(".P1").fi(function(){
                // _self.loadVr();
            });
        },
        p1leave:function(){
            $(".P1").fo();
        },
        p2:function(){
            $(".P2").fi();
        },
        p2leave:function(){
            $(".P2").fo();
        },
        p3:function(){
            $(".P3").fi();
        },
        p3leave:function(){
            $(".P3").fo();
        },
        loadVr:function(){
            embedpano({swf:"tour.swf", xml:"tour.xml?3", target:"pano", html5:"prefer", mobilescale:1.0, passQueryParameters:true});
        },
        pvr:function(){
            this.krpano = document.getElementById("krpanoSWFObject");
            this.banTouchVr();
            var _self = this;
            $(".P_vr").fi();
            this.krpano.call("loadscene(scene_2,null,get(skin_settings.loadscene_flags),get(skin_settings.loadscene_blend))");
            this.rotateView();
            this.flashAni();
        },
        pvrleave:function(){
            $(".P_vr").fo();
        },
        presult:function(){
            this.top();
            $(".P_result").fi(function(){
                $(".P_dreamer").addClass("none");
            });
        },
        presultleave:function(){
            $(".P_result").fo();
        },
        pover:function(){
            $(".P_over").fi();
        },
        pshare:function(){
            $(".P_share").fi();
        },
        //////////////流程类函数/////////////


        playbgm:function(){
            Media.playMedia(this.bgm.obj.id);
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
            var ios = Utils.browser("iPhone");
            document.ontouchmove = function(e){e.preventDefault();};

            /////////P_layer//////////
            $(".P_layer").on("touchend",function () {
                $(this).fo(function(){
                    _self.account();
                    $(".ui-txtBox").addClass("none");
                });
            });

            $(".rule-mask").on("touchend",function(){
                $(this).fo();
            });
            /////////P_layer//////////

            /////////P1//////////
            $(".p1-man").on("webkitAnimationEnd",function(){
                setTimeout(function(){
                    _self.p1leave();
                    _self.p2();
                },1500);
                _self.loadVr();
                $(this).off("webkitAnimationEnd");
            });
            var pop3Handle1 = function(){
                $(this).removeClass("opacity ani-pop delay06");
                $(".pop1,.pop2").removeClass("opacity ani-pop delay02 delay04").fo();
                $(this).off("webkitAnimationEnd",pop3Handle1).on("webkitAnimationEnd",pop3Handle2).addClass("ani-pop2");
            };
            var pop3Handle2 = function(){
                $(".p1-man").addClass("ani-toBig");
                $(this).removeClass("opacity ani-pop delay06");
                $(this).off("webkitAnimationEnd",pop3Handle2);
            };
            $(".pop3").on("webkitAnimationEnd",pop3Handle1);
            /////////P1/////////

            /////////P2/////////
            var EndHandler1 = function(){
                setTimeout(function(){
                    $(".p2-title").removeClass("opacity delay02 delay05 delay08 ani-toBig");
                    setTimeout(function(){
                        $(".p2-title1").addClass("ani-p2-t1");
                        $(".p2-title2").addClass("ani-p2-t2");
                        $(".p2-title3").addClass("ani-p2-t3");
                    },1000);
                    $(".p2-title3").off("webkitAnimationEnd",EndHandler1).on("webkitAnimationEnd",EndHandler2);
                },1000);
            };
            var EndHandler2 = function(){
                var str = "如何解决?";
                _self.print(str,$(".op-printer"),150,function(){
                    $(".baidu").addClass("ani-baidu");
                });
                $(".p2-title3").off("webkitAnimationEnd",EndHandler2);
            };
            $(".p2-title3").on("webkitAnimationEnd",EndHandler1);
            $(".baidu").on("webkitAnimationEnd",function(){
                _self.p2leave();
                _self.p3();
                console.log(this);
                $(".baidu").off("webkitAnimationEnd");
            });
            /////////P2/////////

            /////////P3//////////
            $(".p3-btn").on("touchend",function(){
                _self.p3leave();
                _self.pvr();
                _self.topleave();
            });
            /////////P3//////////

            /////////blue-mask//////////
            $(".mask-btn1").on("touchend",function(){
                if(!_self.block1.success){
                    $(".blue-err").removeClass("none");
                }
            });
            $(".mask-btn2").on("touchend",function(){
                if(!_self.block1.success){
                    $(".blue-err").removeClass("none");
                }
            });
            $(".mask-btn3").on("touchend",function(){
                $(".blue-err").addClass("none");
                if(!_self.block1.success){
                    _self.getKey(1);
                }
                $(".blue-mask").fo();
                _self.account();
            });
            // $(".play-btn").on("touchend",function(){
            //     _self.V.obj.play();
            //     $(this).fo();
            // });

            $(_self.V.obj).on({
                pause:function(){
                    _self.V.isPlay = false;
                    $(".play-btn").fi();
                },
                ended:function(){
                    _self.V.isPlay = false;
                    $(".play-btn").fi();
                }
            });
            $(".videoBox").on("touchend",function(){
                if(ios||!ios){
                    if(_self.V.isPlay){
                        _self.V.obj.pause();
                        _self.V.isPlay = false;
                        $(".play-btn").fi();
                    }
                    else{
                        _self.V.obj.play();
                        _self.V.isPlay = true;
                        $(".play-btn").fo();
                    }
                }
                else{
                    console.log("安卓");
                }
            });

            $(".blue2xx").on("touchend",function(){
                $(".blue-mask2").fo();
            });
            /////////blue-mask//////////



            $(".P_share").on("touchend",function(){
                $(this).fo();
            });
            $(".pk-btn").on("touchend",function(){
                _self.pshare();
            });
            $(".result-submit").on("touchend",function(){
                var number = $("#phone").val();
                if(!(/^1(3|4|5|7|8)\d{9}$/.test(number))){console.log("请输入正确的手机号!");return;};
                _self.presultleave();
                _self.pover();
            });
            $("#phone").on("input",function(){
                _self.limitNum($(this)[0]);
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
        },

    };
    a.Main = Main;
/*-----------------------------事件绑定--------------------------------*/
}(window));
$(function(){
    window.main = new Main();
    // main.test();
    main.start();
    main.addEvent();
});



