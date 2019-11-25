# 跨域解决方案

1.JSONP跨域解决方案

2.CORS跨域资源共享

3.基于http proxy实现跨域请求

4.基于post message实现跨域处理

5.基于iframe的跨域解决方案：window.name/document.domin/localion.hash

6.Web scoket和nginx反向代理


JSONP跨域解决方案

一 不存在跨域请求的限制的标签

Script、img、link、iframe...

二 JSONP 原理

三 jsonp虽然很简单，但是有如下缺点：

1.JSONP只能处理GET请求

2.安全问题(请求代码中可能存在安全隐患)

3.要确定jsonp请求是否失败并不容易

CORS跨域资源共享
