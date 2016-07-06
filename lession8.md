###一个很重要的问题,大家看如下代码：
```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="../lib/easeljs-0.8.2.min.js"></script>
    <script src="../lib/tweenjs-0.6.2.min.js"></script>
    <style>
        #myCanvas{
            width:600px;
            height:600px;
            background: #ccc;
        }
    </style>
</head>
<body>
<canvas id="myCanvas" width="600px" height="600px"></canvas>
</body>
</html>
```
直觉上感觉是重复了，canvas设置了行内的宽高，又在css上设置了一遍，没必要啊吧，直接css设置不就行了。
错！这个问题我也忽视了很久，结果导致后面各种蛋疼的问题，画布画出来的图片总是失真，锯齿化严重等等问题，

####canvas一定要设置行内宽高！跟css设置的宽高不一样！！
####canvas一定要设置行内宽高！跟css设置的宽高不一样！！
####canvas一定要设置行内宽高！跟css设置的宽高不一样！！
重要的事情要说三遍！