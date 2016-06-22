###保存和恢复
咱们这节课说说save()和restore()方法。<br />
这俩哥们顾名思义，一个是保存，一个是恢复。保存恢复啥呢？就是状态。比如我现在用蓝色画笔花了一个大大的矩形，
然后呢，我换了一个红色画笔，又画一个小矩形，都没啥问题的，咦，我又想用蓝色画笔再画个小矩形，可不可以切换到原来的那个画笔而不是重新声明呢？
其实这就用到了保存和恢复。我们可以把蓝色画笔保存一下，然后再恢复使用就ok了。我们直接上代码：
```
    function draw() {
        var ctx = document.getElementById('canvas').getContext('2d');

        ctx.fillStyle = 'blue';
        ctx.fillRect(15,15,120,120);

        ctx.save();                  // 保存画笔的蓝色状态。
        ctx.fillStyle = 'red';
        ctx.globalAlpha = 0.5;
        ctx.fillRect(30,30,20,20);

        ctx.restore();//恢复上一次的状态，画笔是蓝色滴！
        ctx.fillRect(150,80,20,20);//画出一个蓝色小矩形

    }
```