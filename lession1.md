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
未完待续.....