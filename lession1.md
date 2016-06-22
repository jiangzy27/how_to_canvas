##第一章
###canvas的简单使用方法
canvas技术首先是2d绘图，如果要玩3d，请移步webGL。<br />
我们在浏览器中声明一个canvas标签，就相当于创建了一块画布，在上面绘制图形。<br />
默认创建的画布规格是宽300px，高150px，不仅可以在画布上绘制静态图形，也可以让图形动起来，
这是canvas比较激动人心的地方，等于把flash技术集成进来了。但是flash直接放在网页的效果并不好，
前几年有流行过flash网页，但加载速度超级慢，等待的过程让人抓狂，所以流行了一段时间迅速销声匿迹，
但是flash的动画展示效果确实非常棒，现在我们用canvas技术重新定义了当年的flash，所以我们现在有n多理由学习它。<br />
先看一下如何创建画布：

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>canvas</title>
    <style>

        #canvas{
            background:darkred;
        }
    </style>
</head>

<body>
    <canvas id="canvas"></canvas>
</body>
</html>
```
要画画，先要有画笔，如何拿到一个画笔：
```
var canvasObj = document.getElementById('canvas');
var painter = canvas.getContext('2d');
```
拿到2d绘图的上下文，就等于拿到了画笔，可以开始作画了。<br />
>绘制矩形

1.填充矩形<br />

```
fillRect(x, y, width, height)
```
2.边框矩形<br />

```
strokeRect(x, y, width, height)
```
3.清除矩形<br />

```
clearRect(x, y, width, height)
```
我们看一个例子：

```
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25,25,100,100);
    ctx.clearRect(45,45,60,60);
    ctx.strokeRect(50,50,50,50);
  }
}

```
想想看如何让一个小矩形动起来呢？其实很简单，利用我们上面讲的那点知识就能搞出来。
我们用一个setInterval间歇函数，不断的画矩形，然后整体擦除，第二次画的时候位移偏一点，就能达到动起来的目的，很简单吧。

>绘制路径

图形的基本元素是路径。路径是就是一个闭合的曲线。我们用以下步骤画一个路径：<br />
1.首先，需要创建路径起始点。<br />
2.从起始点画出路径。<br />
3.把路径封闭。<br />
4.路径生成后，通过描边或填充来渲染图形。<br />
路径函数有：<br />
```
beginPath()
新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。

closePath()
闭合路径之后图形绘制命令又重新指向到上下文中。
stroke()
通过线条来绘制图形轮廓。
fill()
通过填充路径的内容区域生成实心的图形，会自动闭合路径。
moveTo()
将笔触移动到指定的坐标位置，也就是设置起始点。
lineTo()
绘制一条从当前位置到指定坐标的直线。
```
一大波函数来袭后，我们看看如何运用吧。我们试着画一个三角形看看：<br />

```
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    // 填充三角形
    ctx.beginPath();
    ctx.moveTo(25,25);
    ctx.lineTo(105,25);
    ctx.lineTo(25,105);
    ctx.fill();//不用闭合，自动填充。

    // 描边三角形
    ctx.beginPath();
    ctx.moveTo(125,125);
    ctx.lineTo(125,45);
    ctx.lineTo(45,125);
    ctx.closePath();//要闭合路径，相当于ps的蚂蚁线形成。
    ctx.stroke();//描边。
  }
}
```
