(function(w){
    var frameRate = 13;
    var scaleX = 1;
    var scaleY = 1;
    var gravity = 15;//重力加速度。
    var jump_speed = 5;//垂直速度
    var width = 40;
    var height = 96;
    var picwidth = 64;
    var pciheight = 64;

    var Man = function(x,y,img){
        this.x = x;
        this.y = y;
        this.sprite = null;
        this.init(img);
    };
    Man.prototype = {
        constructor:Man,
        init:function(img){
            var manSpriteSheet = new createjs.SpriteSheet({
                'images':[img],
                'frames': {
                    "height": pciheight,
                    "width": picwidth,
                    "regX": 0,//偏离起始坐标的位置
                    "regY": 1,
                    "count": 45//总共的帧数，跟图片数相对应
                },
                'animations':{
                    "run":{
                        frames:[21,20,19,18,17,16,15,14,13,12],
                        next:"run",
                        speed:1
                    },

                    "down":{
                        frames:[8,7,6,5,4,3,2,1,0],
                        next:"die",
                        speed:1
                    }
                }


            });
            this.sprite = new createjs.Sprite(manSpriteSheet,'run');
            this.sprite.framerate = 13;//帧播放速度
            this.sprite.setTransform(this.x, this.y, scaleX, scaleY);
            stage.addChild(this.sprite);
        },
        run:function(){
            this.sprite.gotoAndPlay('run');
        },

        down:function(){
            this.sprite.gotoAndPlay('down');

        }
    };

    w.createMan = function(x,y,img){
        return new Man(x,y,img);
    }
})(window);