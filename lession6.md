前面大概说了一下基础的一些canvas画布的用法。我们今天看一下如何结合js的事件：
```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>canvas</title>
    <style>
        #canvas{
            background: greenyellow;
        }
    </style>
</head>

<body>
    <canvas id="canvas"></canvas>
</body>
</html>
<script>
        function drawPerson(x,y){
            ctx.save();
            ctx.beginPath();
            ctx.arc(x,y,13,Math.PI/7,-Math.PI/7,false);
            ctx.lineTo(x-6,y);
            ctx.fill();
            ctx.restore();
        }
        var obj = document.getElementById('canvas');
        var ctx = obj.getContext('2d');
        var x = 20,y=20;
        drawPerson(x,y);

        document.addEventListener('keydown',function(e){
           // alert(e.keyCode);//D:68,A:65,S:83,W:87
            //alert(obj.width);
            switch (e.keyCode){
                case 68:
                    x+=10;
                    break;
                case 65:
                    x-=10;
                    break;
                case 83:
                    y+=10;
                    break;
                case 87:
                    y-=10;
            }
            if(x < 20){
                x=20;
            }
            else if(x > 220){
                x = 220;
            }
            if(y<20){
                y=20;
            }
           else if(y>100){
                y = 100;
            }
            //x+=10;y+=10;
            console.log(x);console.log(y);
            ctx.clearRect(0,0,300,150);

            drawPerson(x,y);
        },false);

</script>
```
简单的一个动态效果，一个小人可以前后左右控制了，是不是很有成就感呢？


