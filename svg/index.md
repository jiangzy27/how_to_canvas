###svg是一种用xml语言绘制图片的一种技术。
svg是一堆预定义好的标签的组合使用，比如：

```
<circle cx="100" cy="50" r="50" stroke="black" stroke-width="2" fill="green"/>
```
这个circle的标签是预定义的，然后是坐标，半径，填充颜色等，其实跟canvas基本类似，灵活性稍差。
在html使用时，可以用iframe，object，embed三种标签内嵌使用，在github上查看时，可以直接被解析为图片。
一个完成的svg图片如下所示：

```
<?xml version="1.0" standalone="no"?>

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

    <circle cx="100" cy="50" r="50" stroke="black" stroke-width="2" fill="green"/>

</svg>
```
注意最后命名为.svg文件。