第一节我们讲了几个简单的图形画法。其实还有很多东西，比如弧线，贝塞尔曲线等等，这些枯燥的玩意我们放到后边讲。<br />
我们迫不及待的想看到的是类似超级玛丽那样的动态图像效果，
如果canvas无法支持操作合成图像，那他就没啥可学的价值。
canvas支持的图片格式很多，比如png，gif或jpeg都是ok的。
我们这节课就看下如何在canvas插入图像。
将图片引入canvas需要以下两步基本操作:<br />
1.获取图片源。<br />
2.使用drawImage(image,x,y)将图片绘制在画布的指定位置上。<br />
咱们废话不多说，直接上代码:
```
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function(){
        ctx.drawImage(img,0,0);
    }
  img.src = 'http://i2.img.969g.com/news/imgx2012/05/24/187_145310_1c34f_lit.jpg';
 }
```
我引用了一张外部图片，也可以是本地图片，这个随便怎么搞都可以。我们看到这个图片有点稍大了，我们可以在drawImage函数再追加两个参数，
就可以起到缩放的目的。
```
ctx.drawImage(img,0,0,50,50);//缩放为50x50像素大小的图片。
```
好，我们就拿这个超级玛丽作为背景好了，然后再在上面绘制一个三角形咋样？
```
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function(){
        ctx.drawImage(img,0,0,300,150);//充满画布
            ctx.beginPath();
            ctx.moveTo(25,25);
            ctx.lineTo(105,25);
            ctx.lineTo(25,105);
            ctx.fill();//不用闭合，自动填充。

    }
  img.src = 'http://i2.img.969g.com/news/imgx2012/05/24/187_145310_1c34f_lit.jpg';
 }
```
