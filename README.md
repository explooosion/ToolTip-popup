# ToolTip-popup

THis is a jQuery Plugin for ToolTip.

## Add Link
```html
		<link rel="stylesheet" type="text/css" href="popup.css">
		<script src="popup.js"></script>
```

## Create a Tag
title = msg
class = popup
```html
    <a  href="#" title="你好啊旅行者~" class="popup">獵人</a>
```

## Initial
move：up、down、left、right
```javascript
  $(function(){
  	$('.popup').popup({
  		move: 'down'
  	});
  });
```

## Demo
[CodePen](http://codepen.io/ta7382/pen/PNRyxr)
