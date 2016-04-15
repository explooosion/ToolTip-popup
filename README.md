# ToolTip-popup
###### This is a jQuery Plugin for ToolTip.　
## Demo
###### [CodePen](http://codepen.io/ta7382/pen/PNRyxr)
![Imgur](http://i.imgur.com/NHYPP1a.gif)
　
## Add CDN
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
```
　
## Add Link
```html
<link rel="stylesheet" type="text/css" href="popup.css">
<script src="popup.js"></script>
```
　
## Create a Tag
+ title = msg　
+ class = popup
```html
<a  href="#" title="你好啊旅行者~" class="popup">獵人</a>
```
　
## Initial
### move：up、down、left、right
```javascript
  $(function(){
  	$('.popup').popup({
  		move: 'down'
  	});
  });
```

