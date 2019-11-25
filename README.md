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

CORS字段介绍：

（1）Access-Control-Allow-Methods

该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次"预检"请求。

（2）Access-Control-Allow-Headers

如果浏览器请求包括Access-Control-Request-Headers字段，则Access-Control-Allow-Headers字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在"预检"中请求的字段。

（3）Access-Control-Allow-Credentials

该字段与简单请求时的含义相同。

（4）Access-Control-Max-Age

该字段可选，用来指定本次预检请求的有效期，单位为秒。上面结果中，有效期是20天（1728000秒），即允许缓存该条回应1728000秒（即20天），在此期间，不用发出另一条预检请求。
