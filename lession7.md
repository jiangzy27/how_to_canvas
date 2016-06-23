###有关变形

>**translate**移动<br />

就是移动坐标系的意思。我们直接看例子:
```
    function draw(){
        var obj = document.getElementById('canvas');
        var ctx = obj.getContext('2d');
        ctx.translate(100,50);
        ctx.fillRect(20,20,30,30);
    }
```
我们看到，在(20,20)这个坐标点绘制的方块，其实真实坐标是(120,70)，也就是相对坐标。
为啥要用这个东西？这个其实就相当于css的absolute绝对定位和relative相对定位。<br />

>**rotate**旋转<br />

用法为rotate(angle)，我们还是直接看例子：

```
    function draw(){
        var obj = document.getElementById('canvas');
        var ctx = obj.getContext('2d');
        ctx.fillRect(50,50,30,30);

        ctx.rotate(Math.PI*45/180);//旋转45度角
        ctx.fillRect(50,50,30,30);
    }
```
可以结合translate一起试试看。<br />
>**scale**缩放<br>

用法为scale(x倍数,y倍数),其实就是缩放的坐标系了，上代码：<br />

```
    function draw(){
        var obj = document.getElementById('canvas');
        var ctx = obj.getContext('2d');
        ctx.fillRect(20,20,30,30);
        ctx.scale(2,2);
        ctx.fillRect(20,20,30,30);
    }
```
大家看到，放大了倍数之后，起始坐标点也发生了变化，相当于20*2+20.<br />

>**组合**<br />
