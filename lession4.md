###写文本
咱们画图差不多会了（其实还差很多，慢慢来），那咱们往画布里写几个字看看？咋写呢？<br />

```
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = "48px serif";//字体
  ctx.strokeText("Hello world", 10, 50);//内容，坐标位置
}
```
