var DisplayObject = function(){
    this.id = '';
    this.name = '';
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.rotation = 0;
    this.alpha = 1;
    this.regX = 0;
    this.regY = 0;
    this.context = null;
    this.drawable = null;
    this._cache = null;
};
DisplayObject.prototype.initialize = function(props){

            for(var prop in props){
                if(this.hasOwnProperty(prop) || this[prop] !=undefined){
                    this[prop] = props[prop];
                }
            }
            return this;
};
DisplayObject.prototype._update = function(){
            this.update();
        };
DisplayObject.prototype.update = function(){
            return true;
        };
DisplayObject.prototype._render = function(context){
            var ctx = this.context || context;
            ctx.save();
            this.transform(ctx);
            this.render(ctx);
            ctx.restore();
        };
DisplayObject.prototype.render = function(context){
            context.drawImage(this.drawable,0,0);
        };
DisplayObject.prototype.transform = function(ctx){
            //移动坐标轴
            if(this.x != 0 || this.y != 0){
                ctx.translate(this.x,this.y);
            }
            //旋转：先定坐标，然后旋转
            if(this.regX !=0 || this.regY !=0){
                ctx.translate(this.regX,this.regY);
            }
            if(this.rotation %360 !=0){
                ctx.rotate(this.rotation%360*Math.PI/180);
            }
            //缩放
            if(this.scaleX !=1 || this.scaleY !=1){
                ctx.scale(this.scaleX,this.scaleY);
            }
            //归位
            if(this.regX !=0 || this.regY !=0){
                ctx.translate(-this.regX,-this.regY);
            }
            //透明度
            if(this.alpha>0){
                ctx.globalAlpha*=this.alpha;//相对于父容器的透明度
            }
        };
DisplayObject.prototype.cache = function(toImage,type){
            var w = this.width,h=this.height;
            var canvas = this._createDOM('canvas',{width:w,height:h});
            var context = canvas.getContext('2d');
            this.render(context);
            if(toImage){
                var image = new Image();
                img.width = w;
                img.height = h;
                img.src = canvas.toDataURL(type || 'image/png');
                //return img;
                this._cache = img;
            }
            this._cache = canvas;
        };
DisplayObject.prototype._createDOM = function(type,props){
            var dom = document.createElement(type);
            for(var p in props){
                var val = props[p];
                if(p == 'style'){
                    for(var s in val){
                        dom.style[s] = val[s];
                    }
                }else{
                    dom[p] = val;
                }
            }
            return dom;
        };
        //清除缓存
DisplayObject.prototype.uncache = function(){
            this._cache = null;
        };
DisplayObject.prototype.isCached = function(){
            return !!this._cache;//没有值返回false
        };
DisplayObject.prototype.toImage = function(type){
            return this.cache(true,type);
        };



