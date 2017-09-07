# sAlert.js
弹出对话框提示插件，同时支持jQuery和Zepto

## 使用示例

```javascript
<script src="sAlert.min.js"></script>
<script>
    $.sAlert({
        title: "标题提示",
        msg: "这里是内容提示"
    })
</script>
```

## 参数

选项 | 类型 | 默认值 | 描述
---- | ---- | ------ | ----
title | String | "" | 选填，对话框标题，不填则不显示
msg | String | "" | 必填，对话框内容，支持 HTML 代码
textalign | String | "center" | 选填，内容对齐方式，分别是 "left" / "center" / "right"
type | String | "alert" | 选填，对话框类型，分别是 "alert" / "confirm"
alert | Object | {<br/>alertlabel: "确定",<br/>alertevent: function() {}<br/>} | 选填，类型为 alert 时的设置项<br/>alertlabel: 自定义按钮文本<br/>alertevent: 点击按钮的自定义事件
confirm | Object |  {<br/>cancellabel: "取消",<br/>submitlabel: "确定",<br/>cancelevent: function() {},<br/>submitevent: function() {}<br/>} | 选填，类型为 confirm 时的设置项<br/>cancellabel: 自定义取消按钮的文本<br/>submitlabel: 自定义确认按钮的文本<br/>cancelevent: 点击取消按钮的自定义事件<br/>submitevent: 点击确认按钮的自定义事件

