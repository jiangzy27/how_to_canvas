###画笔颜色
前面我们讲了绘制简单图形还有图片，下面我们说一下如何加入画笔颜色呢？<br />

```
fillStyle = color
设置图形的填充颜色。
strokeStyle = color
设置图形轮廓的颜色。

```
color默认情况下是黑色的。
那我们画一个蓝色矩形？
```
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.fillStyle = "blue";

  ctx.fillRect(0,0,50,50);

  }
```
那我们还不满足，可不可以设置透明度呢？答曰：可以。<br />

```
ctx.globalAlpha = 0.2;
```